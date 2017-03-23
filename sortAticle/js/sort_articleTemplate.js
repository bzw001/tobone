/**
 * Created by wangbiaozhi on 2017/2/13.
 */

var ajax=new ToBone();
/*获取数据更新热门文章*/

/*获取数据更新具体文章*/
function getArticle(type){
    ajax.ajax({
        type:'post',
        url:'../php/mysqlTest.php',
        data:{'class':'sortArticle','type':type.toString()},
        success:function(result){
            console.log(result);
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
}

/*点击喜欢*/


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
                    url:'../php/mysqlTest.php',
                    data:{'class':'art_context','id':id.toString()},
                    success:function(result){
                        if(!result||typeof result!='object') result=[];
                        var str=result[0].context;
                        text.querySelector("p").innerHTML=str;
                        animate();//跳转
                    }
                });
            }else{
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

/*点击导航栏信息实现相应的数*/
(function(){
    /*front-end*/
    var fontLis=document.querySelectorAll(".front-end>li");
    //var liLabes=[];
    //for(var i=0;i<fontLis.length;i++){
    //    fontLis[i].index=i;
    //    liLabes.push(fontLis[i].querySelector("a").innerHTML);
    //}

    for(var j=0;j<fontLis.length;j++){
        fontLis[j].addEventListener("click",function(e){

            var str=e.target.innerHTML;
            console.log(str.toString());
            ajax.ajax({
                type:"post",
                url:'../php/updateNavClick.php',
                //url:'./php/test.php',
                data:{'class':'clickType','value':str},
                success:function(result){
                    //var articleId=result;
                    //var htmlStr=[];
                    //articleId.forEach(function(val){
                    //    var id=val.id;
                    //    ajax.ajax({
                    //        type:"post",
                    //        url:'../php/mysqlTest.php',
                    //        //url:'./php/test.php',
                    //        data:{'class':'art_context','id':id},
                    //        success:function(result){
                    //            if(typeof result !='object') return;
                    //            htmlStr.push(result);
                    //        }
                    //    });
                    //})
                }
            })
        });
    }
})();
