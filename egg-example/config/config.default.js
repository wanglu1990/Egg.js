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


  // 配置需要的中间件，数组顺序即为中间件的加载顺序
   config.middleware = [ 'hello' ];
   config.hello = { text: 'hi, egg' };

  return config;
};
