<?php
    header('Content-Type:application/json;charset=utf-8');

    if($_POST['class']=='title'){
        $data=file_get_contents('../json/hotTitle.json');
    }else if($_POST['class']=='article'){
        $data=file_get_contents('../json/article.json');
        }
    else if($_POST['class']=='questions'){
          $data=file_get_contents('../json/randomQue.json');
          }
//$type=$_POST;
//print_r($type);
//print_r($_POST['class']);
//$data=file_get_contents('../json/hotTitle.json');
    echo $data;
?>