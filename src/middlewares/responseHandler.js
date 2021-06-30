import { statusCodes, statusCodeMessages } from '../config';

async function responseHandler(ctx, next) {
  try {
    ctx.response.success = (data, statusCode, message) => {
      ctx.status = statusCodes.OK;
      ctx.body = {
        statusCode,
        data,
        message: message || statusCodeMessages[statusCode],
      };
    };

    ctx.response.error = (errors = null, statusCode = 500, message) => {
      ctx.log.error(errors);
      const error = {
        statusCode,
        errors,
        message: message || statusCodeMessages[statusCode],
      };
      throw error;
    };

    await next();

    if (!ctx.body && (!ctx.status || ctx.status === 404)) {
      ctx.status = 404;
      ctx.body = {
        statusCode: 404,
        error: 'Not Found',
        message: 'Not Found',
      };

      return ctx.body;
    }
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
