$(document).ready(function(){
    var isRan = '1';//用于ajax请求判断是刚进入页面还是有点击发起的请求
    var num_arr=[];
    getAjaxInfo( isRan);
    var clickStatus ;
    var prizeInterfaceValue = $("#prize-interface").val();//获取接口

    var bodyHeight= document.body.scrollHeight;
    $(".maskLayer").css("height",bodyHeight+"px");
        $("#lotteryBtn").rotate({
            bind:
                {
                    click: function(){
                        document.getElementById('lotteryBtn').setAttribute("disabled",false);
                        $("#xuanzhuan-award").removeAttr("class");
                        BODYBOX._noScroll();
                        isRan = '0';
                        if(clickStatus >0 ){
                            getAjaxInfo(isRan);
                        }else{
                            BODYBOX._reScroll();
                            $("#xuanzhuan-award").attr("class","xuanzhuan-award");
                            alert("次数已用尽");
                        }
                    }
                }
        });

    $('.hidden').on('click',function(){
        $('.mask').css('display','none');
        $('.popup-box').addClass('close_topRight ');
    })
    $.ajax({
        type:'get',
        url:'http://localhost:3000/data/read?type=index',
        dataType:'jsonp',
        success:function (data) {
            var result = data.data.data;
            console.log(result)
        }
    })
    function getAjaxInfo(isRan) {
        $.ajax({
            type: "post",
            url: prizeInterfaceValue,
            async: false,
            data:{
                "is_run":isRan
            },
            dataType: "json",
            success: function(data){
                showConsole("data",data);
                console.log(data);
                var result = data.data;
                var prize_num = result.prize_num;
                var remain_num  = result.remain_num;
                var prize_location = result.prize_location;
                var prize_img = result.prize_big.img_address;
                var prize_img_href = result.prize_big.link;
                clickStatus = result.remain_num;
                if(isRan==1){
                    changeRemain(remain_num,prize_num)
                }
                num_arr=[remain_num,prize_num];
                $("#hb_chance").text(remain_num);
                $(".gift-img").attr('src',prize_img);
                $(".gift-img").parents().attr("href",prize_img_href);
                $(".hb_btn a").attr("href",prize_img_href);
                if(isRan==0){
                    showPrize(prize_location)
                }

            }
        })
    }
    function showPrize(num) {
        showConsole("num111",num);
        switch(num)
        {
            case 3:
                rotateFunc(3,34,'谢谢参与');
                break;
            case 2:
                rotateFunc(2,330,'获得苹果手机');
                break;
            case 4:
                rotateFunc(4,150,'获得幸运奖');
                break;
            case 1:
                rotateFunc(1,88,'获得黑卡');
                break;
            case 5:
                rotateFunc(5,270,'500现金红包');
                break;
            case 6:
                rotateFunc(6,210,'三星s9');
                break;
            case 0:
                showConsole("奖品位置为",num+'非法');
                break;
        }
    }
//转盘方法
     function rotateFunc(awards,angle,text) {  //awards:奖项，angle:奖项对应的角度, text:提示语
        $('#lotteryBackBtn').stopRotate();
        $("#lotteryBackBtn").rotate({
            angle: 0,
            duration: 2500,
            animateTo: -(angle + 1440), //angle是图片上各奖项对应的角度，1440是我要让指针旋转4圈。所以最后的结束的角度就是这样子^^
            callback: function () {

                $(".maskLayer").css("display","block");
                $(".hb").css("display","block");
                $(".hb").attr("class","hb page_resizeBig");
                $("#lotteryBtn").removeAttr("disabled");
               showConsole("clickStatus",clickStatus)
            }
        });
    };
    //点击关闭按钮
    $("#closeBtn").click(function(){
        var toPage = $("#closeBtn").attr("toPage");
        BODYBOX._reScroll();
        $("#xuanzhuan-award").attr("class","xuanzhuan-award");
        if(clickStatus>0){
            $(".maskLayer").css("display","none");
            $(".hb").attr("class","hb close_resizeBig ");
            setTimeout(function () {
                changeRemain(num_arr[0],num_arr[1]);
            },500);

            iconAnimation();
        }else{
            $(".maskLayer").css("display","none");
            $(".hb").css("display","none");
            changeRemain(num_arr[0],num_arr[1]);
            var toPage = $("#closeBtn").attr("toPage");
            setTimeout(function () {
                window.location.href=toPage;
            },500);
        }
    });
    function changeRemain(remain,num) {
        $(".jpzx_btn b").text(num);
        $(".jpsy_btn b").text(remain);
    }

    //动画根据剩余次数的判断
    function iconAnimation(){
        if(clickStatus<=5){
            $(".active-right-tip").attr("class",'active-right-tip moveFromRight delay400')
        }
        if(clickStatus<=4){
            $(".treasureBox-icon").attr("class",'treasureBox-icon moveFromTopLeft');
            $(".right-progress-unfinished").attr("class","moveFromBottomLineHeight right-progress-unfinished")
        }
        if(clickStatus<=3){
            $(".right-progress-unfinished").attr("class","moveFromBottomLineFinish right-progress-unfinished");
            $(".icon-rocket").attr("class","moveFromBottomIconFinish icon-rocket")
        }
    }
    iconAnimation();
    // 窗口禁止&&恢复滚动
    var BODYBOX = {
        _noScroll: function() {
            var scrollTop = $(window).scrollTop();
            $('body').css({
                'overflow': 'hidden',
                'position': 'fixed',
                'top': scrollTop * -1
            });

        },
        _reScroll: function() {
            var scrollTop = -parseInt($('body').css('top'));
            $('html, body').css({
                'overflow': 'auto',
                'position': 'static',
                'top': 'auto'
            }).scrollTop(scrollTop);
        }
    };
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
    var mytimer=setInterval(scrollUp,time);

    scrollUp();
    function showConsole(textInfo,msg) {
        console.log(textInfo+"......................."+msg)
    }
});
//倒计时 刷新页面计时不变 window.name
var maxtime;
if(window.name=='' || window.name == '-1' || isNaN(window.name)){
    maxtime = 60*60;
}else{
    maxtime = window.name;
}
var show_time = $('.title').attr("data-chooseHeader");
console.log(show_time)
if(show_time=="no" || show_time==undefined){
    function CountDown(){
        if(maxtime>=0){
            hours = Math.floor(maxtime/3600);
            minutes = Math.floor((maxtime-hours*3600)/60);
            seconds = Math.floor(maxtime%60);
            CMinute=minutes.toString().split("");
            CSecond=seconds.toString().split("");
            if (CSecond < 10) {//如果秒数为单数，则前面补零
                CSecond = "0" + CSecond;
            }
            if (CMinute < 10) { //如果分钟数为单数，则前面补零
                CMinute = "0" + CMinute;
            }
            msg = '<span>0</span>'+'<span>0</span>'+':'+'<span>'+CMinute[0]+'</span>'+'<span>'+CMinute[1]+'</span>'+':'+'<span>'+CSecond[0]+'</span>'+'<span>'+CSecond[1]+'</span>'
            document.all["timer"].innerHTML = msg;
            --maxtime;
            window.name = maxtime;
        }
        else{
            clearInterval(timer);
        }
    }
    timer = setInterval("CountDown()",1000);
}
