<?php
        $conn = @mysql_connect("localhost","root","")
               or die("数据库连接失败，请检查你的网络,稍后再试试");
           mysql_select_db("tobone");
           mysql_query("set names 'utf8'");
        //创建表
        $sql="insert art_context(id,context) values(1,'AJAX','./images/article_1.jpg','同步和异步的区别','同步：阻塞的，比如：-张三叫李四去吃饭，李四一直忙得不停，张三一直等着，直到李四忙完两个人一块去吃饭=浏览器向服务器请求数据，服务器比较忙，浏览器一直等着（页面白屏），直到服务器返回数据，浏览器才能显示页面...','Mr Wang','一周前','20');";
//        $article=file_get_contents('./updateArticle.sql');
//        echo $article;
//echo "dada";
        $sql2="insert article(id,type,imgSrc,title,abstract ,author ,date,number) values(2,'AJAX','./images/article_1.jpg','同步和异步的区别','同步：阻塞的，比如：-张三叫李四去吃饭，李四一直忙得不停，张三一直等着，直到李四忙完两个人一块去吃饭=浏览器向服务器请求数据，服务器比较忙，浏览器一直等着（页面白屏），直到服务器返回数据，浏览器才能显示页面...','Mr Wang','一周前','20');";
         $sql3="insert article(id,type,imgSrc,title,abstract ,author ,date,number) values(3,'AJAX','./images/article_13.jpg','同步和异步的区别','同步：阻塞的，比如：-张三叫李四去吃饭，李四一直忙得不停，张三一直等着，直到李四忙完两个人一块去吃饭=浏览器向服务器请求数据，服务器比较忙，浏览器一直等着（页面白屏），直到服务器返回数据，浏览器才能显示页面...','Mr Wang','一周前','20');";
         $sql4="insert article(id,type,imgSrc,title,abstract ,author ,date,number) values(4,'AJAX','./images/article_4.jpg','同步和异步的区别','同步：阻塞的，比如：-张三叫李四去吃饭，李四一直忙得不停，张三一直等着，直到李四忙完两个人一块去吃饭=浏览器向服务器请求数据，服务器比较忙，浏览器一直等着（页面白屏），直到服务器返回数据，浏览器才能显示页面...','Mr Wang','一周前','20');";
         $sql5="insert article(id,type,imgSrc,title,abstract ,author ,date,number) values(5,'AJAX','./images/article_5.jpg','同步和异步的区别','同步：阻塞的，比如：-张三叫李四去吃饭，李四一直忙得不停，张三一直等着，直到李四忙完两个人一块去吃饭=浏览器向服务器请求数据，服务器比较忙，浏览器一直等着（页面白屏），直到服务器返回数据，浏览器才能显示页面...','Mr Wang','一周前','20');";
         $sql6="insert article(id,type,imgSrc,title,abstract ,author ,date,number) values(6,'AJAX','./images/article_6.jpg','同步和异步的区别','同步：阻塞的，比如：-张三叫李四去吃饭，李四一直忙得不停，张三一直等着，直到李四忙完两个人一块去吃饭=浏览器向服务器请求数据，服务器比较忙，浏览器一直等着（页面白屏），直到服务器返回数据，浏览器才能显示页面...','Mr Wang','一周前','20');";
         $sql7="insert article(id,type,imgSrc,title,abstract ,author ,date,number) values(7,'AJAX','./images/article_7.jpg','同步和异步的区别','同步：阻塞的，比如：-张三叫李四去吃饭，李四一直忙得不停，张三一直等着，直到李四忙完两个人一块去吃饭=浏览器向服务器请求数据，服务器比较忙，浏览器一直等着（页面白屏），直到服务器返回数据，浏览器才能显示页面...','Mr Wang','一周前','20');";
         $sql8="insert article(id,type,imgSrc,title,abstract ,author ,date,number) values(8,'AJAX','./images/article_8.jpg','同步和异步的区别','同步：阻塞的，比如：-张三叫李四去吃饭，李四一直忙得不停，张三一直等着，直到李四忙完两个人一块去吃饭=浏览器向服务器请求数据，服务器比较忙，浏览器一直等着（页面白屏），直到服务器返回数据，浏览器才能显示页面...','Mr Wang','一周前','20');";

//        print_r($sql);
//        mysql_query($sql);
        mysql_query($sql3);
        mysql_query($sql4);
        mysql_query($sql5);
        mysql_query($sql6);
        mysql_query($sql7);
        mysql_query($sql8);
//        更新数据：update article set imgSrc='./images/article_1.jpg', title='同步和异步' where id=1;
?>