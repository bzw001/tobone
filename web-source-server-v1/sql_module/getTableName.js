'use strict';
const fs =require('fs');
const log=require('../log_module/log');
let tableData=[];

//fs.readFileSync('./sql_module/keyToTableName.json','utf-8',(err,data)=>{
//    if(err){
//        console.log('error');
//        log.writeLog('read keyToTableName.json error    time:'+log.getTimeStr(),'ser');
//        return;
//    }else{
//        tableData=JSON.parse(data);
//    }
//});

/*这里使用了阻塞读取文件内容*/
let data=fs.readFileSync('./sql_module/keyToTableName.json');
tableData=JSON.parse(data);
/**
 * 根据键值读取数据库相应的表名
 * @param key
 */

function getTable(key){
    console.log(key);
    if(!key) return;
    let tableName='';
    tableName=tableData[0].find(function(val,index,arr){
        if(val[key]) return val[key];
    });
    log.writeLog(__dirname,__filename,'get tableName:'+tableName[key]+log.getTimeStr(),'ser');

    return tableName[key];
}

module.exports=getTable;
