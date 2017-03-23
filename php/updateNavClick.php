<?php
    header("Content-Type:text/html;charset=utf-8");
   $conn = @mysql_connect("localhost","root","")
              or die("数据库连接失败，请检查你的网络,稍后再试试");
          mysql_select_db("tobone");
          mysql_query("set names 'utf8'");

//   $_PST='333';
    if($_POST['value']=='C  '){
        $_POST['value']='C++';
    }
   $sql=' update clicknav set value="'.(string)$_POST['value'].'" where type="current";';
//   $sql=' update clicknav set value="'.$_PST.'" where type="current";';
//   $sql=' update clicknav set value="222" where type="current";';
   mysql_query($sql);
?>