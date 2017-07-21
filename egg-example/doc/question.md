1.基类Controller、Service源自哪？

1) 根目录下index.js文件
require('egg').startCluster({
    baseDir: __dirname,
    port: process.env.PORT || 7001, // default to 7001
});

a. require('egg')：加载egg模块;

b. egg模块startCluster方法启动apps;

//egg模块index.js文件
exports.startCluster = require('egg-cluster').startCluster;

//egg-cluster模块index.js文件
const Master = require('./lib/master');
exports.startCluster = function(options, callback) {
  new Master(options).ready(callback);
};

//egg-cluster模块下lib中master.js文件
master初始化参数：
 framework: 指定的框架
 baseDir: 应用目录
 plugins: 自定义插件，用于测试
 port:端口
 workers:
 https:
 key: ''
 cert: ''

2) Controller、Service源自egg模块

2.路由中请求home.index方法是怎么找到对应的Controller的？

1) 路由的完整定义，参数可以根据场景的不同，自由选择:

app.verb(路由别名[可选]，路由URL路径, 中间件[可选],app.controller.controller.action);

2) controller 可以有两种写法：
   app.controller.user.fetch - 直接指定一个具体的 controller
   
   'user.fetch' - 可以简写为字符串形式



