require('dotenv').config();

export const appHost = process.env.HOST || 'localhost';
export const appEnv = process.env.APP_ENV || 'development';
export const appPort = process.env.APP_PORT || 8081;
export const logLevel = process.env.LOG_LEVEL || 'debug';
export const loggerName = process.env.LOGGER_NAME;

export const statusCodes = {
  CONTINUE: 100,
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  NOT_ACCEPTED: 406,
  REQUEST_TIMEOUT: 408,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIME_OUT: 504,
  CONFLICT: 409,
};
