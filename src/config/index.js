require('dotenv').config();

export const appHost = process.env.HOST || 'localhost';
export const appEnv = process.env.APP_ENV || 'development';
export const appPort = process.env.APP_PORT || 8081;
export const logLevel = process.env.LOG_LEVEL || 'debug';
export const loggerName = process.env.LOGGER_NAME;

export const dbHost = process.env.DB_HOST;
export const dbName = process.env.DB_NAME;
export const dbUser = process.env.DB_USER;
export const dbPassword = process.env.DB_PASSWORD;
export const dbDialect = process.env.DB_DIALECT || 'mysql';
export const dbLogging = process.env.DB_LOGGING || false;

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

export const statusCodeMessages = {
  200: 'Success',
  201: 'Created',
  204: 'Deleted',
  400: 'Invalid request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
};

export const PROTECTED_ATTRIBUTES = ['password'];
