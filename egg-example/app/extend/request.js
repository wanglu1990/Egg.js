'use strict';

// ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。它是JavaScript语言的第七种数据类型。
// Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述
// Symbol函数前不能使用new命令，否则会报错。这是因为生成的Symbol是一个原始类型的值，不是对象。
// Symbol 可以创建一个独一无二的值（但并不是字符串）
const IS_CHROME = Symbol('Request#isChrome');

module.exports = {

  // 判断是否 Chrome 浏览器发起的请求
  get isChrome() {
    if (!this[IS_CHROME]) {
      const ua = this.get('User-Agent').toLowerCase();
      this[IS_CHROME] = ua.includes('chrome/');
    }
    return this[IS_CHROME];
  },

};
