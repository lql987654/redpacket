$(document).ready(function(){
    var clickStatus = 6;
    var bodyHeight= document.body.scrollHeight;
    $(".maskLayer").css("height",bodyHeight+"px");

    $("#lotteryBtn").rotate({
        bind: {
                click: function(){
                    $("#lotteryBackBtn").removeAttr("class")
                        document.getElementById('lotteryBtn').setAttribute("disabled",false);
                    rotateFunc(1,330,'获得奖品');
                    var data = [1,2,3,4,5,6];
                    var prize = data[Math.floor(Math.random()*data.length)];
                    console.log(prize);
                    showPrize(prize);
                    clickStatus = clickStatus-1;
                }
            }
    });

    function showPrize(num) {
        switch(num)
        {
            case 1:
                rotateFunc(1,26,'获得一等奖');
                break;
            case 2:
                rotateFunc(2,150,'获得二等奖');
                break;
            case 3:
                rotateFunc(3,270,'获得三等奖');
                break;
            case 4:
                rotateFunc(4,88,'获得500现金红包');
                break;
            case 5:
                rotateFunc(5,210,'获得5等奖');
                break;
            case 6:
                rotateFunc(6,330,'谢谢参与');
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
                $(".maskLayer").css("display","block");
                $(".hb").css("display","block");
                $(".hb").attr("class","hb page_resizeBig");
                document.getElementById('lotteryBtn').removeAttribute("disabled");
               console.log(clickStatus)
            }
        });
    };
    //点击关闭按钮时根据剩余次数判断动画显示
    $("#closeBtn").click(function(){
        $("#lotteryBackBtn").attr("class","xuanzhuan")
        $(".maskLayer").css("display","none");
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
    //文字轮;播
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
    setInterval(scrollUp,time);

})
$(function(){
    setInterval(lxfEndtime,60);
    //倒计时
    function lxfEndtime() {
        $(".last_time").each(function () {
            //var lxfday=$(this).attr("lxfday");//用来判断是否显示天数的变量
            var endtime = new Date($(this).attr("id")).getTime();//取结束日期(毫秒值)
            var nowtime = new Date().getTime();  //今天的日期(毫秒值)
            var youtime = endtime - nowtime;//还有多久(毫秒值)
            var seconds = youtime / 1000;//秒
            var minutes = Math.floor(seconds / 60);//分
            var hours = Math.floor(minutes / 60);//小时
            var days = Math.floor(hours / 24);//天
            var CDay = days;
            var CHour = hours % 24;
            var CMinute = minutes % 60;
            var CSecond = Math.floor(seconds % 60);//"%"是取余运算，可以理解为60进一后取余数，然后只要余数。
            var c = new Date();
            var millseconds = c.getMilliseconds();
            var Cmillseconds = Math.floor(millseconds % 100);
            if (CSecond < 10) {//如果秒数为单数，则前面补零
                CSecond = "0" + CSecond;
            }
            if (CMinute < 10) { //如果分钟数为单数，则前面补零
                CMinute = "0" + CMinute;
            }
            if (CHour < 10) {//如果小时数为单数，则前面补零
                CHour = "0" + CHour;
            }
            if (Cmillseconds < 10) {//如果毫秒数为单数，则前面补零
                Cmillseconds = "0" + Cmillseconds;
            }
            CHour=CHour.toString().split("");
            CMinute=CMinute.toString().split("");
            CSecond=CSecond.toString().split("");
            if (endtime <= nowtime) {
                $(this).html("已过期")//如果结束日期小于当前日期就提示过期啦
            } else {
                $(this).html('<span>'+CHour[0]+'</span>'+'<span>'+CHour[1]+'</span>'+':'+'<span>'+CMinute[0]+'</span>'+'<span>'+CMinute[1]+'</span>'+':'+'<span>'+CSecond[0]+'</span>'+'<span>'+CSecond[1]+'</span>');
            }
        });
    }
});