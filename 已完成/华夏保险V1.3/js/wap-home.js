$(function(){
    //按钮变量
    var activityRulesBtn = $('#activity-rules-btn'), //活动规则
        activityUserBtn = $('#activity-user-btn'), //用户协议
        activityInsuranceButton = $('#activity-insurance-button'), //用户协议
        submitBtn = $('#form-submit'), //表单提交按钮
        closeBtn = $(".close-button"); //关闭按钮

    // 提示语
    var tips = {
        a: '请阅读活动规则和用户协议并勾选确认',
        b: '请选择性别'
    };

    // 按钮状态
    var buttonStatus = true;

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
        showModal('#modal-activity-rules');
    });

    // 点击活动规则按钮
    activityInsuranceButton.on('click', function(){
        showModal('#modal-insurance-detail');
    });

    // 点击服务协议按钮
    activityUserBtn.on('click', function(){
        showModal('#modal-service-agreement');
    });

    // 点击弹窗关闭按钮
    closeBtn.on('click', function(){
        hideModal();
    });


    // 提交表单
    submitBtn.on('click', function(e){

        var valid = true;

        // 姓名校验
        if (valid) {
            if (!breezeCommonJS.regularCheck('name').test($('input[id="name-child"]').val())) {
                valid = false;
                if ($('input[name="name-child"]').val() === '') {
                    salert(breezeCommonJS.regularEmpty('name'));
                } else {
                    salert(breezeCommonJS.regularError('name'));
                }
                return false;
            }
        }

        // 子女情况校验
        if (valid) {
            var _valid = false;
            $('input[name="sex"]').each(function(index, item){
                if ($(item).is(':checked')) {
                    _valid = true;
                }
            });
            if (!_valid) {
                valid = false;
                salert(tips.b);
                return false;
            }
        }
        // 生日校验
        if (!breezeCommonJS.regularCheck('birth').test($('input[name="birth"]').val())) {
            valid = false;
            if ($('input[name="birth"]').val() === '') {
                salert(breezeCommonJS.regularEmpty('birth'));
            } else {
                salert(breezeCommonJS.regularError('birth'));
            }
            return false;
        }
        // 姓名校验
        if (valid) {
            if (!breezeCommonJS.regularCheck('name').test($('input[id="name-self"]').val())) {
                valid = false;
                if ($('input[name="name-self"]').val() === '') {
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
            $('#form-box').submit();
        }

        if (!valid) {
            e.preventDefault();
            return false
        }
    });

}());
