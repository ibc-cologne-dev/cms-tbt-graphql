import { ApiError } from './apiError';

export class UserNotAuthorizedError extends ApiError {
  constructor() {
    super({
      name: 'UserNotAuthorizedError',
      code: 'UserNotAuthorizedError',
      statusCode: 401,
      message: 'User not authorized',
    });
  }
}
