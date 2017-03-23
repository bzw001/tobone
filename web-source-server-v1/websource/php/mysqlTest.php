<?php
    header("Content-Type:text/json;charset=utf-8");
//    数据库连接
    $conn = @mysql_connect("localhost","root","")
           or die("数据库连接失败，请检查你的网络,稍后再试试");
       mysql_select_db("tobone");
       mysql_query("set names 'utf8'");
//       数据库命令
       //读取数据库内容
        if($_POST['class']=='title'){
                      $sql = "select id,title from articledetail limit 0,6;";
        }else if($_POST['class']=='article'){
               $sql="select id, type,imgSrc,title,abstract ,author ,date,number from article";
        }else if($_POST['class']=='sortArticle'){
               $sql='select id, type,title,abstract ,author ,date,number from articledetail where type="'.$_POST['type'].'";';
        }
        else if($_POST['class']=='art_context'){
                $id=$_POST['id'];
                $sql="select context from art_context where id=".$id.';';
        }else if($_POST['class']=='nav'){
        //注意这里查询命令的多引号
                $sql='select id from article where type="'.$_POST['type'].'";';
        }else if($_POST['class']=='everyArticle'){
                $sql='select * from articledetail where id="'.$_POST['type'].'";';
        }else if($_POST['class']=='clicknav'){
                $sql='select value from clicknav where type="current";';
        }else if($_POST['class']=='clickTitle'){
                $sql='select value from clicknav where type="'.$_POST['type'].'";';
        }else if($_POST['class']=='leavemessage'){
                $sql='insert leavemessage (date,message,name,imgsrc) values("'.$_POST['date'].'","'.$_POST['value'].'","'.$_POST['name'].'","'.$_POST['imgsrc'].'");';
        }else if($_POST['class']=='pastmessage'){
                /*1页只显示14个评论*/
                $page=$_POST['page'];
                $start=($page-1)*6;
//                $end=$page*4;
                $sql='select * from leavemessage  order by id desc limit '.$start.',6;';
        }else if($_POST['class']=='pastmessageLength'){
                $sql='select count(*) as len from leavemessage;';
        }
//           SELECT COUNT(*) FROM foo WHERE b = 1;
//
//           SELECT a FROM foo WHERE b = 1 LIMIT 100,10;
        /*mysql_query执行单条multi_query($sql)执行多条*/
       $result = mysql_query($sql);
       if($_POST['class']!='leavemessage'){
              $arr=array();
              while($row = mysql_fetch_object($result))
                {
                   array_push($arr,$row);
                }
                //将数组进行json编码输出
               print_r(json_encode($arr));
       }

//         print_r('php');

?>