$(document).ready(function(){
    var clickStatus = 6;

    var bodyHeight= document.body.scrollHeight;
    $(".maskLayer").css("height",bodyHeight+"px");

    $("#lotteryBtn").rotate({
        bind:
            {
                click: function(){
                        document.getElementById('lotteryBtn').setAttribute("disabled",false);
                    rotateFunc(1,330,'获得奖品')
                    var data = [1,2,3,4,5,6];
                    var prize = data[Math.floor(Math.random()*data.length)]
                    console.log(prize)
                    showPrize(prize)
                    clickStatus = clickStatus-1;
                }
            }
    });
    function showPrize(num) {
        switch(num)
        {
            case 1:
                rotateFunc(1,26,'获得一等奖')
                break;
            case 2:
                rotateFunc(2,150,'获得二等奖')
                break;
            case 3:
                rotateFunc(3,270,'获得三等奖')
                break;
            case 4:
                rotateFunc(4,88,'获得500现金红包')
                break;
            case 5:
                rotateFunc(5,210,'获得5等奖')
                break;
            case 6:
                rotateFunc(6,330,'谢谢参与')
                break;
        }
    }
//转盘方法
    var rotateFunc = function(awards,angle,text) {  //awards:奖项，angle:奖项对应的角度, text:提示语
        $('#lotteryBackBtn').stopRotate();
        $("#lotteryBackBtn").rotate({
            angle: 0,
            duration: 2500,
            animateTo: -(angle + 1440), //angle是图片上各奖项对应的角度，1440是我要让指针旋转4圈。所以最后的结束的角度就是这样子^^
            callback: function () {
                $(".maskLayer").css("display","block")
                $(".hb").css("display","block");
                $(".hb").attr("class","hb page_resizeBig")
                document.getElementById('lotteryBtn').removeAttribute("disabled");
               console.log(clickStatus)
            }
        });
    }
    $("#closeBtn").click(function(){
        $(".maskLayer").css("display","none")
        $(".hb").attr("class","hb close_resizeBig ");
        if(clickStatus==5){
            $(".zjfb").attr("class",'zjfb moveFromRight delay400')
        }
        if(clickStatus==4){
            $(".bx").attr("class",'bx moveFromRight delay700');
            $(".fbdh_wcjd").attr("class","moveFromBottomLineHeight fbdh_wcjd")
        }
        if(clickStatus==3){
            $(".fbdh_wcjd").attr("class","moveFromBottomLineFinish fbdh_wcjd");
            $(".icon_hj").attr("class","moveFromBottomIconFinish icon_hj")
        }
    })
    //文字轮播
    var area =document.getElementById('scrollBox');
    var con1 = document.getElementById('con1');
    var con2 = document.getElementById('con2');
    con2.innerHTML=con1.innerHTML;
    function scrollUp(){
        if(area.scrollTop>=con1.offsetHeight){
            area.scrollTop=0;
        }else{
            area.scrollTop++
        }
    }
    var time = 50;
    var mytimer=setInterval(scrollUp,time);
    area.onmouseover=function(){
        clearInterval(mytimer);
    }
    area.onmouseout=function(){
        mytimer=setInterval(scrollUp,time);
    }
    scrollUp()
})
$(function(){
    var now=new Date();
    var end=new Date(2018,4,1,00,10);//结束的时间：年，月，日，分，秒（月的索引是0~11）
    /*两个时间相减,得到的是毫秒ms,变成秒*/
    var result=Math.floor(end-now)/1000;
    console.log(result)
    var interval=setInterval(sub,1000); //定时器 调度对象
    /*封装减1秒的函数*/
    function sub(){
        if (result>1) {
            result = result - 1;
            var second = Math.floor(result % 60);     // 计算秒 ，取余
            var minite = Math.floor((result / 60) % 60); //计算分 ，换算有多少分，取余，余出多少秒
            var hour = Math.floor((result / 3600) % 24); //计算小时，换算有多少小时，取余，24小时制除以24，余出多少小时
            var day = Math.floor(result / (3600*24));  //计算天 ，换算有多少天
            minite=minite.toString().split("");
            second=second.toString().split("");
            console.log(hour)

            $(".last_time").html('<span>'+hour+'</span>'+':'+'<span>'+minite[0]+'</span>'+'<span>'+minite[1]+'</span>'+':'+'<span>'+second[0]+'</span>'+'<span>'+second[1]+'</span>');
        } else{
            alert("倒计时结束！");
            window.clearInterval(interval);//这里可以添加倒计时结束后需要执行的事件
        }
    };
});