import stringifySafe from '../helpers/stringifySafe';

const statusCodes = {
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

async function responseHandler(ctx, next) {
  try {
    ctx.response.success = (data = null, message = null) => {
      ctx.status = ctx.status < 400 ? ctx.status : statusCodes.OK;
      ctx.body = { status: 'success', data, message };
    };

    ctx.response.ok = (data, message) => {
      ctx.status = statusCodes.OK;
      ctx.response.success(data, message);
    };

    ctx.response.created = (data, message) => {
      ctx.status = statusCodes.CREATED;
      ctx.response.success(data, message);
    };

    ctx.response.accepted = (data, message) => {
      ctx.status = statusCodes.ACCEPTED;
      ctx.response.success(data, message);
    };

    ctx.response.noContent = (data, message) => {
      ctx.status = statusCodes.NO_CONTENT;
      ctx.response.success(data, message);
    };

    ctx.response.badRequest = (
      message = 'Bad Request',
      errors = 'Bad Request'
    ) => {
      const badRequestError = {
        message,
        errors,
        status: statusCodes.BAD_REQUEST,
      };
      throw badRequestError;
    };

    ctx.response.unauthorized = (message, errors) => {
      const unauthorizedRequestError = {
        message,
        errors,
        status: statusCodes.UNAUTHORIZED,
      };
      throw unauthorizedRequestError;
    };

    ctx.response.forbidden = (data, message) => {
      ctx.status = statusCodes.FORBIDDEN;
      ctx.response.fail(data, message);
    };

    ctx.response.notFound = (data, message) => {
      ctx.status = statusCodes.NOT_FOUND;
      ctx.response.fail(data, message);
    };
    ctx.response.notAccepted = (data, message) => {
      ctx.status = statusCodes.NOT_ACCEPTED;
      ctx.response.fail(data, message);
    };

    ctx.response.internalServerError = (code, message) => {
      ctx.status = statusCodes.INTERNAL_SERVER_ERROR;
      ctx.response.error(code, message);
    };

    ctx.response.notImplemented = (code, message) => {
      ctx.status = statusCodes.NOT_IMPLEMENTED;
      ctx.response.error(code, message);
    };
    ctx.response.conflict = (data, message) => {
      ctx.status = statusCodes.CONFLICT;
      ctx.response.fail(data, message);
    };

    await next();
  } catch (error) {
    const statusCode = error.status || error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    const errors = error.errors || message;

    ctx.status = statusCode;
    ctx.body = {
      statusCode,
      message,
      errors,
    };
  }
}

export default responseHandler;
