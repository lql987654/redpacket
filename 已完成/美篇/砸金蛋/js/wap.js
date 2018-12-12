
// 获取初始数据
TOOL._initPage();

// 抽奖前奖品随机特效
var timer = null;
clearInterval(timer);
timer = setInterval(function () {
    TOOL._randomEffect($('.egg:not(".active")'), 'swing');
}, 1000);

/*
* 开始抽奖：
*
*/
$('.egg-item').on('click', function () {

    if (TOOL._flag) {

        var self = $(this);
        if (self.hasClass('active')) {
            if (TOOL._remainNum <= 0) {
                TOOL._showInterfaceBox();
            }
            return false;
        }

        $.ajax({
            type: 'post',
            url: TOOL._interface,
            data: { id: self.attr('data-prizeid') },
            dataType: 'jsonp',
            success: function (response) {

                if (response.status === 0) {
                    clearInterval(timer);

                    TOOL._prizeDrawDataInit(response.data); // 抽奖通用数据初始化

                    // 开始抽奖工具显示
                    self.find('.tool').css('display', 'block');

                    // 抽奖之前奖品晃动特效
                    self.removeClass('swing').addClass('swing');

                    // 500毫秒后抽奖前奖品特效显示
                    setTimeout(function () {

                        // 开始抽奖工具消失
                        self.find('.tool').css('display', 'none');
                        // 抽出的奖品显示
                        self.find('.egg').addClass('egg-smashing');
                        // 200毫秒后
                        setTimeout(function(){

                            // 单个奖品弹窗显示
                            TOOL._singlePrizeModalShow();
                            self.addClass('active');
                            self.find('.egg').addClass('egg-smashing-finished');
                            timer = setInterval(function () {
                                TOOL._randomEffect($('.prize-item:not(".active")'), 'swing');
                            }, 1000);

                        }, 200);

                    }, 700);
                } else {
                    salert('操作失败，请稍后重试...');
                }

            },
            error: function () {
                salert('网络故障，请稍后重试...');
            }
        });

    }

});

