$(function () {
    // 轮播方法
    var startX,
        startY,
        tapStatus = false;
    $(".detail_content li").on("touchstart", function(e) {
        tapStatus = true;
        // 判断默认行为是否可以被禁用
        if (e.cancelable) {
            // 判断默认行为是否已经被禁用
            if (!e.defaultPrevented) {
                e.preventDefault();
            }
        }
        startX = e.originalEvent.changedTouches[0].pageX,
            startY = e.originalEvent.changedTouches[0].pageY;
    });
    $(".detail_content li").on("touchend", function(e) {
        var self = $(this);
        // 判断默认行为是否可以被禁用
        if (e.cancelable) {
            // 判断默认行为是否已经被禁用
            if (!e.defaultPrevented) {
                e.preventDefault();
            }
        }
        moveEndX = e.originalEvent.changedTouches[0].pageX,
            moveEndY = e.originalEvent.changedTouches[0].pageY,
            X = moveEndX - startX,
            Y = moveEndY - startY;
        //左滑
        if ( X > 0 ) {
            btn_right(self);
        }
        //右滑
        else if ( X < 0 ) {
            btn_left(self);
        }
    });

    //鼠标移入显示左右箭头和关闭按钮
    var detailLength = $('.detail_content li').length;
    //点击上一张的封装函数
    function btn_left(_this) {
        var self = _this;

        if($('.next-detail')) {
            $('.next-detail').removeClass('next-detail')
        }
        if($('.last-detail')) {
            $('.last-detail').removeClass('last-detail')
        }
        if($('.next-tag')) {
            $('.next-tag').removeClass('next-tag')
        }
        if($('.last-tag')) {
            $('.last-tag').removeClass('last-tag')
        }

        if(self.index() !== detailLength -1 ){

            self.removeAttr('class').attr('class', 'next-detail');
            self.next().removeAttr('class').attr('class','active-detail');
            if(self.next().index() == detailLength - 1 ) {
                $('.detail_content li').eq(0).removeAttr('class').attr('class','last-detail');
                $('.bottom-tag-box li').eq(0).removeAttr('class').attr('class','next-tag left-to-right');
            }
            self.next().next().removeAttr('class').attr('class','last-detail');

            $('.bottom-tag-box li').eq(self.index()).removeAttr('class').attr('class', 'last-tag middle-to-left');
            $('.bottom-tag-box li').eq(self.index()).next().removeAttr('class').attr('class','active-tag right-to-middle');
            $('.bottom-tag-box li').eq(self.index()).next().next().removeAttr('class').attr('class','next-tag left-to-right');
        } else {

            self.removeAttr('class').attr('class', 'next-detail');
            $('.detail_content li').eq(0).removeAttr('class').attr('class','active-detail');
            $('.detail_content li').eq(1).removeAttr('class').attr('class','last-detail');

            $('.bottom-tag-box li').eq(self.index()).removeAttr('class').attr('class', 'next-tag left-to-right');
            $('.bottom-tag-box li').eq(0).removeAttr('class').attr('class','active-tag right-to-middle');
            $('.bottom-tag-box li').eq(1).removeAttr('class').attr('class','last-tag middle-to-left');

        }
    }

    //点击下一张的封装函数
    function btn_right(_this) {
        var self = _this;
        if($('.next-detail')) {
            $('.next-detail').removeClass('next-detail')
        }
        if($('.last-detail')) {
            $('.last-detail').removeClass('last-detail')
        }
        if($('.next-tag')) {
            $('.next-tag').removeClass('next-tag')
        }
        if($('.last-tag')) {
            $('.last-tag').removeClass('last-tag')
        }
        if(self.index() !== 0 ){

            self.removeAttr('class').attr('class', 'last-detail');
            self.prev().removeAttr('class').attr('class','active-detail');
            if(self.prev().index() == 0 ) {
                $('.detail_content li').eq(0).removeAttr('class').attr('class','active-detail');
                $('.detail_content li').eq(detailLength -1).removeAttr('class').attr('class','next-detail');

                $('.bottom-tag-box li').eq(0).removeAttr('class').attr('class','active-tag left-to-middle');
                $('.bottom-tag-box li').eq(detailLength -1).removeAttr('class').attr('class','next-tag middle-to-right');
            }
            self.prev().prev().removeAttr('class').attr('class','next-detail');

            $('.bottom-tag-box li').eq(self.index()).removeAttr('class').attr('class', 'last-tag right-to-left');
            $('.bottom-tag-box li').eq(self.index()).prev().removeAttr('class').attr('class','active-tag left-to-middle');
            $('.bottom-tag-box li').eq(self.index()).prev().prev().removeAttr('class').attr('class','next-tag middle-to-right');
        } else {
            $('.detail_content li').eq(detailLength -2).attr('class', 'next-detail');
            $('.detail_content li').eq(detailLength -1).removeAttr('class').attr('class','active-detail');
            $('.detail_content li').eq(0).removeAttr('class').attr('class','last-detail');

            $('.bottom-tag-box li').eq(detailLength -2).attr('class', 'next-tag middle-to-right');
            $('.bottom-tag-box li').eq(detailLength -1).removeAttr('class').attr('class','active-tag left-to-middle');
            $('.bottom-tag-box li').eq(0).removeAttr('class').attr('class','last-tag right-to-left');
        }
    }

}());