import app from './app';
import { appPort, appEnv } from './config';
import logger from './logger';

const server = app.listen(appPort, () => {
  logger.info(`API server listening on port ${appPort}, in ${appEnv}`);
});

module.exports = server;
