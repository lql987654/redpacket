(function () {
    var tip = {
        a :'请选择性别',
        b: '请阅读《活动规则》和《服务协议》并确认'
    };

    var formSubmitButton = $("#form-submit"),  //  提交表单按钮
        activityRulesBtn = $('#activity-rules-btn'),
        closeButton = $('.close'),
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
    }

    // 弹窗隐藏
    function hideModal () {
        $('#mask').hide();
        $('.modal , #popup-box, #popup-new-box').hide();
        if (!breezeCommonJS.isPc()) {
            breezeCommonJS.recoverBodyScroll();
        }
    }

    var buttonStatus = true; // 按钮状态
    // 添加按钮状态
    function addButtonAnimation() {
        buttonStatus = false;
        formSubmitButton.attr('data-text', formSubmitButton.text());
        formSubmitButton.text('提交中...').addClass('loading');
    }

    // 重置按钮状态
    function resetButtonAnimation() {
        buttonStatus = true;
        formSubmitButton.text(formSubmitButton.attr('data-text')).removeClass('loading');
    }

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

    // 手机号 失去焦点/输入完成 显示身份证
    var globalMobile = '';
    $('input[name="mobile"]').on('keyup blur', function(){
        var _this = $(this);
        var reqData = {
            idcardElement: '#input-idCard-box',
            jwtTokenElement: 'input[name="jwt_token"]',
            data: {
                mobile: $('input[name="mobile"]').val(),
                channel: $('input[name="channel"]').val(),
                subchannel: $('input[name="subchannel"]').val(),
                theme_link: $('input[name="theme_link"]').val(),
                handler_path: $('input[name="handler_path"]').val(),
                timestamp: $('input[name="timestamp"]').val()
            }
        };
        if (globalMobile !== _this.val() && breezeCommonJS.regularCheck('mobile').test(reqData.data.mobile)) {
            globalMobile = _this.val();
            breezeCommonJS.phoneBlurShowIdcard(reqData);
        } else {
            return false;
        }
    });

    // 验证码获取状态
    var isPAJKCaptcha = true;
    var pageMethod = {
        getCaptcha: function (options) {
            var url = options.url || '/gen/phone_captcha',
                data = options.data || '',
                target = options.target || null,
                callback = options.callback || function(){};

            $.ajax({
                type: 'get',
                url: url,
                data: data,
                success: function(response){
                    if(response.error_code === 0)
                    {
                        isPAJKCaptcha = true;
                        breezeCommonJS.countDown(target);
                        callback();
                    }
                    else if (response.error_code == 599) {
                        breezeCommonJS.getCaptcha({
                            data: {
                                phone: $('input[name="mobile"]').val(),
                                r: $('input[name="r"]').val()
                            },
                            target: '#send',
                            callback: function () {
                                isPAJKCaptcha = false;
                            }
                        });
                    }
                    else
                    {
                        salert(response.error_msg);
                    }
                },
                error: function(){
                    salert('网络繁忙，请稍后重试...');
                }
            });
        }
    }
    //获取验证码
    $("#send").on('click', function() {
        if (!breezeCommonJS.regularCheck('mobile').test($('input[name="mobile"]').val())) {
            if ($('input[name="mobile"]').val() === '') {
                salert(breezeCommonJS.regularEmpty('mobile'));
            } else {
                salert(breezeCommonJS.regularError('mobile'));
            }
        } else {
            pageMethod.getCaptcha({
                url: '/gen/pinganjiankang_captcha',
                data: {
                    phone: $('input[name="mobile"]').val(),
                    r: $('input[name="r"]').val()
                },
                target: '#send'
            });
        }

    });

    // 校验验证码
    $('input[name="captcha"]').on('blur keyup', function(){
        if (!isPAJKCaptcha) {
            if (breezeCommonJS.regularCheck('captcha').test($('input[name="captcha"]').val())) {
                breezeCommonJS.verifyCaptcha({
                    data: {
                        phone: $('input[name="mobile"]').val(),
                        captcha: $('input[name="captcha"]').val()
                    },
                    target: 'input[name="token"]'
                });
            }
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

        // 性别校验
        if (valid){
            var sexFlag = false;
            $('input[name="sex"]').each(function(index, item) {
                if ($(item).is(':checked')) {
                    sexFlag = true
                }
            });
            if (!sexFlag) {
                valid = false;
                salert(tips.b);
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
        if (valid) {
            if (isPAJKCaptcha) {
                if (!/^[0-9]{6}$/.test($('input[name="captcha"]').val())) {
                    valid = false;
                    if ($('input[name="captcha"]').val() === '') {
                        salert(breezeCommonJS.regularEmpty('captcha'));
                    } else {
                        salert(breezeCommonJS.regularError('captcha'));
                    }
                    return false;
                }
            } else {
                if (!breezeCommonJS.regularCheck('captcha').test($('input[name="captcha"]').val())) {
                    valid = false;
                    if ($('input[name="captcha"]').val() === '') {
                        salert(breezeCommonJS.regularEmpty('captcha'));
                    } else {
                        salert(breezeCommonJS.regularError('captcha'));
                    }
                    return false;
                }
            }

        }

        // 生日校验
        if(valid) {
            if (!breezeCommonJS.regularCheck('birth').test($('input[name="birth"]').val())) {
                valid = false;
                if ($('input[name="birth"]').val() === '') {
                    salert(breezeCommonJS.regularEmpty('birth'));
                } else {
                    salert(breezeCommonJS.regularError('birth'));
                }
                return false;
            }
        }
        // 是否勾选复选框
        if (valid) {
            if (!$('#agree-button').is(':checked')) {
                valid = false;
                salert("请先阅读活动规则和用户协议并勾选确认");
                return false;
            }
        }

        // 校验完成
        if (valid) {
            showModal('#success-box');

        }
    });

    $('#success-button, #success-close').on('click',function (object) {
        if(buttonStatus) {
            addButtonAnimation();
            //非 juzhuang的统计为false
            var tongjiStatus = false,
                tongjiName = '';
            if( $("#tongji").val() != '' || $("#tongji").val().length > 0){
                tongjiName = $("#tongji").val();
                if(tongjiName == 'juzhang') {
                    tongjiStatus = true;
                }
            }
            $("#action_failed").val('0');
            var formData = breezeCommonJS.formatFormData('#form-box');
            // 开始授权
            modalAccredit.tryAuthorize({
                data: formData,
                url: '/api/local/auth_policy_checker/paandpazj/v1',
                resetButtonCallback: function(){
                    resetButtonAnimation();
                },
                tongjiCallback: function (callback) {
                    breezeTongji.chooseFunction(tongjiName, callback)
                },
                type: tongjiStatus
            });
        }
    })
}());