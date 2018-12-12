(function () {
    var logoItem = $(".logo-item"),     // 获取公司logo对象
        headerItem = $('.header-item'),  // 获取顶部banner对象
        submitButton = $('#submit-button'), // 提交按钮
        selectButton = $('#select-button'), // 勾选按钮
         formDetail = $('.form-detail'),     // 表单主体
        activityRulesBtn = $('#activity-rules-btn'), //活动规则
        activityUserBtn = $('#activity-user-btn'), //用户协议
        closeBtn = $(".modal-box a"); //关闭按钮


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
    $("#server .content").html('').append(renderServiceAgreement);

    // 点击活动规则按钮
    activityRulesBtn.on('click', function(){
        showModal('#rules');
    });

    // 点击服务协议按钮
    activityUserBtn.on('click', function(){
        showModal('#server');
    });

    // 点击弹窗关闭按钮
    closeBtn.on('click', function(){
        hideModal();
    });

    // 点击公司logo切换顶部banner
    logoItem.on('click', function (e) {
        var _this = $(this);
        _this.siblings().removeClass('logo-select');
        _this.addClass('logo-select');
        var clickIndex = _this.index();
        headerItem.addClass('hide');
        $('.header-item:eq('+ clickIndex + ')').removeClass('hide').show();
        $('#choose-company').val(clickIndex);
    });
    // 勾选表单切换
    selectButton.on('change', function () {
        if(selectButton.is(':checked')) {
            formDetail.show();
        }else {
            formDetail.hide();
        }
    });
    // 表单提交
    submitButton.on('click', function () {
        if(selectButton.is(':checked')) {
            var valid = true;
            // 姓名校验
            if (valid) {
                if (!breezeCommonJS.regularCheck('name').test($('input[id="name"]').val())) {
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
            if(valid) {
                formAjax()
            }
        }else {
            formAjax()
        }
    });
    // ajax方法
    function formAjax() {
        $.ajax({
            type: 'post',
            url: '/api/local/policy_checker/v2',
            data: breezeCommonJS.formatFormData('#form-box'),
            success: function (response) {
                if(response.data.status === 0 ){

                }else {
                    window.location.href = response.data.redirect_url;
                }
            },
            error: function () {
                salert('操作失败，请稍后重试...');
            }
        })
    }
}());