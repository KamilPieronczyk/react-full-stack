import { IJwtPayload } from '../auth';

export interface IAuthRequest extends Request {
  user: IJwtPayload;
}
