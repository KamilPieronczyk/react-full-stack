import { IJwtPayload } from './jwt-payload.interface';

export interface IUserJWTPayload extends Pick<IJwtPayload, 'email' | 'userName'> {
  id: IJwtPayload['sub'];
}
