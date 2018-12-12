(function () {
    // 提示语
    var tips = {
        a: '请阅读投保须知并勾选确认'
    };

    var userRulesbutton = $('#activity-user-btn'),  // 用户协议按钮
        userTipButton = $('#user-tip-button'),  // 用户提示按钮
        serviceSecretButton = $('#activity-secret-button'),  //  隐私策略按钮
        submitButton = $('#submit-button'),  //  免费领取按钮
        closeButton = $('.close ,.close-btn ,.popup-new-close'),  //  关闭弹窗按钮
        sendButton = $('#send'), // 发送验证码按钮
        captchaInput = $('#captcha'), // 验证码输入框
        mobileInput = $('#mobile'); // 手机号输入框

    // 投保须知
    var renderServiceAgreement = '';
    $.each(breezeCommonJS.HNServiceAgreement, function(index, item){
        renderServiceAgreement += '<p>' + item + '<p>';
    });
    $('.user-content').html('').append(renderServiceAgreement);

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

    // 点击用户协议按钮
    userRulesbutton.on('click', function(){
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
            url: '/gen/phone_vipkid_captcha',
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

    $('.item-content label').on('click', function (object) {
        setTimeout(function () {
            showOtherInputFunc();
        },300);
    });
    $('input[name="name"], input[name="mobile"]').on('blur keyup', function (object) {
        showOtherInputFunc();
    });
    // 表单提交
    submitButton.on('click', function(){
        var valid = true;
        var params = {};
        if (valid) {
            $('.questionnaire-item', '.questionnaire-box').each(function (index, item) {
                var _valid = false;
                $('input', item).each(function (_index, _item) {
                    if ($(_item).is(':checked')) {
                        _valid = true;
                        params[$(_item).attr('name')] = $(_item).val();
                    }
                });
                if (!_valid) {
                    valid = false;
                    salert('请选择尚未作答的题目');
                    return false;
                }
            });
        }
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

    function  showOtherInputFunc() {
        var showOtherInput = true;
        //  题目校验
        if (showOtherInput) {
            $('.questionnaire-item', '.questionnaire-box').each(function (index, item) {
                var _valid = false;
                $('input', item).each(function (_index, _item) {
                    if ($(_item).is(':checked')) {
                        _valid = true;
                    }
                });
                if (!_valid) {
                    showOtherInput = false;
                    return false;
                }
            });
        }
        // 姓名校验
        if (showOtherInput) {
            if (!breezeCommonJS.regularCheck('name').test($('input[name="name"]').val())) {
                showOtherInput = false;
                return false;
            }
        }
        // 手机号码校验
        if (showOtherInput) {
            if (!breezeCommonJS.regularCheck('mobile').test($('input[name="mobile"]').val())) {
                showOtherInput = false;
                return false;
            }
        }
        if(showOtherInput) {
            $('.form-title').show().addClass('show-title');
            $('#input-box-idCard, #input-box-captcha').removeClass('hide');
        }
    }

    // 选项卡切换
    var tag = $('#tag-box p');
    var content = $('#content-box .detail-item');
    //aBtn是一组元素，所以需要用到for循环
    for(var i = 0;i < tag.length; i++){
        tag[i].index = i;
        tag[i].onclick = function(){
            for(var i=0;i<tag.length;i++){
                tag[i].className = '';
                content[i].style.display = 'none';
            }
            //给当前的按钮和div添加样式
            this.className = 'active';
            content[this.index].style.display = 'block';
        };
    }
}());