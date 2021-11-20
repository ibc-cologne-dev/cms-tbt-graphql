interface ApiErrorType extends Error {
  code: string;
  statusCode: number;
}

export class ApiError extends Error implements ApiErrorType {
  code: string;
  statusCode: number;

  constructor(error: ApiErrorType) {
    super(error.message);
    this.code = error.code;
    this.statusCode = error.statusCode;
  }
}