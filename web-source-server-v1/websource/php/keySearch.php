<?php
    header("Content-Type:text/json;charset=utf-8");
    $conn = @mysql_connect("localhost","root","")
               or die("数据库连接失败，请检查你的网络,稍后再试试");
           mysql_select_db("tobone");
           mysql_query("set names 'utf8'");
    $keyH=$_POST['keyH'];
    $keyL=$_POST['keyL'];
    //这里暂时只查询$_POST['keyH']
   $keyArr=explode(',',$keyH);
    $reg='';
    //拼接regexp
   foreach($keyArr as $key){
        $reg=$reg.$key.'|';

   }
   $reg=substr($reg,0,-1);//去掉字符串的最后一个字符
   $sql='select * from articleDetail where context regexp "'.$reg.'" or title regexp "'.$reg.'" or type regexp "'.$reg.'";';
    $result = mysql_query($sql);
    $arr=array();
    while($row = mysql_fetch_object($result))
      {
         array_push($arr,$row);
      }
      //将数组进行json编码输出
     print_r(json_encode($arr));
?>