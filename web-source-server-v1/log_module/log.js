'use strict';
function Log(){

    this.fs=require('fs');
    //获取日志建立的时间
    this.init();
}

/**
 * 初始化
 */
Log.prototype.init=function(){
    console.log('log start  time:'+this.getTimeStr());
};
/**
 * 得到当前时间
 */
Log.prototype.getTimeStr=function(){
    const date=new Date();
    const timeStr='    time:'+((date.getMonth()+1)+'月'+date.getDate()+'日'+date.getHours()+'时'+date.getMinutes()+'分');
    return timeStr;
};

/*得到文件名与文件夹名*/
Log.prototype.getFiLeName=function(dirname,filename){
    if(!dirname||!filename) return '';
    let dirName=dirname.slice(dirname.lastIndexOf('\\')+1);
    let fileName=filename.slice(filename.lastIndexOf('\\')+1);
    return dirName+'/'+fileName;
};
/**
 * 将打印信息写入日志
 * @param dirname  文件夹名字
 * @param filename  文件名
  * @param str 写入日志文件的字符串
 * @param type 写入日志类型  'sys'-->system.text,'ser'-->server.text,'user'--->client.text
 */
Log.prototype.writeLog=function(dirname,filename,str,type){
    if(!dirname||!filename) {
        dirname=filename='';
    }
    if(!str) return;
    let logstr='';
    logstr+=this.getFiLeName(dirname,filename)+" | "+str+'\t\r';
    //str+='\t\r';
    let logfile='';
    type=type||'ser';
    if(type==='sys') {
         logfile='./log/system.txt';
    }else if(type==='ser'){
        logfile='./log/server.txt';
    }else if(type==='user'){
        logfile='./log/client.txt';
    }
    this.fs.writeFile(logfile,logstr,{flag:'a'},(err)=>{
        if(err) console.log('write to log error: '+err);
    })
};
module.exports=new Log();
