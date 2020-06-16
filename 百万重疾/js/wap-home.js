(function () {
    var navOffsetTop;
    var section1OffsetTop;
    var section2OffsetTop;
    var section3OffsetTop;
    var documentHeight;
    var navHeight;

    function getDistance() {
        navOffsetTop = $('#nav').offset().top;
        section1OffsetTop = $('#section-1').offset().top;
        section2OffsetTop = $('#section-2').offset().top;
        section3OffsetTop = $('#section-3').offset().top;
        documentHeight = $(document).height();
        navHeight = $('#nav').height();
    }
    setTimeout(() => {
        // foldingTable();
        fixedTabNav();
        $(window).scrollTop(0);
    }, 200);

    function fixedTabNav() {
        getDistance();
        $(window).scroll(function (e) {
            var documentScrollTop = $(document).scrollTop();
            if (section1OffsetTop - documentScrollTop < navHeight + 30) {
                $('#nav .nav-box').eq(0).addClass('active').siblings().removeClass('active');
            }
            if (section2OffsetTop - documentScrollTop < navHeight + 80) {
                $('#nav .nav-box').eq(1).addClass('active').siblings().removeClass('active');
            }
            if (section3OffsetTop - documentScrollTop < navHeight + 300) {
                $('#nav .nav-box').eq(2).addClass('active').siblings().removeClass('active');
            }

            if (documentScrollTop >= navOffsetTop + 100) {
                $('#nav ul').css('border-bottom','0');
                $('#nav').css({
                    'position': 'fixed',
                    'border-bottom': '1px solid #f1f1f1'
                });
            } else {
                $('#nav ul').css('border-bottom', '1px solid #f1f1f1');
                $('#nav').css({
                    'position': 'static',
                    'border-bottom': '0'
                });
            }
        });
        $('#nav .nav-box').on('click', function () {
            flag = true;
            var _this = $(this);
            if ($(this).index() == 0) {
                $(window).scrollTop(navOffsetTop);
            }
            if ($(this).index() == 1) {
                $(window).scrollTop(section2OffsetTop - navHeight - 60);
            }
            if ($(this).index() == 2) {
                $(window).scrollTop(section3OffsetTop - navHeight - 70);
            }
            if ($(this).index() == 3) {
                $(window).scrollTop(section4OffsetTop - navHeight - 60);
            }
            _this.addClass('active').siblings().removeClass('active');
        });
    }
    // 获取验证码
    $('#send').on('click', function () {
        var value = $('input[name="mobile"]').val();
        if (breezeCommonJs.regularCheck('mobile').test(value)) {
            breezeCommonJs.getCaptcha();
        } else {
            if (value === '') {
                breezeCommonJs.toast(breezeCommonJs.regularEmpty('mobile'));
            } else {
                breezeCommonJs.toast(breezeCommonJs.regularError('mobile'));
            }
        }
    });

    // 点击展开收起问题
    $('.question-content-item').on('click', function () {
        var that = $(this);
        that.find('p').slideToggle('normal',function () {
            if($(this).is(':visible')) {
                that.addClass('active');
            } else {
                that.removeClass('active');
            }
        });
    });
    // 选择为谁投保 显示表单
    $('.insurance-for-content input').on('change', function () {
        if(parseInt($(this).val()) === 0) {
            $('.select-insurance-for-form').hide();
        } else {
            $('.select-insurance-for-form').show();
        }
    });
    //  点击问号 显示回答
    $('#show-problem-modal').on('click', function () {
        $('.problem-explain-modal').show();
    });
    $('body').on('click', function(event) {
        // IE支持 event.srcElement ， FF支持 event.target
        var evt = event.target;
        if(evt.id == 'show-problem-modal' ){
            return;// 如果是元素本身，则返回
        }
        else {
            $('.problem-explain-modal').hide(); // 如不是则隐藏元素
        }
    });

    //
    $(window).scroll(function(){
        var scrollHeight = $(document).scrollTop(),
        numTop = $(".head-info-num").offset().top,
        formAgreeTop = $('.agree-box').offset().top;
        if ( scrollHeight  >= numTop  && scrollHeight <= formAgreeTop) {
            $(".info-submit-button").show();
            $('.fixed-button').hide();
        } else {
            $(".info-submit-button").hide();
            if(scrollHeight > formAgreeTop) {
                $('.fixed-button').show();
            } else {
                $('.fixed-button').hide();
            }
        }
    });
}());