'use strict';

// npm run dev DO NOT read this file

// start egg app
require('egg').startCluster({
  baseDir: __dirname,
  port: process.env.PORT || 7001, // default to 7001
});
