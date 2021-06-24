import Koa from 'koa';
import cors from 'koa2-cors';
import koaBody from 'koa-body';
import pino from 'koa-pino-logger';

import { logOptions } from './logger';
import { responseHandler, requestId } from './middlewares';
import router from './router';

require('dotenv').config();

const app = new Koa();
const logger = pino({
  ...logOptions,
});

app.use(koaBody());
app.use(requestId());
app.use(logger);
app.use(cors({ origin: '*' }));
// app.use(errorHandler);
app.use(responseHandler);

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
