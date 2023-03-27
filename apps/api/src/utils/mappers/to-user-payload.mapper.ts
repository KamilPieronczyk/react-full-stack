import { IJwtPayload, IUserJWTPayload } from '../../models';
export function toUserPayload(jwtPayload: IJwtPayload): IUserJWTPayload {
  return {
    id: jwtPayload.sub,
    email: jwtPayload.email,
    userName: jwtPayload.userName,
  };
}
