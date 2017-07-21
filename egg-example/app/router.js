'use strict';

module.exports = app => {

//RESTful风格
  app.get('home','/', 'home.index');//等价于app.get('home','/',app.controller.home.index);
  app.get('user','/user', 'home.user');

};
