import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { isJwtPayload } from 'apps/api/src/utils/guards/is-jwt-payload';
import * as dotenv from 'dotenv';
import { passportJwtSecret } from 'jwks-rsa';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IJwtPayload } from './../../../models/auth/jwt-payload.interface';

dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
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

  validate(payload: unknown): IJwtPayload {
    if (isJwtPayload(payload)) {
      return payload;
    }

    throw new Error('Invalid JWT payload');
  }
}
