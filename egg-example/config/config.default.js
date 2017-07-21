'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1499910960056_2691';

  // add your config here
  config.logger = {
    dir: 'D:\\Project\\egg-example\\test\\log',
    consoleLevel: 'DEBUG',
    appLogName: 'test-web.log',
    coreLogName: 'test-web.log',
    agentLogName: 'test-agent.log',
    errorLogName: 'test-error.log',
  };

  return config;
};
