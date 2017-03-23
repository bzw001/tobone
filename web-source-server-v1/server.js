'use strict';
const mysql=require('./sql_module/sql_connect');//数据库连接模块
const sql_func=require('./sql_module/sql_func');//数据库操作函数模块
const log=require('./log_module/log');//日志模块
const fs=require('fs');
const http=require('http');
const route=require('./routeModule/route');//路由模块，用于处理请求
/*连接数据库的配置信息*/
const connection=mysql.connection({
    ip   :'127.0.0.1',
    userName   :'root',   //mysql认证用户名
    pwd  :'',
    port:'3306',
    dbname:'tobone'
});

/*建立服务器*/
let server=http.createServer();
/*接收请求后触发*/
server.on('request',(request,response)=>{
    log.writeLog(__dirname,__filename,'new request from'+'[ip:'+request.connection.remoteAddress+']'+log.getTimeStr(),'user');
    console.log(request.url);
    if(request.method==='GET'){
        route.dealRequest(request,function(data){
            response.end(data);
        })

    }else if(request.method==='POST'){
        route.dealRequest(request,function(data){
            let postObj={};
            postObj=getPostData(data);
            /*从数据库读取数据并发送*/
            response.writeHead(200,{'Content-Type':'text/json;charset=utf-8'});
            sql_func.getDataFromMysql(connection,postObj,function(data){
                response.end(JSON.stringify(data));
            });
        })
    }
});


/*启动监听*/
server.listen(90,function(){
    log.writeLog(__dirname,__filename,"listen port:80"+log.getTimeStr(),'ser')
});

/*处理get请求传过来的参数
这个函数可以被url.parse(req.url,true).query取代
url是一个全局对象
* */
function  getPostData(str){
    let obj={};
    let temArr=str.split('&');
    for(let i=0;i<temArr.length;i++){
        let temp=[];
        temp=temArr[i].split('=');
        obj[temp[0]]=temp[1];
    }
    return obj;
}
/*关闭mysql的连接*/
//connection.endConnectMysql();


