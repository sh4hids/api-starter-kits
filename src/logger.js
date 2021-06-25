import pino, { stdTimeFunctions } from 'pino';
import { v4 as uuidV4 } from 'uuid';

import { appEnv, logLevel, loggerName } from './config';

const baseOptions = {
  name: loggerName,
  level: logLevel,
  timestamp: stdTimeFunctions.isoTime,
  redact: ['req.headers.authorization'],
  base: null,
  genReqId(request) {
    const requestId =
      request.headers['x-request-id'] || request.reqId || uuidV4();
    return requestId;
  },
};

const devOptions = {
  ...baseOptions,
  prettyPrint: { levelFirst: true },
};

const prodOptions = { ...baseOptions };

export const logOptions =
  appEnv === 'production' ? { ...prodOptions } : { ...devOptions };

const logger = pino(logOptions);

export default logger;
