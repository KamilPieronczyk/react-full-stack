import { HttpException, HttpStatus, InternalServerErrorException } from '@nestjs/common';
import { Response } from 'express';
import { Result } from '../../common/result/result.class';

export class ApiResponseBuilder<TSuccess, TError extends HttpException = InternalServerErrorException> {
  private response: Response;
  private result: Result<TSuccess, TError>;
  private errorMessage: string;
  private checkNoContent = false;
  private successStatusCode = HttpStatus.OK;

  constructor(response: Response, result: Result<TSuccess, TError>) {
    this.response = response;
    this.result = result;
  }

  public withMessage(message: string): ApiResponseBuilder<TSuccess, TError> {
    this.errorMessage = message;
    return this;
  }

  public checkForNoContent(): ApiResponseBuilder<TSuccess, TError> {
    this.checkNoContent = true;
    return this;
  }

  public withSuccessStatusCode(statusCode: HttpStatus): ApiResponseBuilder<TSuccess, TError> {
    this.successStatusCode = statusCode;
    return this;
  }

  public build(): Response {
    this.result.whenOk((content) => {
      const responseContentStrategy = this.checkNoContent
        ? new CheckContentResponseContentStrategy(this.successStatusCode)
        : new OkResponseContentStrategy(this.successStatusCode);

      const statusCode = responseContentStrategy.getStatus(content);
      this.response.status(statusCode).json(content);
    });

    this.result.whenFail((error) => {
      this.response.status(error.getStatus()).json({ error: this.errorMessage ?? error.message });
    });

    return this.response;
  }
}

interface IResponseContentStrategy {
  defaultStatusCode: HttpStatus;
  getStatus<T>(content: T): HttpStatus;
}

class OkResponseContentStrategy implements IResponseContentStrategy {
  constructor(public defaultStatusCode: HttpStatus) {}
  getStatus(): HttpStatus {
    return this.defaultStatusCode;
  }
}

class CheckContentResponseContentStrategy implements IResponseContentStrategy {
  constructor(public defaultStatusCode: HttpStatus) {}
  getStatus<T>(content: T): HttpStatus {
    if (
      content === null ||
      content === undefined ||
      content === '' ||
      (Array.isArray(content) && content.length === 0)
    ) {
      return HttpStatus.NO_CONTENT;
    }
    return this.defaultStatusCode;
  }
}
