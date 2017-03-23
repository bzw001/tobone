/**
 * Created by wangbiaozhi on 2017/2/12.
 */
define(['ajax','search_art_template','template','search'],function(ToBone,article,template,participle){
    /*轮播图的设置*/

    /*轮播图上文字特效*/

    var ajax=new ToBone();
    /*首先通过数据库读取用户在导航栏点击的是哪一类的信息*/
    (function(){
        var type='';
        ajax.ajax({
            type:"post",
            url:'../php/mysqlTest.php',
            data:{'class':'clicknav','type':'current'},
            success:function(result){
                console.log(result);
                if(!result||typeof result!='object'){
                    console.log('ajax result is not object or null');
                    return;
                }
                type=result[0].value;
                article.getArticle(type);
            }
        });
    })();

    /*对导航栏信息的点击更新文章*/
    (function(){
        /*front-end*/
        var fontLis=document.querySelectorAll(".front-end>li");
        /*back-end*/
        var backLis=document.querySelectorAll(".back-end>li");
        for(var j=0;j<fontLis.length;j++){
            fontLis[j].addEventListener("click",function(e){
                var str=e.target.innerHTML;
                getArticle(str);
            });
        }
        for(var i=0;i<backLis.length;i++){
            backLis[i].addEventListener("click",function(e){
                var str=e.target.innerHTML;
                getArticle(str);
            });
        }
    })();

    /*点击搜索显示搜索结果*/
    (function(){
        var searchBtn=document.querySelector('.search .searchClick');
        var searchVal=document.querySelector('.search .searchVal');
        searchBtn.addEventListener('click',function(){
            var value=searchVal.value;
            if(!value||value==' ') return null;
            /*根据传进来的数据进行分词后得到字符串数组然后发送*/
            var key=participle(value);
            var keyArrH=key.prior;
            var keyArrL=key.low;
            console.log(keyArrH);
            var keyStrH=keyArrH.join();
            var keyStrL=keyArrL.join();
            console.log(keyStrH);
            console.log(keyStrL);
            ajax.ajax({
                type:"post",
                url:'../php/keySearch.php',
                data:{'class':'keySearch','keyH':keyStrH,'keyL':keyStrL},
                success:function(result){
                    console.log(result);
                    if(result.length==0||typeof result!='object'){
                        console.log('ajax result is not object or null');
                        /*如果查询不到，就提示消息*/
                        var tip=document.querySelector('.searchBtn>p');
                        tip.classList.remove('hide');
                        setTimeout(function(){
                            tip.classList.add('hide');
                        },2000);
                        return;
                    }
                    var articles=document.querySelectorAll(".hotAticle .article > article");
                    article.fillArticle(result,articles,"article-temp");
                    //var html0=template("article-temp",{item:result[0]});
                    //var html1=template("article-temp",{item:result[1]});
                    //var html2=template("article-temp",{item:result[2]});
                    //var html3=template("article-temp",{item:result[3]});
                    //var html4=template("article-temp",{item:result[4]});
                    //var html5=template("article-temp",{item:result[5]});
                    //var html6=template("article-temp",{item:result[6]});
                    //var html7=template("article-temp",{item:result[7]});
                    //articles[0].innerHTML=html0;
                    //articles[1].innerHTML=html1;
                    //articles[2].innerHTML=html2;
                    //articles[3].innerHTML=html3;
                    //articles[4].innerHTML=html4;
                    //articles[5].innerHTML=html5;
                    //articles[6].innerHTML=html6;
                    //articles[7].innerHTML=html7;
                    article.showArticle();
                    //var type=result[0].value;
                    //getArticle(type);
                }
            });
        });
    })();
    /*导航栏的特效*/
    (function(){
        var navLis=document.querySelectorAll(".infoBar > ul > li");

        /*悬停导航li颜色变化*/
        for(var i=0;i<navLis.length;i++){
            navLis[i].index=i;
            navLis[i].onmouseover=function(){
                this.classList.add("active");
                for(var i=0;i<navLis.length;i++){
                    if(this.index==i){
                        continue;
                    }else{
                        navLis[i].classList.remove("active");
                    }
                }
            };
            navLis[i].onmouseout=function(){
                navLis[0].classList.add("active");
                for(var i=1;i<navLis.length;i++){
                    navLis[i].classList.remove("active");

                }
            }
        }
        var front=navLis[1];
        var back=navLis[2];
        var f_ul=front.querySelector("ul");
        var b_ul=back.querySelector("ul");

        front.addEventListener("click",function(){displayDetail(f_ul)});
        back.addEventListener("click",function(){displayDetail(b_ul)});
        console.log(f_ul);
        front.addEventListener("mouseleave",function(){f_ul.style.height=0});
        back.addEventListener("mouseleave",function(){b_ul.style.height=0});
        //f_ul.addEventListener("mouseenter",function(){
        //    console.log("dsada")
        //    front.addEventListener=null});
        //b_ul.addEventListener("mouseenter",function(){b_ul.style.height=0});

        function displayDetail(dom){
            var height=0;
            var lis=dom.querySelectorAll("li");
            height=lis.length*lis[0].offsetHeight;
            dom.classList.remove("hide");
            dom.style.height=height+"px";
        }
    })();

    /*随机信息模块设置*/
    /*1、设置随机题a标签的高与宽相等*/
    var randomQes=document.querySelector(".categories > .randomInfo > a");
    randomQes.style.height=randomQes.offsetWidth+"px";
    /*2、数据引入与事件绑定，动画效果的实现*/
    (function(){
        /*a、第一次加载获得题目数据*/
        var questions=[];
        ajax.ajax({
            type:'post',
            url:'../php/asynchronous.php',
            data:{'class':'questions'},
            success:function(result){
                result=typeof result!="object"?[]:result;
                questions=result;
            }
        });
        var randomA=document.querySelector(" .randomInfo > p>a");
        var randomSpan=document.querySelectorAll(".randomInfo > a > span");
        var flag=true;
        /*注册点击事件*/
        randomA.addEventListener("click",function(){
            if(!flag) return;
            flag=false;
            /*让第一个span显示*/
            randomSpan[0].classList.remove("hidden");
            moveEffect(randomSpan[1],'x',function(){
                flag=true;
                moveEffect(randomSpan[0],'y');
                setTimeout(function(){
                    var que_index =Math.floor(Math.random()*questions.length);
                    randomSpan[1].innerHTML=randomSpan[0].innerHTML;
                    randomSpan[0].innerHTML=questions[que_index].Title;
                    randomSpan.forEach(function(val,index){
                        val.style.transition="none";
                        val.style.transform="none";
                    });
                    /*让第一个span隐藏*/
                    randomSpan[0].classList.add("hidden");
                },500);

            });

        })
    })();
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

    /*留言板设置*/
    (function(){
        var hotAticle=document.querySelector('.hotAticle');
        var MessageBox=document.querySelector('.leaveMessage');
        var leaveMessage=document.querySelector('.message');

        leaveMessage.addEventListener('click',function(){
            hotAticle.classList.add('hide');
            MessageBox.classList.remove('hide');
        });

        /*留言提交*/
        var textArea=document.querySelector('.leaveMessage>textarea');
        var submit=document.querySelector('.leaveMessage>input');
        var thankWord=document.querySelector('.leaveMessage>span');

        submit.addEventListener('click',function(){
            if(thankWord.classList.contains('hide')){
                var date=new Date;

                var year=date.getFullYear();
                var month=date.getMonth()+1;
                var day=date.getDate();
                var hour=date.getHours();
                var minutes=date.getMinutes();

                var nowTime=''+year+'年'+month+'月'+day+'日'+hour+'时'+minutes+'分';
                var inputStr=textArea.value;
                if(!inputStr) return;
                ajax.ajax({
                    type:'post',
                    url:'../php/mysqlTest.php',
                    data:{'class':'leavemessage','date':nowTime,'value':inputStr},
                    success:function(){
                        textArea.disabled=true;
                        textArea.value='';
                        thankWord.classList.remove('hide');
                    }
                });

            }
        })

    })();
    /*点击导航栏信息将点击信息录入数据库*/
    (function(){
        /*front-end*/
        var fontLis=document.querySelectorAll(".front-end>li");
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
                    }
                })
            });
        }
    })();
});
