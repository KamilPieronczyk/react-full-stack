import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { IJwtPayload } from './../../../models/auth/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async createOrUpdateUserFromJwt(user: IJwtPayload) {
    return this.prisma.user.upsert({
      where: { auth0Id: user.sub },
      update: {
        auth0Id: user.sub,
        email: user.email,
        name: user.userName,
      },
      create: {
        auth0Id: user.sub,
        email: user.email,
        name: user.userName,
      },
    });
  }
}
