(function () {
    // 提示语
    var tips = {
        a: '请阅读投保须知并勾选确认',
        b: '请选择孩子年龄',
        c: '请选择设备',
        d: '请选择是否领取',
        e: '请选择是否拥有设备'
    };

    var selectDevice = $('#select-device'),  // 选择设备按钮
        selectAge = $('#select-age'),  // 选择年龄按钮
        userRulesbutton = $('#activity-rules-button'),  // 用户协议按钮
        userTipButton = $('#user-tip-button'),  // 用户提示按钮
        serviceSecretButton = $('#activity-secret-button'),  //  隐私策略按钮
        submitButton = $('#submit-button'),  //  免费领取按钮
        closeButton = $('.close ,.close-btn ,.popup-new-close'),  //  关闭弹窗按钮
        sendButton = $('#send'), // 发送验证码按钮
        captchaInput = $('#captcha'), // 验证码输入框
        mobileInput = $('#mobile'), // 手机号输入框
        childAgeButton = $('#child-age-content p'), // 孩子年龄选项
        deviceButton = $('#device-content p'); // 设备选项


    // 投保须知
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
    selectDevice.on('click', function(){
        showModal('#modal-device');
    });
    // 孩子年龄 弹窗
    selectAge.on('click', function () {
        showModal('#modal-child-age');
    });
    // 点击用户协议按钮
    userRulesbutton.on('click', function(){
        showModal('#activity-rules-box');
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

    //页底锚点慢慢显示
    $(window).scroll(function() {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        if (t > 300) {
            $(".float-btn-bar-box").css('display', 'block');
        } else {
            $(".float-btn-bar-box").css('display', 'none');
        }
    });
    // 点击锚点 返回页面顶部
    $(".float-btn-bar-box").on("click",function(){
        var newTop=parseFloat($('.title').offset().top);
        $("html,body").animate({'scrollTop': newTop},200);
    });

    // 选择设备
    deviceButton.on('click', function () {
        selectDevice.text($(this).attr('data-name'));
        $('#device-hidden-input').val($(this).attr('data-value'));
        hideModal();
        showOtherInputFunc();
    });
    //  选择年龄
    childAgeButton.on('click', function () {
        selectAge.text($(this).attr('data-name'));
        $('#age-hidden-input').val($(this).attr('data-value'));
        hideModal();
        showOtherInputFunc();
    });
    $('input[name="name"], input[name="mobile"]').on('blur keyup', function (object) {
        showOtherInputFunc();
    });
    // 表单提交
    submitButton.on('click', function(){
        var valid = true;

        // 生日校验
        if(valid){
            if ($('input[name="age"]').val() === '') {
                valid = false;
                salert(tips.b);
                return false;
            }
        }
        // 设备校验
        if(valid){
            if ($('input[name="electronic-equipment"]').val() === '') {
                valid = false;
                salert(tips.c);
                return false;
            }
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
            $.ajax({
                url: '/api/local/vipkid/submit',
                type: 'post',
                async: false,
                data: formData,
                success: function(response){
                    var status = response.data.alert_status;

                    $('#form-box-forward').append(
                        '<input id="req_encrypt" type="hidden" name="req_encrypt"' +
                        'value="'+ response.data.req_encrypt +'"/>');

                    if(status==0){
                        $("#only-welfare-VIPKID").css('display','block');
                    }else if(status ==1){
                        $("#only-welfare-lose").css('display','block');
                    }else if(status==2){
                        $("#both-success").css('display','block');
                    }else if(status==3){
                        $("#both-one-lose").css('display','block');
                    }else if(status ==4){
                        $("#only-welfare-success").css('display','block');
                    }
                },
                error: function(){
                    salert('操作失败，请稍后重试...');
                }
            });
        }
    });

    function  showOtherInputFunc() {
        var showOtherInput = true;
        // 生日校验
        if(showOtherInput){
            if ($('input[name="age"]').val() === '') {
                showOtherInput = false;
                return false;
            }
        }
        // 设备校验
        if(showOtherInput){
            if ($('input[name="electronic-equipment"]').val() === '') {
                showOtherInput = false;
                return false;
            }
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
        if (showOtherInput) {
            $('.input-box-captcha , .input-box-idCard').css('display', 'block');
        }
    }

    $('.success-btn input').on('click',function () {
        $('#form-box').submit();
    })
}());