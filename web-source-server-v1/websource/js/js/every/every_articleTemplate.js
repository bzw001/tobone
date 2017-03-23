/**
 * Created by wangbiaozhi on 2017/2/13.
 */
define(['ajax','template','jquery','jqueryCookie','google-code-prettify'],function(ToBone,template,$,undefined,PR){
    var ajax=new ToBone();
    /*获取数据更新热门文章*/
    /*获取数据更新具体文章*/
    function getArticle(type){
        if(!type){
            console.log('arguments error');
            return;
        }
        ajax.ajax({
            type:'post',
            url:'../php/mysqlTest.php',
            data:{'class':'everyArticle','type':type.toString()},
            success:function(result){
                console.log(result);
                if(!result||typeof result!="object") return;
                var article=document.querySelector('#information');

                var html=template('article-temp',{item:result[0]});
                //html='adasasd<br>bbbbb';
                console.log(html);
                console.log('$.html');
                //$('#information').html(result[0].context);
                $('#information').html(html);
                PR.prettyPrint();
                $('.loading').hide();
                //article.innerHTML=html;
                //fillArticle(result,articles,"article-temp");
                //showArticle();
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

    /*点击文章标题出现文章内容*/
    var textContainer=document.querySelector(".text-container");
    function showArticle(pageType){
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
                        url:'../php/mysqlTest.php',
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

    function getIdByCookie(str){
        if(typeof str!='string') return;
        return $.cookie(str);
    }
    console.log('sort_articleTemplate运行');
    return  {
        getArticle:getArticle,
        fillArticle:fillArticle,
        showArticle:showArticle,
        saveIdByCookie:saveIdByCookie,
        getIdByCookie:getIdByCookie
    };
});
