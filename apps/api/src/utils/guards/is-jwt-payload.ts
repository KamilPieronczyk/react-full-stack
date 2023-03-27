import { IJwtPayload } from './../../models';

export function isJwtPayload(jwtPayload: unknown): jwtPayload is IJwtPayload {
  return (
    typeof jwtPayload === 'object' &&
    jwtPayload !== null &&
    'email' in jwtPayload &&
    typeof jwtPayload['email'] === 'string' &&
    'userName' in jwtPayload &&
    typeof jwtPayload['userName'] === 'string' &&
    'iss' in jwtPayload &&
    typeof jwtPayload['iss'] === 'string' &&
    'sub' in jwtPayload &&
    typeof jwtPayload['sub'] === 'string' &&
    'aud' in jwtPayload &&
    Array.isArray(jwtPayload['aud']) &&
    'iat' in jwtPayload &&
    typeof jwtPayload['iat'] === 'number' &&
    'exp' in jwtPayload &&
    typeof jwtPayload['exp'] === 'number' &&
    'azp' in jwtPayload &&
    typeof jwtPayload['azp'] === 'string' &&
    'scope' in jwtPayload &&
    typeof jwtPayload['scope'] === 'string'
  );
}
