// ==UserScript==
// @name        Youtube Music continue watching clicker
// @namespace   http://tampermonkey.net/
// @version     0.2
// @description Clicks continue watching when prompted by you tube music.
// @author      Trip
// @icon        https://www.somedodgywebsite.com/favicon.png
// @match       *music.youtube.com/*
// @run-at      document-idle
// @license     Public Domain
// ==/UserScript==

(function() {
    'use strict';

    //console.log("TM_YTMusic: main");

    function check_click_button(){
        //check_click_button.button=document.getElementById("button");
        check_click_button.els=document.getElementsByClassName("style-scope yt-button-renderer style-blue-text");
        if( check_click_button.els.length===2
            && check_click_button.els.item(1).textContent==="Yes") {
            check_click_button.els.item(1).parentElement.click();
        }
        check_click_button.count++;
        //check page host every 10 seconds & stop timer if on another host. Unneeded but tidy.
        if(check_click_button.count===10) {
            on_page = document.location.hostname === "music.youtube.com";
            //console.log("TM_YTMusic: 10 second check");
            if (!on_page) {
                clearInterval(check_click_button.interval);
            }
            check_click_button.count=0;
        }
    }
    check_click_button.count=0;
    check_click_button.interval=null;
    check_click_button.els=null;

    //Main
    let on_page = document.location.hostname === "music.youtube.com";
    check_click_button.interval=setInterval(check_click_button,1000);
})();