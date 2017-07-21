'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/service/user.test.js', () => {

  let app;
  before(() => {
    app = mock.app();
    return app.ready();
  });

  afterEach(mock.restore);

  describe('get()', () => {

    it('should get exists user', function* () {
      const ctx = app.mockContext();
      const user = yield ctx.service.user.get('fengmk2');
      assert(user);
      assert(user.name === 'fengmk2');
    });

    it('should get null when user not exits', function* () {
      const ctx = app.mockContext();
      const user = yield ctx.service.user.get('fengmk1');
      assert(!user);
    });

    // app.mockService(service, methodName, fn)模拟 Service 方法返回值
    it('should mock fengmk1 exists', function* () {
      const ctx = app.mockContext();
      app.mockService('user', 'get', function* () {
        return {
          name: 'fengmk1',
        };
      });

      const user = yield ctx.service.user.get('fengmk1');
      assert(user);
      assert(user.name === 'fengmk1');
    });

    // app.mockServiceError(service, methodName, error) 可以模拟 Service 调用异常。
    it('should mock service error', () => {
      app.mockServiceError('user', 'get', 'mock user service error');
      return app.httpRequest().
        get('/user?name=fengmk2').
        expect(500).
        expect('/mock user service error/');
    });

  });

});

describe('GET /httpClient', () => {

  let app;
  before(() => {
    app = mock.app();
    return app.ready();
  });

  afterEach(mock.restore);

  it('should mock httpclient response', () => {

    app.mockHttpclient('https://eggjs.org', {
      data: 'mock eggjs.org response',
    });

    return app.httpRequest().get('/httpclient').expect('mock eggjs.org response');
  });

});
