/*
 * author:wumingli
 * author email: wumingli@tianji.com
 * for:test
 * developed at : 2013/6/28
 * Copyright 2013. All rights reserved.
 */
define(function (require, exports, module){
    var hello = require('hello');
    hello.sayHello();
    return {
        sayHello: hello.sayHello
    }
});