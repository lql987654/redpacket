
// 获取初始数据
TOOL._initPage();
var bodyHeight= window.screen.height ;
$(".maskLayer,.container").css("height",bodyHeight+"px");
// 抽奖前动画奖品随机特效
var timer = null;
clearInterval(timer);
timer = setInterval(function(){
    TOOL._randomEffect($('.prize-item:not(".active") .card-item-back-btn'), 'beat');
}, 1000);
console.log()
/*
* 开始抽奖：
*  data: { id: self.attr('data-prizeid') },
*/
$('.prize-item').on('click', function () {
    console.log(TOOL._flag)
    if (TOOL._flag) {

        var self = $(this);
        if (self.hasClass('active')) {
            if (TOOL._remainNum <= 0) {
                TOOL._showInterfaceBox();
            }
            var this_url = self.attr("data-href");
            window.location.href=this_url

        }
        console.log(TOOL._interface)
        $.ajax({
            type: 'get',
            url: TOOL._interface,
            dataType:'jsonp',
            success: function (response) {
                var data = response.data;
                console.log(data)
                    clearInterval(timer);

                    TOOL._prizeDrawDataInit(data); // 抽奖通用数据初始化


                    // 500毫秒后抽奖前奖品特效显示
                    setTimeout(function () {

                        // 抽出的奖品显示
                        self.addClass('active');

                        // 200毫秒后
                        setTimeout(function(){

                            // 单个奖品弹窗显示
                            TOOL._singlePrizeModalShow();
                            timer = setInterval(function(){
                                TOOL._randomEffect($('.prize-item:not(".active") .card-item-back-btn'), 'beat');
                            }, 1000);
                            TOOL._closeCardMask()
                        }, 200);

                    }, 500);

            },
            error: function () {
                console.log('网络故障，请稍后重试...');
            }
        });

    }

});
