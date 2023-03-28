import { HttpStatus } from '@nestjs/common';

export interface IApiError extends Error {
  readonly statusCode: HttpStatus;
}
