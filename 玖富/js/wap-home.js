(function () {
    var formSubmitButton = $("#form-submit"),  //  提交表单按钮
        activityRulesBtn = $('#activity-rules-btn'),
        closeButton = $('.close');

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

    // 点击投保须知按钮
    activityRulesBtn.on('click', function(){
        showModal('#activity-rules-box');
    });


    // 点击弹窗关闭按钮
    closeButton.on('click', function(){
        hideModal();
    });

    //获取验证码
    $("#send").on('click', function() {
        if (!breezeCommonJS.regularCheck('mobile').test($('input[name="mobile"]').val())) {
            if ($('input[name="mobile"]').val() === '') {
                salert(breezeCommonJS.regularEmpty('mobile'));
            } else {
                salert(breezeCommonJS.regularError('mobile'));
            }
        }else {
            breezeCommonJS.countDown($('#send'));
            $.ajax({
                type: 'get',
                url: '/gift_insurance/sms_code/' + $('input[name="mobile"]').val(),
                success: function(response){
                    console.log(response)
                },
                error: function(){
                    salert('网络繁忙，请稍后重试...');
                }
            });
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
        if (valid) {
            if (!/^[0-9]{6}$/.test($('input[name="captcha"]').val())) {
                valid = false;
                if ($('input[name="captcha"]').val() === '') {
                    salert(breezeCommonJS.regularEmpty('captcha'));
                } else {
                    salert(breezeCommonJS.regularError('captcha'));
                }
                return false;
            }
        }

        // 身份证校验
        if(valid) {
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
                salert("请先阅读保险条款和投保须知并勾选确认");
                return false;
            }
        }

        // 校验完成
        if (valid) {
            $.ajax({
                type: 'post',
                url: '/gift_insurance/receive',
                data: {
                    'code' : $('input[name="captcha"]').val(),
                    'person': {
                        'idCardNo': $('input[name="idCard"]').val(),
                        'name': $('input[name="name"]').val(),
                        'mobile': $('input[name="mobile"]').val()
                    },
                    'productId': 'string',
                    'styleId': 'string'
                },
                success: function(response){
                    if(response.success) {
                        console.log(response);
                    }else {
                        salert(response.message);
                    }
                },
                error: function(){
                    salert('网络繁忙，请稍后重试...');
                }
            });
        }
    });
}());