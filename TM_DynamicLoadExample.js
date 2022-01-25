// ==UserScript==
// @name         TM_DynamicLoadExample
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Example of dynamically loading script. Use on www.example.com and check console log
// @author       Trip
// @icon         https://www.somedodgywebsite.com/favicon.png
// @match        *www.example.com/*
// @grant        unsafeWindow
// @grant        GM.xmlHttpRequest
// @connect      *
// @run-at       document-idle
// @license      Public Domain
// ==/UserScript==
(function() {
    'use strict';
    console.log("TM_DynamicLoadExample");
    import('https://localhost/proxy/inc/get_js.php?fn=TM_DynamicLoadExample.mjs')
        .then(module => {
            module.main(window);
        });
})();
