import { HttpStatus } from '@nestjs/common';
import { IApiError } from '../../models/api-error.interface';

export class InternalError extends Error implements IApiError {
  readonly statusCode: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR;

  constructor(message: string) {
    super(message);
  }
}
