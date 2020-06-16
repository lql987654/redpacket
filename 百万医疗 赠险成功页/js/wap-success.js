(function () {
    //  倒计时关闭弹窗按钮
    var wait = 3;
    var time = setInterval(function(){
        if (wait < 0) {
            clearInterval(time);
            window.location.href = $('.success-button').attr('href');
        } else {
            $('.success-button span').text(wait);
            wait--;
        }
    },1000);
}())