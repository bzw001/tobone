/**
 * Created by wangbiaozhi on 2017/2/13.
 */
define(['ajax','template'],function(ToBone,template){
    var ajax=new ToBone();
    /*获取数据更新热门文章*/
    /*获取数据更新具体文章*/
    function getArticle(type,flag){
        ajax.ajax({
            type:'post',
            url:'../php/mysqlTest.php',
            data:{'class':'sortArticle','type':type.toString()},
            success:function(result){
                console.log(result);
                if(!result||typeof result!="object") return;
                var articles=document.querySelectorAll(".hotAticle .article > article");

                fillArticle(result,articles,"article-temp");
                showArticle();
            }
        });
    }
    
    /*根据数据使用模板读取文章，页面定义了6个article标签，一个页面最多6篇文章*/
    /**
     *
     * @param result ajax得到对象数据
     * @param doms   需要填充的模板DOM对象类数组
     * @param templateId  模板的id
     */
    function fillArticle(result,doms,templateId){
        for(var i= 0,len=result.length;i<len;i++){
            doms[i].classList.remove('hide');
            doms[i].innerHTML=template(templateId,{item:result[i]});
            if(i==doms.length-1){
                break;
            }
        }
        if(result.length<doms.length){
            for(i=result.length;i<doms.length;i++){
                doms[i].classList.add('hide');
            }
        }
    }


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
    /*这里需要url参数*/
    var textContainer=document.querySelector(".text-container");
    function showArticle(pageType,url){
        pageType=typeof pageType=='string'?pageType:'home';
        var title=document.querySelectorAll(".h2_title");
        //var textArr=document.querySelectorAll(".article > article > .context");
        var close=textContainer.querySelector('.close');
        close.addEventListener('click', function () {
            textContainer.classList.add('hide');
        });
        title.forEach(function(val,index){
            val.index=index;
            /*点击一次就会获取标题相应的内容*/
            val.addEventListener("click",function(e){
                /*获取文章内容*/
                //var text=textArr[e.target.index];
                var id= e.target.getAttribute('data-id');
                var title= e.target.innerHTML;
                var test_p_html=textContainer.querySelector("p").innerHTML;
                textContainer.classList.remove('hide');
                console.log('text');
                if(!test_p_html){
                    /*如果内容为空才发起ajax*/
                    ajax.ajax({
                        type:"post",
                        url:url,
                        //url:'../php/mysqlTest.php',
                        data:{'class':'art_context','id':id.toString()},
                        success:function(result){
                            if(!result||typeof result!='object') result=[];
                            var str=result[0].context;
                            textContainer.querySelector('h2').innerHTML=title;
                            textContainer.querySelector("p").innerHTML=str;
                            //animate();//跳转
                        }
                    });
                }else if(pageType==='home'){
                    animate();
                }
                function animate(){
                    var h=text.querySelector("p").offsetHeight;
                    text.style.transition='none';
                    text.style.height=h+"px";

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

    return {
        getArticle:getArticle,
        fillArticle:fillArticle,
        showArticle:showArticle,
        likeHeader:likeHeader,
        moveEffect:moveEffect
        }

});
