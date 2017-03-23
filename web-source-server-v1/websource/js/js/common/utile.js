(function(a,b){
    'function'==typeof define&&define.amd?define([],b):b();
    a.utile=b();
})(this,function(){
    var func= {
        getUrlSearchStr:function(key){
            var key=key||null;
            var href=window.location.href;
            var tempArr=href.split('?');
            tempArr.shift();
            var strArr=tempArr.join('').split('&');
            var searchObj={};
            for(var i=0;i<strArr.length;i++){
                tempArr=strArr[i].split('=');
                searchObj[tempArr[0]]=tempArr[1];
            }
            return searchObj[key]||searchObj;
        },
        setArg:function(dom,obj){
            var href=dom.href||'';
            if(dom.nodeName!='A'||typeof obj!='object'){
                console.log('arguments error')
            }
            href+='?';
            for(var key in obj){
                href+=key+'='+obj[key]+'&';
            }
            dom.href=href.slice(0,-1);
        }
    };
    return func;
});

