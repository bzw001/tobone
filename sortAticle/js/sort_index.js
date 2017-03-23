/**
 * Created by wangbiaozhi on 2017/2/12.
 */
window.onload=function(){
    /*轮播图的设置*/

    /*轮播图上文字特效*/


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
                getArticle(type);
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

    /*需要获取用户跳转时点的是哪个标签*/
};