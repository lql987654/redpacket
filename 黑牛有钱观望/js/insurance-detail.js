(function () {
    $('.info-box-content ul li').on('click', function (object) {
        var self = $(this);
        var index = self.index();
        self.siblings().removeClass('active');
        self.addClass('active');
        $('.info-box-detail').css('display','none');
        $('.info-box-detail').eq(index).css('display','block');
    })

    $('#datetimepicker').datetimepicker({
        format: 'yyyy-mm-dd',
        weekStart: 1,
        autoclose: true,
        startView: 4,
        minView: 2,
        forceParse: false,
        language: 'zh-CN',
        endDate: new Date()
    });
}());