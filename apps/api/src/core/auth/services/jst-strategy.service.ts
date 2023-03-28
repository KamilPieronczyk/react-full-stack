import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '@react-full-stack/database';
import * as dotenv from 'dotenv';
import { passportJwtSecret } from 'jwks-rsa';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { isJwtPayload } from '../../../utils/guards/is-jwt-payload';
import { AuthService } from './auth.service';

dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${process.env.AUTH0_ISSUER_URL}.well-known/jwks.json`,
      }),

      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: process.env.AUTH0_AUDIENCE,
      issuer: `${process.env.AUTH0_ISSUER_URL}`,
      algorithms: ['RS256'],
    });
  }

  async validate(payload: unknown): Promise<User> {
    if (isJwtPayload(payload)) {
      const user = await this.authService.createOrUpdateUserFromJwt(payload);
      return user;
    }

    throw new Error('Invalid JWT payload');
  }
}
