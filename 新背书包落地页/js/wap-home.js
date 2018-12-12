$(function () {
    // 设置遮罩层高度
    $('#mask').height($(document).height() > $(window).height()
        ? $(document).height()
        : $(window).height());

    //  关闭按钮
    $(".result-modal-close").on('click',function(){
        $.ajax({
            type: 'post',
            url: '/activity/pinganjiankang_tongji',
            data: {
                subchannel: $("input[name='subchannel']").val()
            },
            success: function(response) {
                if( $("input[name='theme_link']").val() === ''){
                    $('.content-box, .mask').css('display', 'none');
                    // window.history.go(-1);
                }else {
                    window.location.href = $("input[name='theme_link']").val();
                }
            },
            error: function(){
                window.location.href = $("input[name='theme_link']").val()
            }
        });
    });
    //  表单提交
    $('#submit-button').on('click', function (object) {
        var valid = true;
        // 校验身份证号码
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
        // 校验验证码
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
        if(valid) {
            $.ajax({
                type: 'post',
                url: '/api/local/auth_policy_checker/v3',
                data: breezeCommonJS.formatFormData('#form-box'),
                success: function(response) {
                    window.location.href = $("input[name='download_url']").val()
                },
                error: function(){
                    window.location.href = $("input[name='download_url']").val()
                }
            });
        }
    })

}());