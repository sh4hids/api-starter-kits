async function four0FourHandler(ctx, next) {
  try {
    await next();
    if (parseInt(ctx.status) === 404) {
      console.log('hello...');
      // ctx.status = 404;

      ctx.response.body = { test: 'test' };
      // ctx.res.end('test');
    }
  } catch (error) {
    console.log(error);
    ctx.status = 200;
    ctx.throw(error);
  }
}

export default four0FourHandler;
