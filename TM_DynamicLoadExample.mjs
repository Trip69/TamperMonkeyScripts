/*
This file needs to be placed on your local web server in a directory with "get_js.php". The web server must be able to
parse php.

If you use JetStorm or some other IDE that can debug browsers then you can place breakpoints within this file and they
will break within the IDE enabling quicker development within a fully fledged IDE.
 */

'use strict';
let morePower=null; //access to the unsafe window.

export function main(power) {
    morePower = power;
    console.log("Dynamic Module Loaded");
}