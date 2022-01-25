// ==UserScript==
// @name         Google CAPTCHA Clicker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically click the Google Captcha button, so you don't have to.
// @author       Trip
// @icon         https://www.somedodgywebsite.com/favicon.png
// @match        *www.google.com/recaptcha/api2/anchor*
// @run-at      document-idle
// @license     Public Domain
// ==/UserScript==

(function() {
    'use strict';
    let cb = document.getElementsByClassName('recaptcha-checkbox-checkmark');
    if (cb.length > 0) {
        cb = cb.item(0);
        cb.focus();
        cb.dispatchEvent(new window.KeyboardEvent('keydown', { code: 32 }));
        cb.dispatchEvent(new window.KeyboardEvent('keyup', { code: 32 }));
        cb.dispatchEvent(new window.KeyboardEvent('keypress', { code: 32 }));
        cb.click();
        console.log('TM_GoogleCaptcha: Captcha clicked');
    }
})();