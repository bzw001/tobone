<?php
    header("Content-Type:text/html;charset=utf-8");
   $redis=new Redis();
   $result=$redis->connect('127.0.0.1', 6379);
   var_dump($result);
   $redis->set("tutorial-name", "Redis tutorial");
//phpinfo();
?>