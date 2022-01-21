<?php
namespace MyProxy;
const allow_posts=[null,'https://k2s.cc','https://fboom.me','https://tezfiles.com','https://vipergirls.to'];

function cors_header(){
    $remote=$_SERVER['HTTP_ORIGIN']??$_SERVER['HTTP_REFERER']??null; //'https://'.$_SERVER['REMOTE_HOST']??
    /*
    if(is_null($remote))
        throw new \Error('HTTP_ORIGN and REMOTE_HOST not set in _SERVER');
    */
    $allow=array_search($remote,allow_posts);
    if($allow===false)
        return false;
    $allow_text=allow_posts[$allow]??'*';
    header('Access-Control-Allow-Origin: '.$allow_text);
    header('Access-Control-Allow-Credentials: true');
}

//header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time()));

header("Expires: Tue, 03 Jul 2001 06:00:00 GMT"); // *
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

if($_GET['fn']!=='TM_ID3Helper.mjs')
    cors_header();
else {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
}
header("content-type: text/javascript");
echo file_get_contents($_GET['fn']);
