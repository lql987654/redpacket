(function () {
    //  提示
    var tip = {
        a: '您还有题目尚未作答',
        b :'请选择性别',
        c: '请阅读《活动规则》和《服务协议》并确认'
    };
    var sendButton = $('.send'), // 发送验证码按钮
        formSubmitButton = $("#form-submit"),  //  提交表单按钮
        activityRulesBtn = $('#activity-rules-btn'),
        closeButton = $('.close'),
        captchaInput = $('#captcha'), // 验证码输入框
        mobileInput = $('#mobile'), // 手机号输入框
        activityUserBtn = $('#activity-user-btn');

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

    // 用户协议
    var renderServiceAgreement = '';
    $.each(breezeCommonJS.HNServiceAgreement, function(index, item){
        renderServiceAgreement += '<p>' + item + '<p>';
    });
    $("#activity-user-box .content").html('').append(renderServiceAgreement);

    // 点击活动规则按钮
    activityRulesBtn.on('click', function(){
        showModal('#activity-rules-box');
    });

    // 点击服务协议按钮
    activityUserBtn.on('click', function(){
        showModal('#activity-user-box');
    });

    // 点击弹窗关闭按钮
    closeButton.on('click', function(){
        hideModal();
    });

    // 点击发送验证码按钮
    sendButton.on('click', function () {
        var options = {
            target:sendButton,
            url: '/gen/phone_tk_captcha',
            data:{
                phone: mobileInput,
                r: $('#random-top').val()
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
    captchaInput.on('blur keyup', function(){
        var options = {
            target: $('#token'),
            data: {
                phone:mobileInput,
                captcha: captchaInput
            }
        };

        if (breezeCommonJS.regularCheck('mobile').test(options.data.phone)
            && breezeCommonJS.regularCheck('captcha').test(options.data.captcha)) {
            breezeCommonJS.verifyCaptcha(options);
        }

    });

    // 表单提交
    formSubmitButton.on('click', function(){
        var valid = true;

        // 姓名校验
        if (valid) {
            if (!breezeCommonJS.regularCheck('name').test($('input[name="name"]').val())) {
                valid = false;
                if ($('input[name="name"]').val() === '') {
                    salert(breezeCommonJS.regularEmpty('name'));
                } else {
                    salert(breezeCommonJS.regularError('name'));
                }
                return false;
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
        // 身份证号码是否校验
        if (valid) {
            if (!breezeCommonJS.regularCheck('idCard').test($('input[name="idCard"]').val())) {
                valid = false;
                if ($('input[name="idCard"]').val() === '') {
                    salert(breezeCommonJS.regularEmpty('idCard'));
                } else {
                    salert(breezeCommonJS.regularError('idCard'));
                }
                return false;
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
            console.log('校验完成')
        }
    });

}());