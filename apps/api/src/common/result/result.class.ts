import { IApiError } from '../../models/api-error.interface';
import { InternalError } from '../errors/internal-error.error';

export class Result<TSuccess, TError extends IApiError = InternalError> {
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

  public static fail<T, E extends IApiError>(error: E): Result<T, E> {
    return new Result<T, E>(false, undefined, error);
  }

  isOk(): boolean {
    return this.ok;
  }

  whenOk(fn: (value: TSuccess) => void): Result<TSuccess, TError> {
    if (this.ok) {
      fn(this.result!);
    }
    return this;
  }

  whenFail(fn: (error: TError) => void): Result<TSuccess, TError> {
    if (!this.ok) {
      fn(this.error!);
    }
    return this;
  }
}
