'use strict';
const mm = require('egg-mock');
const assert = require('assert');

describe('test/controller/home.test.js', () => {
  let app;
  before(() => {
    // 创建当前应用的 app 实例
    app = mm.app();
    // 等待 app 启动成功，才能执行测试用例
    return app.ready();
  });

  afterEach(mm.restore);
  after(() => app.close());

  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
  });

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')// 对 app 发起 `GET /` 请求
      .expect('hi, egg') // 期望 body 是 hi, egg
      .expect(200);// 期望返回 status 200
  });
});

