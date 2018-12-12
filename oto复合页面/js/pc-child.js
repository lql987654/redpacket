$(function () {

    $('.tag-button span').on('click', function (object) {
        var self = $(this);
        addClass(self);

        self.parent().next().find('li').removeClass('active');
        self.parent().next().find('li').eq(self.index()).addClass('active')
    });

    $('#server-nav').hover(function (object) {
        var self = $(this);

        $('.main-nav-child-bar').show();
        $('.top').css('box-shadow', 'none');

    },function () {
        $('.main-nav-child-bar').hide();
        $('.top').css('box-shadow', '0 3px 20px 1px #a4a4a4');

    });

    $('.main-nav-child-bar-content ul li').hover(function () {
        var self = $(this);
        addClass(self);
    });

    $('.nav-tab ul li').on('click', function (object) {
        var self = $(this);
        addClass(self);
        $('.tab-detail-box').hide();
        $('.tab-detail-box').eq(self.index()).show();
    });
    function addClass(_this) {
        var self = _this;
        self.siblings().removeClass('active');
        self.addClass('active');
    }
}());