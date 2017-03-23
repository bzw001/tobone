/**
 * Created by wangbiaozhi on 2017/2/13.
 */
define(['ajax','jquery','jqueryCookie'],function(ToBone,$){
    var ajax=new ToBone();
    console.log($);
    /*点击喜欢*/
    function likeHeader(){
        var likes=(document.querySelectorAll(" .hot > ul > li > a:last-of-type"));
        /*由于获取到了全部a标签，去掉奇数标签*/
        for(var i=0;i<likes.length;i++){
            likes[i].onclick=function(){
                this.firstChild.style.color="#ff0814";
            }
        }
    }

    /*点击文章标题出现文章内容*/
    function showArticle(pageType){
        pageType=typeof pageType=='string'?pageType:'home';
        var title=document.querySelectorAll(".h2_title");
        var textArr=document.querySelectorAll(".article > article > .context");
        title.forEach(function(val,index){
            val.index=index;
            /*点击一次就会获取标题相应的内容*/
            val.addEventListener("click",function(e){
                /*获取文章内容*/
                var text=textArr[e.target.index];
                var id= e.target.getAttribute('data-id');
                var test_p_html=text.querySelector("p").innerHTML;
                if(!test_p_html){
                    /*如果内容为空才发起ajax*/
                    ajax.ajax({
                        type:"post",
                        url:'./php/mysqlTest.php',
                        data:{'class':'art_context','id':id.toString()},
                        success:function(result){
                            if(!result||typeof result!='object') result=[];
                            var str=result[0].context;
                            text.querySelector("p").innerHTML=str;
                            animate();
                        }
                    });
                }else if(pageType=='home'){
                    animate();
                }
                function animate(){
                    var h=text.querySelector("p").offsetHeight;
                    if(text.classList.contains("conceal")){
                        text.classList.remove("conceal");
                        text.style.height=h+"px";
                    }
                    else{
                        text.classList.add('conceal');
                        text.style.height=0;
                    }
                }

            });
        });
    }

    /*向右与向下移动效果函数*/
    function moveEffect(dom,type,fn){
        if(!dom) return;
        fn=typeof fn=="function"?fn:function(){};
        var time=0.5;
        var timerId=null;
        if(type=="X"||type=="x"){
            var direction="translateX(150%)";
        }
        else{
            direction="translateY(40px)";
        }
        dom.style.transition="transform "+time+"s";
        dom.style.transform=direction;
        setTimeout(fn(),time)
    }

    function saveId(art_title){
        if(typeof art_title!=='object') return;
        /*点击文章标题会将文章的id存入数据库*/
        //var art_title=document.querySelectorAll('.article > article > a:first-of-type > h2');
        for(var i=0;i<art_title.length;i++){
            art_title[i].addEventListener("click",function(e){
                var str=this.getAttribute('data-id');
                console.log(str);
                ajax.ajax({
                    type:"post",
                    url:'./php/updateNavClick.php',
                    data:{'class':'clickTitle','value':str.toString()},
                    success:function(result){
                    }
                })
            });
        }
    }

    function saveIdByCookie(art_title){
        if(typeof art_title!=='object') return;
        /*点击文章标题会将文章的id存入cookie*/
        //var art_title=document.querySelectorAll('.article > article > a:first-of-type > h2');
        for(var i=0;i<art_title.length;i++){
            art_title[i].addEventListener("click",function(e){
                var id=this.getAttribute('data-id');
                $.cookie('articleId',id,{path:'/'});
            });
        }
    }
    return {
        showArticle:showArticle,
        likeHeader:likeHeader,
        moveEffect:moveEffect,
        saveId:saveId,
        saveIdByCookie:saveIdByCookie
        }

});
