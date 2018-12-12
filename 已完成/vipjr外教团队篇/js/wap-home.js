(function(){

    // 提示语
    var tips = {
        a: '请选择孩子年龄'
    };

    var submitButton = $('#form-submit'),  //  免费领取按钮
        sendButton = $('#send'), // 发送验证码按钮
        captchaInput = $('#captcha'), // 验证码输入框
        mobileInput = $('#mobile'); // 手机号输入框

    // 点击锚点 返回页面顶部
    $(".getFree").on("click",function(){
        var newTop=parseFloat($('#form-wrap').offset().top);
        $("html,body").animate({'scrollTop': newTop},200);
    });
    $('input[id="mobile"]').blur(function () {
        if (breezeCommonJS.regularCheck('mobile').test($('input[id="mobile"]').val())) {
            $('#phone-input').css('border' ,'1px solid rgb(106, 196, 81)')
        }
    });
    $('input[name="captcha"]').blur(function () {
        if (breezeCommonJS.regularCheck("captcha").test($("input[name='captcha']").val()) && $('#token').val() !== '' ) {
            $('#captcha-box').css('border', '1px solid rgb(106, 196, 81)');
        }
    });
    $('input[name="child-name"]').blur(function () {
        if($('input[name="child-name"]').val() != '') {
            if (breezeCommonJS.regularCheck('name').test($('input[name="child-name"]').val())) {
                $('#name-box').css('border', '1px solid rgb(106, 196, 81)');
            }
        }
    });
    $('#child-age').change(function () {
        if($(this).children('option:selected').val() != '学员年龄'){
            $('#child-age').css({
                'color' : '#333',
                'border': '1px solid rgb(106, 196, 81)'
            });
        }else {
            $('#child-age').css({
                'color' : '#333',
                'border': '1px solid #bfbfbf'
            });
        }
    });
    // 点击发送验证码按钮
    sendButton.on('click', function () {
        var options = {
            target:sendButton,
            url: '/gen/phone_vipjr_captcha',
            data:{
                phone: mobileInput.val(),
                r: $('#random').val()
            }
        };
        if( breezeCommonJS.regularCheck('mobile').test(options.data.phone) ) {
            breezeCommonJS.getCaptcha(options);
        } else if (options.data.phone === '') {
            salert(breezeCommonJS.regularEmpty('mobile'));
        } else {
            salert(breezeCommonJS.regularError('mobile'));
        }
    });

    // 失去焦点验证验证码是否正确
    captchaInput.on('blur', function(){
        var options = {
            target: $('#token'),
            data: {
                phone: mobileInput.val(),
                captcha: captchaInput.val()
            }
        };

        if (breezeCommonJS.regularCheck('mobile').test(options.data.phone)
            && breezeCommonJS.regularCheck('captcha').test(options.data.captcha)) {
            breezeCommonJS.verifyCaptcha(options);
        }

    });
    // 表单提交
    submitButton.on('click', function(){
        var valid = true;

        // 手机号校验校验
        if (valid) {
            if (!breezeCommonJS.regularCheck('mobile').test($('input[id="mobile"]').val())) {
                valid = false;
                if ($('input[name="mobile"]').val() === '') {
                    salert(breezeCommonJS.regularEmpty('mobile'));
                } else {
                    salert(breezeCommonJS.regularError('mobile'));
                }
                return false;
            }
        }
        // 验证码校验
        if(valid){
            if (!breezeCommonJS.regularCheck("captcha").test($("input[name='captcha']").val())) {
                valid = false;
                salert(breezeCommonJS.regularError("captcha"));
                return false;
            }
            if ($('#token').val() === '') {
                valid = false;
                salert(breezeCommonJS.regularError("captcha"));
                return false;
            }
        }
        if ($("select[name='child-age'] option:selected").val()=="学员年龄") {
            valid = false;
            salert(tips.a);
            return false;
        }

        if(valid) {
            if($('input[name="child-name"]').val() != ''){
                if (!breezeCommonJS.regularCheck('name').test($('input[name="child-name"]').val())) {
                    valid = false;
                    if ($('input[name="child-name"]').val() === '') {
                        salert(breezeCommonJS.regularEmpty('name'));
                    } else {
                        salert(breezeCommonJS.regularError('name'));
                    }
                    return false;
                }
            }
        }
        // 校验完成
        if (valid) {

            $('#form-box').submit();
        }
    });

})();
