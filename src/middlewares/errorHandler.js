async function errorHandler(ctx, next) {
  try {
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

export default errorHandler;
