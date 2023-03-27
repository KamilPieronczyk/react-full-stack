import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IAuthRequest } from '../../models';
import { toUserPayload } from '../../utils/mappers';
import { IUserJWTPayload } from './../../models/auth/user-payload.interface';

export const User = createParamDecorator((data: unknown, ctx: ExecutionContext): IUserJWTPayload => {
  const request = ctx.switchToHttp().getRequest() as IAuthRequest;
  return toUserPayload(request.user);
});
