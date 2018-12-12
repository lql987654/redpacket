(function(){
    var showCaptcha = $('#show-captcha').val() == 'True' ? true : false // 判断是否显示验证码
    // 提示语
    var tips = {
        a: '请阅读活动规则 用户协议和隐私策略并勾选确认',
        b: '请选择孩子年龄',
        c: '请选择设备',
        d: '请选择是否领取',
        e: '请选择是否拥有设备'
    };

    var activityDeviceBtn = $('#activity-device-btn'),  // 需要设备按钮
        userRulesbutton = $('#activity-user-rules-button'),  // 用户协议按钮
        userTipButton = $('#user-tip-button'),  // 用户提示按钮
        serviceSecretButton = $('#activity-secret-button'),  //  隐私策略按钮
        submitButton = $('#submit-button'),  //  免费领取按钮
        closeButton = $('.close ,.close-btn ,.popup-new-close'),  //  关闭弹窗按钮
        sendButton = $('#send'), // 发送验证码按钮
        captchaInput = $('#captcha'), // 验证码输入框
        mobileInput = $('#mobile'), // 手机号输入框
        childAgeInput = $('#age'), // 孩子年龄输入框
        childAgeButton = $('#child-age-content p'), // 孩子年龄选项
        deviceButton = $('#device-content p'), // 设备选项
        deviceInput = $('#electronic-equipment'), // 孩子年龄输入框
        pageType = $('#page_type'); // 页面类型

    // 服务协议
    var renderServiceAgreement = '';
    $.each(breezeCommonJS.HNServiceAgreement, function(index, item){
        renderServiceAgreement += '<p>' + item + '<p>';
    });
    $('#modal-service-agreement .rules-content').html('').append(renderServiceAgreement);

    // 弹窗显示
    function showModal (id_name) {
        $('#mask').show();
        $('#mask').height($(document).height() > $(window).height()
            ? $(document).height()
            : $(window).height());
        $(id_name).show();
        if (!breezeCommonJS.isPc()) {
            breezeCommonJS.forbidBodyScroll();
        } else {
            $('.modal').css('top', '2rem');
        }
    };

    // 弹窗隐藏
    function hideModal () {
        $('#mask').hide();
        $('.modal , #popup-box, #popup-new-box').hide();
        if (!breezeCommonJS.isPc()) {
            breezeCommonJS.recoverBodyScroll();
        }
    };

    // 点击需要设备按钮
    activityDeviceBtn.on('click', function(){
        showModal('#device-modal');
    });

    // 点击用户协议按钮
    userRulesbutton.on('click', function(){
        showModal('#modal-user-rules');
    });
    // 点击用户提示按钮
    userTipButton.on('click', function(){
        showModal('#modal-user-tip');
    });
    // 点击隐私策略按钮
    serviceSecretButton.on('click', function(){
        showModal('#modal-secret-rules');
    });

    // 点击弹窗关闭按钮
    closeButton.on('click', function(){
        hideModal();
    });
    // 点击发送验证码按钮
    sendButton.on('click', function () {
        var options = {
            target:sendButton,
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

    //页底锚点慢慢显示
    $(window).scroll(function() {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        if (t > 300) {
            $(".fixed-footer-btn").css('display', 'block');
        } else {
            $(".fixed-footer-btn").css('display', 'none');
        }
    });
    // 点击锚点 返回页面顶部
    $(".fixed-footer-btn").on("click",function(){
        var newTop=parseFloat($('.form-container').offset().top);
        $("html,body").animate({'scrollTop': newTop},200);
    });

    // 设备 弹窗
    deviceInput.on('click', function () {
        showModal('#modal-device');
        $('input').blur();
    });
    deviceButton.on('click', function () {
        deviceInput.val($(this).attr('data-name'));
        $('#device-hidden-input').val($(this).attr('data-value'));
        hideModal();
    });
    // 孩子年龄 弹窗
    childAgeInput.on('click', function () {
        showModal('#modal-child-age');
        $('input').blur();
    });
    childAgeButton.on('click', function () {
        childAgeInput.val($(this).attr('data-name'));
        $('#age-hidden-input').val($(this).attr('data-value'));
        hideModal();
    });
    // 表单提交
    submitButton.on('click', function(){
        var valid = true;

        if(pageType.val() === 'A') {
            // 设备校验
            if(valid){
                if ($('input[name="electronic-equipment"]').val() === '') {
                    valid = false;
                    salert(tips.c);
                    return false;
                }
            }
        }
        // 手机号码校验
        if (valid) {
            if (!breezeCommonJS.regularCheck('mobile').test($('input[name="mobile"]').val())) {
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
            if(showCaptcha) {
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
        }

        // 生日校验
        if(valid){
            if ($('input[name="age"]').val() === '') {
                valid = false;
                salert(tips.b);
                return false;
            }
        }
        if(pageType.val() === 'B') {
            // 是否有设备
            if (valid) {
                var _valid = false;
                $('input[name="electronic-equipment"]').each(function(index, item){
                    if ($(item).is(':checked')) {
                        _valid = true;
                    }
                });
                if (!_valid) {
                    valid = false;
                    salert(tips.e);
                    return false;
                }
            }
        }

        // 是否勾选复选框
        if (valid) {
            if (!$('#agree-button').is(':checked')) {
                valid = false;
                salert(tips.a);
                return false;
            }
        }

        // 校验完成
        if (valid) {
            $.ajax({
                type: 'post',
                url: window.location.href,
                data: breezeCommonJS.formatFormData('#form-box'),
                success: function (response) {
                    if(response.status === 0 ){
                        window.location.href = response.target_link;
                    } else if(response.status === 1) {
                        showModal('#popup-new-box');
                    }
                },
                error: function () {
                    salert('网络繁忙，请稍后重试...');
                }
            });
        }
    });

})();
