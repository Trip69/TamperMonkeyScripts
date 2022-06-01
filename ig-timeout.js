// ==UserScript==
// @name         IG Timeout
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Account Timeout Workaround
// @author       Trip
// @match        https://*.ig.com/*
// @match        https://trading.bitfinex.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function openWindow(url) {
        document.open(url);
    }

    function reloadWindow() {
        location.reload();
    }

    //let url=document.location;
    //let interval = setInterval(openWindow,10*60*1000,url);
    let interval = setInterval(reloadWindow,44*60*1000);
})();