<?php
        $conn = @mysql_connect("localhost","root","")
               or die("数据库连接失败，请检查你的网络,稍后再试试");
           mysql_select_db("tobone");
           mysql_query("set names 'utf8'");
        //创建表
        $sql='create table article(id smallint unsigned auto_increment primary key,type varchar(10) not null,imgSrc text not null,title  text not null,abstract text not null,author varchar(40) not null,date varchar(30) not null,number int unsigned)ENGINE=MYISAM DEFAULT CHARSET=utf8;';
        mysql_query($sql);
?>