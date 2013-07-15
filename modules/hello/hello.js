/*
 * author:wumingli
 * author email: wumingli@tianji.com
 * for:test
 * developed at : 2013/6/28
 * Copyright 2013. All rights reserved.
 */
define(function (require, exports, module){
    var $ = require('jquery');
    var sayHello = function (name){
        name = name || 'wumingli';
        alert(name);
    }
    exports.sayHello = sayHello;
});