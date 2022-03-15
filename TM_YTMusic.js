// ==UserScript==
// @name        Youtube Music continue watching clicker
// @namespace   http://tampermonkey.net/
// @version     0.4
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
        if(check_click_button.reload && check_click_button.yes_clicked) {
            check_click_button.yes_clicked=false;
            //to prevent spamming unsaved data dialogue if window is not minimised.
            check_click_button.reload=false;
            document.location.reload();
        }
        check_click_button.els=document.getElementsByClassName("style-scope yt-button-renderer style-blue-text");
        if( check_click_button.els.length>1
            && check_click_button.els.item(1).textContent==="Yes") {
            check_click_button.els.item(1).parentElement.click();
            check_click_button.yes_clicked=true;
        }
        check_click_button.count++;
        //check page host every 10 seconds & stop timer if on another host. Unneeded but tidy.
        if(check_click_button.count===10) {
            on_page = document.location.hostname === "music.youtube.com";
            //console.log("TM_YTMusic: 10 second check");
            if (!on_page)
                clearInterval(check_click_button.interval);
            check_click_button.count=0;
        }
    }
    check_click_button.count=0;
    check_click_button.interval=null;
    check_click_button.els=null;
    check_click_button.reload=true;
    check_click_button.yes_clicked=false;

    function skip_dislike(){
        if(skip_dislike.button_next_el===null)
            skip_dislike.button_next_el=document.getElementById("left-controls").getElementsByClassName("next-button").item(0);
        skip_dislike.el=document.getElementById("like-button-renderer");
        if(skip_dislike.el.firstElementChild.getAttribute("aria-pressed")==="true")
            skip_dislike.button_next_el.click();
    }
    skip_dislike.interval=null;
    skip_dislike.enabled=true;
    skip_dislike.el=null;
    skip_dislike.button_next_el=null;

    //Main
    let on_page = document.location.hostname === "music.youtube.com";
    check_click_button.interval=setInterval(check_click_button,1000);
    if(skip_dislike.enabled)
        skip_dislike.interval=setInterval(skip_dislike,1000);
})();