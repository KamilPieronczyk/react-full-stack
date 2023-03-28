import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User as TUser } from '@react-full-stack/database';
import { IAuthRequest } from '../../models';

export const AuthUser = createParamDecorator((data: unknown, ctx: ExecutionContext): TUser => {
  const request = ctx.switchToHttp().getRequest() as IAuthRequest;
  return request.user;
});
