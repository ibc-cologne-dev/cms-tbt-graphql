import { ApiError } from './apiError';

export class GeneralError extends ApiError {
  constructor() {
    super({
      name: 'GeneralError',
      code: 'GeneralError',
      statusCode: 400,
      message: 'An error occurred',
    });
  }
}