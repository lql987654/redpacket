(function () {
    $('.job-item').on('click', function (object) {
        var self = $(this);
        if(self.attr('class').indexOf('active') > 0){
            self.removeClass('active');
            $('.job-detail-item').eq(self.index()).slideUp(600);
            if(self.index() === 0) {
                setTimeout(function () {
                    $('.job-detail-item').eq(1).css('margin-left','415px');
                },600)
            }
        }else {
            self.addClass('active');
            $('.job-detail-item').eq(self.index()).slideDown();
            if(self.index() === 0) {
                if( $('.job-detail-item').eq(1).css('display') !== 'none'){
                    $('.job-detail-item').eq(1).removeAttr('style')
                }else {
                    $('.job-detail-item').eq(1).css('margin-left','0');
                }
            }
        }
    })
}());