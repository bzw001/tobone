/*根据传进来的url进行相应处理,只处理获取文件的请求*/

'use strict';
const fs =require('fs');

function Route(){}

/**
 * 检查地址的有效性
 * @param url  请求的Url
 */
Route.prototype.valid=function(url){
};
/**
 * 检查是不是请求图片
 * @param path  请求资源的路径
 * @returns {boolean}
 */
Route.prototype.isImg=function(path){
    let flag=false;
    let imgExt=['jpg','JPEG','PNG','png','gif','GIF','bmp','BMP'];
    imgExt.every(function(val){
        if(path.indexOf(val)){
            flag=true;
            return false;
        }else{
            return true;
        }
    });

    return flag;
};

/**
 * 处理get请求，根据路径请求相应的文件
 * @param url  请求的url
 * @param callback  成功后的回调函数
 */
Route.prototype.dealGetReq=function(url,callback){
    url=decodeURI(url);
    /*websource目录存放请求的资源*/
    let index=url.indexOf('html');
    if(index>-1){
        url=url.slice(0,index+4);
        console.log(url);
    }
    /*去除字体图标文件后面的数字*/
    index=url.indexOf('iconfont');
    if(index>-1){
        index=url.indexOf("?");
        if(index>-1){
            url=url.slice(0,index);
        }
    }
    let path='./websource';
    if(url==='/'){
        path+='/index.html';
    }else{
        console.log(url);
        path+=url;
    }
    if(this.isImg(path)){
        fs.readFile(path,(err,data)=>{
            if(err){
                console.log('no such file :'+path);
                callback('');
            }

            callback(data);
        })
    }else{
        fs.readFile(path,'utf-8',(err,data)=>{
            if(err){
                console.log('no such file :'+path);
                callback('');
            }

            callback(data);
        })
    }


};


/**
 * 处理post请求
 * @param request  请求对象
 * @param callback  回调函数
 */
Route.prototype.dealPostReq=function(request,callback){
    /*兼顾tobone博客网站的ajax请求都是发到php*/
    if(request.url.indexOf('php')>-1){
        console.log('come to php');
        let postData='';
        request.on('data',(data)=>{
            postData+=data;
        });
        request.on('end',()=>{
            console.log(postData);
            callback(postData);
        });
    }
};

/**
 *处理请求
 * @param request  请求对象
 * @param callback 回调函数
 */
Route.prototype.dealRequest=function(request,callback){
    if(request.method==='GET'){
        this.dealGetReq(request.url,callback);
    }else if(request.method==='POST'){
        this.dealPostReq(request,callback);
    }
};
module.exports=new Route();
