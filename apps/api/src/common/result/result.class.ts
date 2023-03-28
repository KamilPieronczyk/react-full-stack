import { HttpException, InternalServerErrorException } from '@nestjs/common';

export class Result<TSuccess, TError extends HttpException = InternalServerErrorException> {
  private ok: boolean;
  result?: TSuccess;
  error?: TError | null | undefined;

  private constructor(isOk: boolean, result?: TSuccess, error?: TError) {
    this.ok = isOk;
    this.result = result;
    this.error = error;
  }

  public static ok<T>(value?: T): Result<T> {
    return new Result<T>(true, value);
  }

  public static fail<T, E extends HttpException = InternalServerErrorException>(error: E): Result<T, E> {
    return new Result<T, E>(false, undefined, error);
  }

  isOk(): boolean {
    return this.ok;
  }

  whenOk<TReturn>(fn: (value: TSuccess) => TReturn): TReturn {
    if (this.ok) {
      return fn(this.result!);
    }
  }

  whenFail<TReturn>(fn: (error: TError) => TReturn): TReturn {
    if (!this.ok) {
      return fn(this.error!);
    }
  }
}
