(function () {
    var banner_options = {
            box_id: "#banner",
            nav_id: "#banner-nav-button",
            index: 1,
            max_index: 3,
            timer: null
        };
    // banner图滚动
    function banner_move(options) {
        $("li", options.box_id).eq(options.index)
            .animate({ opacity: 1 }, 1000)
            .css({ "z-index": "1" })
            .siblings()
            .stop(true,true)
            .animate({ opacity: 0 }, 1000)
            .css({ "z-index": "0" });
        $("a", options.nav_id).eq(options.index)
            .addClass("active")
            .siblings()
            .removeClass("active");
    }
    // 开始播放
    function startMove(options) {
        banner_move(options);
        options.index++;
        if(options.index == options.max_index) {
            options.index = 0;
        }
    }

// 停止播放
    function stopMove(options) {
        if (options.timer) {
            clearInterval(options.timer);
        }
    }
    /* banner */
//banner自动播放
    banner_options.timer = setInterval(function(){
        startMove(banner_options)
    } , 3000);

//滑入 停止banner动画，滑出开始banner动画
    $('#banner').hover(function(){
        stopMove(banner_options)
    }, function(){
        banner_options.timer = setInterval(function(){
            startMove(banner_options)
        } , 3000);
    });
//点击导航 触发banner动画
    $("#banner-nav-button a").hover(function(){
        var self = this;
        stopCallback(banner_options, self);
    }, function(){
        startCallback(banner_options);
    });
    function stopCallback(options, self) {
        stopMove(options)
        options.index  =  $("a", options.nav_id).index(self);
        options.timer = setTimeout(function(){
            banner_move(options);
            $(options.box_id).stop();
        } , 400);
    };
    function startCallback(options) {
        clearInterval(options.timer);
        options.timer = setInterval(function(){
            startMove(options);
        }, 3000);
    };
}())