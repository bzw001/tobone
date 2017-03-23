/**
 * Created by wangbiaozhi on 2017/2/13.
 */

var ajax=new ToBone();
/*获取数据更新热门文章*/
ajax.ajax({
    type:'post',
    //url:'./php/asynchronous.php',
    url:'./php/mysqlTest.php',
    data:{'class':'title'},
    success:function(result){
        if(!result||typeof result!="object") return;
        console.log("ajax"+typeof result);
        //console.log(result);
        var html=template("hotTitle-T",{items:result});
        document.querySelector("#hotTitle").innerHTML=html;
        /*数据更新完成后才执行点击喜欢事件的绑定*/
        likeHeader();
    }
});
/*获取数据更新具体文章*/
ajax.ajax({
    type:'post',
    url:'./php/mysqlTest.php',
    data:{'class':'article'},
    success:function(result){
        console.log(typeof result)
        if(!result||typeof result!="object") return;
        var articles=document.querySelectorAll(".hotAticle .article > article");
        //console.log(result);
        var html0=template("article-temp",{item:result[0]});
        var html1=template("article-temp",{item:result[1]});
        var html2=template("article-temp",{item:result[2]});
        var html3=template("article-temp",{item:result[3]});
        var html4=template("article-temp",{item:result[4]});
        var html5=template("article-temp",{item:result[5]});
        var html6=template("article-temp",{item:result[6]});
        var html7=template("article-temp",{item:result[7]});
        articles[0].innerHTML=html0;
        articles[1].innerHTML=html1;
        articles[2].innerHTML=html2;
        articles[3].innerHTML=html3;
        articles[4].innerHTML=html4;
        articles[5].innerHTML=html5;
        articles[6].innerHTML=html6;
        articles[7].innerHTML=html7;
        showArticle();
    }
});
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
function showArticle(){
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
            }else{
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

/*点击导航栏信息将点击的信息存入数据库*/
(function(){
    /*front-end*/
    var fontLis=document.querySelectorAll(".front-end>li");
    var backLis=document.querySelectorAll(".back-end>li");

    for(var j=0;j<fontLis.length;j++){
        fontLis[j].addEventListener("click",function(e){
            var str=e.target.innerHTML;
            console.log(str.toString());
            ajax.ajax({
                type:"post",
                url:'./php/updateNavClick.php',
                data:{'class':'clickNav','value':str},
                success:function(result){
                }
            })
        });
    }
    for(var i=0;i<backLis.length;i++){
        a=backLis[i].addEventListener("click",function(e){
            var str=e.target.innerHTML;
            console.log(str);
            //console.log(str.toString());
            ajax.ajax({
                type:"post",
                url:'./php/updateNavClick.php',
                data:{'class':'clickNav','value':str.toString()},
                success:function(result){
                }
            })
        });
    }
})();
