/**
 * 数据库的操作，增删改查
 */

'use strict';
const getTable=require('./getTableName');
const log=require('../log_module/log');
function Sql(){

}

/**
 * 查询数据
 * @param dataConnection  数据库连接对象对象
 * @param sqlParams      查询参数
 * @param callback       成功后的回调
 */
Sql.prototype.query=function(dataConnection,sqlParams,callback){
    let sql='';
    switch(sqlParams.class){
        case 'title':
            sql='select id,title from articledetail limit 0,6';
            break;
        case 'article':
            sql='select id, type,imgSrc,title,abstract ,author ,date,number from article';
            break;
        case 'sortArticle':
            sql='select id, type,title,abstract ,author ,date,number from articledetail where type="'+sqlParams.type+'"';
            break;
        case 'art_context':
            sql='select context from art_context where id="'+sqlParams.id+'"';
            break;
        case 'nav':
            sql='select id from article where type="'+sqlParams.type+'"';
            break;
        case 'everyArticle':
            sql='select * from articledetail where id="'+sqlParams.type+'"';
            break;
        case 'clickTitle':
            sql='select value from clicknav where type="'+sqlParams.type+'"';
            break;
        //case 'leavemessage':
        //    sql='select value from clicknav where type="'+sqlParams.type+'"';
        //    break;
        case 'pastmessage':
                let page=sqlParams.page-0;
                let start=(page-1)*6;
                sql='select * from leavemessage  order by id desc limit '+start+',6';
                console.log(sql);
            break;
        case 'pastmessageLength':
            sql='select count(*) as len from leavemessage';
            break;

    }
    dataConnection.query(sql,function(err,rows,fields){
        //rows表示查询到的数据，以对象数组存贮
        //fileds存储本数据库的一些信息
        if(err){
            console.log('[query]-:'+err);
            return;
        }
        /*对得来的数据进行处理，处理方法来自于主程*/
        callback(rows);
    });

};

/*删除*/
Sql.prototype.deletesql=function(){

};

/*更新*/
Sql.prototype.update=function(){

};
/**
 * 插入数据
 * @param dataConnection  数据库连接对象
 * @param sqlParams       插入的参数
 * @param callback        回调函数
 */
Sql.prototype.insert=function(dataConnection,sqlParams,callback){
    let sql='';
    switch(sqlParams.class){
        case 'leavemessage':
            sql=' insert leavemessage (date,message,name,imgsrc) values(?,?,?,?);';
            console.log(sql);
            break;
            //'+sqlParams.date+','+sqlParams.value+','+sqlParams.name+ ','+sqlParams.imgsrc+'
    }
    let messageParams=[sqlParams.date,sqlParams.value,sqlParams.name,sqlParams.imgsrc];
    dataConnection.query(sql,messageParams,(err,resultId)=>{
        if(err) {
            throw err;
        }
        callback({code:200,resultId:resultId});
    });
};

/**
 * 检查sql操作类型
 * @param sqlParams
 * @returns {string}
 */
Sql.prototype.checkSqlType=function(sqlParams){
    let sqlType='';

    /*用于查询的*/
    const queryArr=[
        'title','article','sortArticle','art_context','nav','everyArticle','clickTitle',
'pastmessage','pastmessageLength'    ];
    /*用于插入*/
    const insertArr=['leavemessage'];
    queryArr.every(function(queryClass){
        if(queryClass===sqlParams.class){
            sqlType='query';
            return false;
        }else return true;
    });
    insertArr.every(function(queryClass){
        if(queryClass===sqlParams.class){
            sqlType='insert';
            return false;
        }else return true;
    });

    return sqlType;
};
/**
 * 根据传进来的数据库连接对象以及参数执行相应的数据库操作
 * @param dataConnection  数据库对象
 * @param sqlParams       跟数据库交互的数据
 * @param callback        回调函数
 */
Sql.prototype.getDataFromMysql=function(dataConnection,sqlParams,callback){
    let sqlType=this.checkSqlType(sqlParams);
    /*根据sql操作类型执行相应函数*/
    switch(sqlType){
        case 'query':
            this.query(dataConnection,sqlParams,callback);
            break;
        case 'insert':
            this.insert(dataConnection,sqlParams,callback);
            break;
        case 'delete':
            this.deletesql(dataConnection,sqlParams,callback);
            break;
        case 'update':
            this.update(dataConnection,sqlParams,callback);
            break;
        default:
            log.writeLog(__dirname,__filename,'undefiend sql func!'+log.getTimeStr(),'ser');
            break;
    }


};

module.exports=new Sql();
