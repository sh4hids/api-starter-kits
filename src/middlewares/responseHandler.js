/* eslint-disable consistent-return */
import { statusCodes, statusCodeMessages } from '../config';

async function responseHandler(ctx, next) {
  try {
    ctx.response.success = ({ data, status = statusCodes.OK, message }) => {
      ctx.status = status;
      ctx.body = {
        data,
        message: message || statusCodeMessages[status],
      };
    };

    await next();

    if (!ctx.body && (!ctx.status || ctx.status === 404)) {
      ctx.status = 404;
      ctx.body = 'Not Found';

      return ctx.body;
    }
  } catch (error) {
    ctx.status = error.status || 500;
    ctx.body = {
      message: error.message || 'Internal Server Error',
      ...(error.errors && { errors: error.errors }),
    };
  }
}

export default responseHandler;
