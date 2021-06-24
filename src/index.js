import app from './app';
import logger from './logger';
import { appPort, appEnv } from './variables';

const server = app.listen(appPort, () => {
  logger.info(`API server listening on port ${appPort}, in ${appEnv}`);
});

module.exports = server;
