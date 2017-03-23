'use strict';
/*日志对象*/
const log=require('../log_module/log');
/**
 * 设置数据库连接函数返回connection对象
 * @param params
 * @returns {Connection}
 */
function connection(params){
    params=params||{};
    const port=params.port||'3306';
    const mysql_module=require('mysql');
    /*create mysql connection*/
    const connection= mysql_module.createConnection({
        host   :params.ip,
        user   :params.userName,   //musql认证用户名
        password  :params.pwd,
        port:params.port,
        database:params.dbname
    });
    /*start connect mysql*/
    connection.connect(function(err){
        if(err){
            console.log('connect mysql error :'+error+'    time:'+log.getTimeStr(),'sys');
            log.writeLog(__dirname,__filename,'connect mysql error :'+error+log.getTimeStr(),'sys');
        }else {
            console.log('connect mysql success!    time:'+log.getTimeStr(),'sys');
            log.writeLog(__dirname,__filename,'connect mysql success!'+log.getTimeStr(),'sys')
        }
    });
    /*结束连接mysql*/
    connection.endConnectMysql=function(){

        this.end(function(err){
            if(err){
                console.log('end mysql connection error'+error+log.getTimeStr(),'sys');
                log.writeLog(__dirname,__filename,'end mysql connection error'+error+log.getTimeStr(),'sys')
            }else{
                console.log('end mysql connection success!   time:'+log.getTimeStr(),'sys');
                log.writeLog(__dirname,__filename,'end mysql connection success!'+log.getTimeStr(),'sys')
            }
        })
    };
    return connection;
}
const mysql={connection:connection};

module.exports=mysql;