/**
 * Created by wangbiaozhi on 2017/2/12.
 */
window.onload=function(){
    /*轮播图的设置*/
    (function(){
        var liWidth=document.querySelector(".carousel>.imgBox").offsetWidth;
        var lis=document.querySelectorAll(".carousel > .imgBox > ul > li");
        document.querySelector(".carousel>.indicator").style.height=document.querySelector(".carousel>.imgBox").offsetHeight+"px";
        for(var i=0;i<lis.length;i++){
            lis[i].style.width=liWidth+"px";
        }
        var ul=document.querySelector(".carousel > .imgBox > ul");
        console.log(ul);
        ul.style.width=lis.length*liWidth+"px";

        //��ʱ���Ŀ�����ر�
        var timerId=null;
        var timer={
            open:function(fn){
                if(!fn) return;
                timerId=setInterval(fn,3000)
            },
            close:function(){
                clearInterval(timerId);
            }
        };
        /*1�������ֲ�*/
        var index=-lis.length+1;
        ul.style.transform="translateX("+(index*liWidth)+"px)";
        /*轮播函数*/
        var imglis=document.querySelectorAll(".carousel>.indicator>ul>li>a>img");
        console.log(imglis);
        loop();
        function loop(){
            timer.open(function(){
                index++;
                ul.style.transition="transform 0.8s";
                ul.style.transform="translateX("+index*liWidth+"px)";
                for(var i= 0,len=imglis.length;i<len;i++){
                    if(imglis[i].classList.contains("active")){
                        imglis[i].classList.remove("active");
                        imglis[-index].classList.add("active");
                    }
                }
                //blinkText();
                setTimeout(function(){
                    if(index==0){
                        index=-lis.length+1;
                        ul.style.transition="none";
                        ul.style.transform="translateX("+index*liWidth+"px)";
                    }
                },800);

            })
        }
    })();

    /*轮播图上文字特效*/
    blinkText();
    function blinkText(){
        var Slide = function(el) {
                this.el = el;
                this.txt = new TextFx(this.el.querySelector('.title'));
            },
        // The Slideshow obj.
            Slideshow = function(el) {
                this.el = el;
                this.current = 0;
                this.slides = [];
                var self = this;
                [].slice.call(this.el.querySelectorAll('.slide')).forEach(function(slide) {
                    self.slides.push(new Slide(slide));
                });
                this.slidesTotal = this.slides.length;
                this.effect = this.el.getAttribute('data-effect');
            };

        Slideshow.prototype._navigate = function(direction) {
            if( this.isAnimating ) {
                return false;
            }
            this.isAnimating = true;
            var self = this, currentSlide = this.slides[this.current];
            this.current = direction === 'next' ? (this.current < this.slidesTotal - 1 ? this.current + 1 : 0) : (this.current = this.current > 0 ? this.current - 1 : this.slidesTotal - 1);
            var nextSlide = this.slides[this.current];

            var checkEndCnt = 0, checkEnd = function() {
                ++checkEndCnt;
                if( checkEndCnt === 2 ) {
                    currentSlide.el.classList.remove('slide--current');
                    nextSlide.el.classList.add('slide--current');
                    self.isAnimating = false;
                }
            };

            // Call the TextFx hide method and pass the effect string defined in the data-effect attribute of the Slideshow element.
            currentSlide.txt.hide(this.effect, function() {
                currentSlide.el.style.opacity = 0;
                checkEnd();
            });
            // First hide the next slide?s TextFx text.
            nextSlide.txt.hide();
            nextSlide.el.style.opacity = 1;
            // And now call the TextFx show method.
            nextSlide.txt.show(this.effect, function() {
                checkEnd();
            });
        };

        Slideshow.prototype.next = function() { this._navigate('next'); };
        Slideshow.prototype.prev = function() { this._navigate('prev');	};
        //var timerId=null;
        [].slice.call(document.querySelectorAll('.content')).forEach(function(el, pos) {
            var slideshow = new Slideshow(el.querySelector('.slideshow'));
            //clearInterval(timerId);
                setInterval(function(){
                    slideshow.next();
                },3000);
        });
    }
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
            url:'./php/asynchronous.php',
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


};