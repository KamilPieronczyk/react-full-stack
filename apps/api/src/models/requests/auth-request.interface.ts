import { User } from '@react-full-stack/database';

export interface IAuthRequest extends Request {
  user: User;
}
