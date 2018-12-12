(function () {
    //  提示
    var tip = {
        a: '您还有题目尚未作答',
        b :'请选择性别',
        c: '请阅读《活动规则》和《服务协议》并确认'
    };
    var questionnaireSubmitButton = $('#questionnaire-submit-button'), // 提交问卷按钮
        sendButton = $('.send'), // 发送验证码按钮
        captchaInput = $('input[name="captcha"]'),
        formSubmitButton = $(".form-submit-button"),  //  提交表单按钮
        activityRulesBtn = $('.activity-rules-btn'),
        closeButton = $('.close'),
        formClose = $('.wap-form-close'),
        activityUserBtn = $('.activity-user-btn');

    // 按钮状态
    var buttonStatus = true;
    // 添加按钮状态
    function addButtonAnimation(buttonId) {
        buttonStatus = false;
        buttonId.attr('data-text', buttonId.text());
        buttonId.text('提交中...').addClass('loading');
    }

    // 重置按钮状态
    function resetButtonAnimation(buttonId) {
        buttonStatus = true;
        buttonId.text(buttonId.attr('data-text')).removeClass('loading');
    }

    // 弹窗显示
    function showModal (id_name,id_mask) {
        $(id_mask).show();
        $(id_mask).height($(document).height() > $(window).height()
            ? $(document).height()
            : $(window).height());
        $(id_name).show();
        if (!breezeCommonJS.isPc()) {
            breezeCommonJS.forbidBodyScroll();
        } else {
            $('.modal').css('top', '2rem');
        }
    }

    // 弹窗隐藏
    function hideModal () {
        $('#mask').hide();
        $('.modal').hide();
        if (!breezeCommonJS.isPc()) {
            breezeCommonJS.recoverBodyScroll();
        }
    }

    // 用户协议
    var renderServiceAgreement = '';
    $.each(breezeCommonJS.HNServiceAgreement, function(index, item){
        renderServiceAgreement += '<p>' + item + '<p>';
    });
    $("#activity-user-box .content").html('').append(renderServiceAgreement);

    // 点击活动规则按钮
    activityRulesBtn.on('click', function(){
        showModal('#activity-rules-box', '#mask');
    });

    // 点击服务协议按钮
    activityUserBtn.on('click', function(){
        showModal('#activity-user-box', '#mask');
    });

    // 点击弹窗关闭按钮
    closeButton.on('click', function(){
        hideModal();
    });
    //  关闭表单窗口
    formClose.on('click', function () {
       $('#mask-forward').hide();
        $('.modal-box').hide();
        if (!breezeCommonJS.isPc()) {
            breezeCommonJS.recoverBodyScroll();
        }
    });
    // 点击发送验证码按钮
    sendButton.on('click', function () {
        var inputMobileVal = $(this).closest('form').find('input[name="mobile"]').val();
        var options = {
            target:sendButton,
            url: '/gen/phone_tk_captcha',
            data:{
                phone: inputMobileVal,
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
        var token = $(this).closest('form').find('input[name="token"]'),
            mobileInput = $(this).closest('form').find('input[name="mobile"]').val(),
            captchaInput = $(this).closest('form').find('input[name="captcha"]').val();
        var options = {
            target: token,
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

    var formType;
    questionnaireSubmitButton.on('click', function () {
        var valid = true;

        if (valid) {
            $('.questionnaire-item', '.questionnaire-box').each(function (index, item) {
                var _valid = false;
                $('input', item).each(function (_index, _item) {
                    if ($(_item).is(':checked')) {
                        _valid = true;
                    }
                });
                if (!_valid) {
                    valid = false;
                    salert(tip.a);
                    return false;
                }
            });
        }
        if(valid) {
            var array = [0,1];
            var b = Math.floor((Math.random()*array.length));
            if(b === 0) {
                formType = 0;
                showModal('#modal-box-idCard', '#mask-forward');
            }else if (b === 1) {
                formType = 1;
                showModal('#modal-box-normal', '#mask-forward');
            }
            // $.ajax({
            //     type: 'post',
            //     url: '/api/local/policy_checker/v4',
            //     data: breezeCommonJS.formatFormData('#form-box'),
            //     beforeSend: function () {
            //         addButtonAnimation(questionnaireSubmitButton);
            //     },
            //     success: function () {
            //
            //     }
            // });
        }
    });

    //  表单提交
    formSubmitButton.on('click', function () {
        var self = $(this),
            valid = true;
        var nameValue =  self.prev().children().find('input[name="name"]'),
            mobileValue =  self.prev().children().find('input[name="mobile"]'),
            captchaValue =  self.prev().children().find('input[name="captcha"]'),
            tokenValue =  self.prev().children().find('input[name="token"]'),
            agreeButton =  self.prev().children().find('#agree-button');

        // 姓名校验
        if (valid) {
            if (!breezeCommonJS.regularCheck('name').test(nameValue.val())) {
                valid = false;
                if (nameValue.val() === '') {
                    salert(breezeCommonJS.regularEmpty('name'));
                } else {
                    salert(breezeCommonJS.regularError('name'));
                }
                return false;
            }
        }

        if(formType == 1) {
            var sexValue =  self.prev().children().find('input[name="sex"]'),
                 birthValue =  self.prev().children().find('input[name="birth"]');

            // 性别校验
            if (valid) {
                var _valid = false;
                $(sexValue).each(function(index, item){
                    if ($(item).is(':checked')) {
                        _valid = true;
                    }
                });
                if (!_valid) {
                    valid = false;
                    salert(tip.b);
                    return false;
                }
            }

            // 生日校验
            if (!breezeCommonJS.regularCheck('birth').test(birthValue.val())) {
                valid = false;
                if (birthValue.val() === '') {
                    salert(breezeCommonJS.regularEmpty('birth'));
                } else {
                    salert(breezeCommonJS.regularError('birth'));
                }
                return false;
            }
        }
        // 手机号码校验
        if (valid) {
            if (!breezeCommonJS.regularCheck('mobile').test(mobileValue.val())) {
                valid = false;
                if (mobileValue.val() === '') {
                    salert(breezeCommonJS.regularEmpty('mobile'));
                } else {
                    salert(breezeCommonJS.regularError('mobile'));
                }
                return false;
            }
        }

        // 验证码校验
        if(valid){
            if (!breezeCommonJS.regularCheck("captcha").test(captchaValue.val())) {
                valid = false;
                salert(breezeCommonJS.regularError("captcha"));
                return false;
            }
            if (tokenValue.val() === '') {
                valid = false;
                salert(breezeCommonJS.regularError("captcha"));
                return false;
            }
        }
        if(formType === 0){
            var idCardValue =  self.prev().children().find('input[name="idCard"]');
            // 身份证号码是否校验
            if (valid) {
                if (!breezeCommonJS.regularCheck('idCard').test(idCardValue.val())) {
                    valid = false;
                    if (idCardValue.val() === '') {
                        salert(breezeCommonJS.regularEmpty('idCard'));
                    } else {
                        salert(breezeCommonJS.regularError('idCard'));
                    }
                    return false;
                }
            }
        }

        // 是否勾选复选框
        if (valid) {
            if (!agreeButton.is(':checked')) {
                valid = false;
                salert(tip.c);
                return false;
            }
        }
        if(valid) {
            console.log('提交成功');
        }
    })
}());