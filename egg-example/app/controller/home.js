'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg';
    }

    * user() {
      const user = yield this.service.user.get(this.name);
      this.body = { user };
    }

    * session() {
      this.body = {
        session: this.session,
      };
    }

    // 框架内置了 HttpClient，应用发起的对外 HTTP 请求基本都是通过它来处理。
    * httpclient(ctx) {
      const res = ctx.curl('https://eggjs.org');
      ctx.body = res.data.toString();
    }

  }
  return HomeController;
};
