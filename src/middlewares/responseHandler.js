import { statusCodes, statusCodeMessages } from '../config';

async function responseHandler(ctx, next) {
  try {
    ctx.response.success = (data, statusCode) => {
      ctx.status = statusCodes.OK;
      ctx.body = {
        statusCode,
        data,
        message: statusCodeMessages[statusCode],
      };
    };

    ctx.response.error = (errors = null, statusCode = 500) => {
      const error = {
        statusCode,
        errors,
        message: statusCodeMessages[statusCode],
      };
      throw error;
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
