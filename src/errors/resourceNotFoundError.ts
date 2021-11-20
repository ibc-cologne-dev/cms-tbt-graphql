import { ApiError } from './apiError';

export class ResourceNotFoundError extends ApiError {
  constructor(name: string) {
    super({
      name: 'ResourceNotFoundError',
      code: 'ResourceNotFoundError',
      statusCode: 404,
      message: `${name} not found`,
    });
  }
}
