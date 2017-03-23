/**
 * Created by wangbiaozhi on 2017/2/13.
 */
function ToBone(){}
ToBone.prototype.setData=function(data){
    if(!data) return '';
    /*����ַ�����ƾ��*/
    var final='';
    for(var key in data){
        final=final+key+'='+data[key].toString()+'&';
    }
    console.log(final);
    return final.slice(0,-1);
};
ToBone.prototype.ajax=function(obj){
    if(!obj||({}).toLocaleString.call(obj)!="[object Object]") return;
    //��ȡ����
    var type=obj.type;
    var url=obj.url;
    var data=this.setData(obj.data);
    var success=obj.success||null;

    /*�����첽����*/
    var xhr=new XMLHttpRequest;
    if(type=="get"){
        url=url+"?"+data;
        data=null;
    }
    xhr.open(type,url);
    if(type=='post'){
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    }
    xhr.send(data);

    xhr.onreadystatechange=function(){
        if(xhr.status==200&&xhr.readyState==4){
            var resHeader=xhr.getResponseHeader("Content-Type");
            var result=null;
            if(resHeader.indexOf('xml')!=-1){
                result=xhr.responseXML;
            }
            else if(resHeader.indexOf("json")!=-1){
                //console.log(xhr.responseText);
                result=JSON.parse(xhr.responseText);
            }
            else result=xhr.responseText;

            success&&success(result);
        }
    }
};