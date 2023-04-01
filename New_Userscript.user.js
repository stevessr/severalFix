// ==UserScript==
// @name         环球资讯广播上下篇修复
// @namespace    
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://newsradio.cri.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cri.cn
// @grant        none
// ==/UserScript==
//@include newsradio.cri.cn

(function() {
    'use strict';
    var Temp110 = document.getElementsByClassName("album-control");
    Temp110[0].className = "void"
    //album-control
    // Your code here...
})();