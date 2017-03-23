/**
 * Created by wangbiaozhi on 2017/2/24.
 */
/*前端技能树的绘制*/
define(['jquery'],function($){
    (function(){
        var front=document.querySelector('.twoEnd');
        var ctx=front.getContext('2d');
        var width=document.body.offsetWidth;
        var big_raduis=width*0.1;
        var small_raduis=width*0.05;
        ctx.canvas.height=big_raduis*4+200;

        ctx.canvas.width=width;
        ctx.canvas.height=big_raduis*4+200;
        var start=Math.PI/6;
        var end=Math.PI;
        if(width<768){
            ctx.font="10px microsoft yahei";

        }else{
            ctx.font="14px microsoft yahei";
        }

        var canvas_bg=new Image();
        canvas_bg.src='./images/black_bg.jpg';
        var textLen=ctx.measureText('技能体系').width;
        console.log(textLen);
        setInterval(function(){
            start+=Math.PI/40;
            ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
            ctx.drawImage(canvas_bg,0,0,ctx.canvas.width,ctx.canvas.height);
            ctx.fillText('技能体系',ctx.canvas.width/2-textLen/2,80);
            /*front*/
            drawCircle(ctx,width*0.2,100+big_raduis,big_raduis,0.7,start,'前端','#ff597a');
            drawCircle(ctx,width*0.4,100+big_raduis,small_raduis,0.7,start,'HTML','#ffff46');
            drawCircle(ctx,width*0.6,100+big_raduis,small_raduis,0.6,start,'CSS','#00ff00');
            drawCircle(ctx,width*0.8,100+big_raduis,small_raduis,0.8,start,'JS','#ffb578');
            //drawCircle(ctx,width*0.2,100+big_raduis,big_raduis,0.7,start,'前端','#ff597a');
            //drawCircle(ctx,width*0.4,100+big_raduis,small_raduis,0.5,0,'HTML','#ffff46');
            //drawCircle(ctx,width*0.6,100+big_raduis,small_raduis,0.3,Math.PI/12,'CSS','#00ff00');
            //drawCircle(ctx,width*0.8,100+big_raduis,small_raduis,0.2,Math.PI/6,'JS','#ffb578');
            //
            /*end*/
            drawCircle(ctx,width*0.2,100+big_raduis*3+50,big_raduis,0.3,start,'后端','#489adf');
            drawCircle(ctx,width*0.4,100+big_raduis*3+50,small_raduis,0.4,start,'C','#8c2bff');
            drawCircle(ctx,width*0.6,100+big_raduis*3+50,small_raduis,0.2,start,'PHP','#773702');
            drawCircle(ctx,width*0.8,100+big_raduis*3+50,small_raduis,0.2,start,'数据库','#d86604');
            //drawCircle(ctx,width*0.2,100+big_raduis*3+50,big_raduis,0.3,start,'后端','#489adf');
            //drawCircle(ctx,width*0.4,100+big_raduis*3+50,small_raduis,0.5,0,'C','#8c2bff');
            //drawCircle(ctx,width*0.6,100+big_raduis*3+50,small_raduis,0.3,Math.PI/12,'C++','#773702');
            //drawCircle(ctx,width*0.8,100+big_raduis*3+50,small_raduis,0.2,Math.PI/6,'数据库','#d86604');
            //
        },200)
    })();

    /**
     *根据比例画弧
     * @param ctx  画布
     * @param x   画圆的x
     * @param y   画圆的y
     * @param radius  半径
     * @param percent  需要一个圆的比例
     * @param start    开始画圆的弧度起点
     * @param text     书写的文字
     * @param color    填充圆的颜色
     */
    function drawCircle(ctx,x,y,radius,percent,start,text,color){
        percent=percent>1?1:percent;
        if(!color) color='#000';
        var radian=percent*Math.PI*2;
        var end=start+radian;
        ctx.lineWidth=4;
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.arc(x,y,radius,start,end);
        ctx.stroke();
        ctx.lineWidth=1;
        var ratio=percent*100+'%';
        var len=ctx.measureText(text).width;
        ctx.fillStyle='#fff';
        ctx.fillText(text,x-len/2,y+radius+30);
        len=ctx.measureText(ratio).width;
        ctx.fillText(ratio,x-len/2,y+7);
    }

    /*图像大小*/

    (function(){
        var width=document.body.offsetWidth;
        if(width<768){
            $('.projects >div >ul>li>img').css({
                //width:width*0.8+'px',
                height:'100px'
            })
        }else{
            $('.projects>.show').css({
                'width':'20%'
            });
            //$('.projects >div >img').css({
            //    width:width*0.3+'px',
            //    height:'300px'
            //})
        }
        console.log($('.projects >div >img'));
    })();
});


