import { ApiError } from './apiError';

export class UserAlreadyExistsError extends ApiError {
  constructor(email: string) {
    super({
      name: 'UserAlreadyExistsError',
      code: 'UserAlreadyExistsError',
      statusCode: 409,
      message: `${email} already exists`,
    });
  }
}