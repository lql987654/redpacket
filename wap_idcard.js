require.config({

    baseUrl: '/static/public/public_files/js/',
    shim: {
        jquery: {
            exports: '$'
        },
        user_agreement: {
            exports: 'userAgreement'
        },
        animation_packet: {
            exports: 'animationPacket'
        },
        utils: {
            exports: 'utils'
        }

    },
    paths: {
        'require': 'library/require',
        'jquery': 'library/jquery.min',
        'user_agreement': 'module/user_agreement',
        'animation_packet': 'module/animation_packet',
        'utils': 'module/utils'
    }

});

require(['jquery', 'user_agreement', 'animation_packet', 'utils'],
  function ($, userAgreement, animationPacket, utils) {

    $('#locationPath').val(window.location.href);
    var isShowCaptcha = $('#is-show-captcha').val() == 'True' ? true : false;
    var isShowBirth = $('#is-show-birth').val() == 'True' ? true : false;

    // 黑牛用户协议
    $('#user-agreement-msg').html(userAgreement.msg());

    //活动规则
    $('#activity-rules-btn').on('click',function(){ utils.popupShow('activity-rules-box', 167); });

    // 用户协议
    $('#user-agreement-btn').on('click', function(){ utils.popupShow('user-agreement-box', 167); });

    // 保险条款
    $('#insurance-btn').on('click', function(){ utils.popupShow('insurance-box', 167); });

    // 信息安全
    $('#information-btn').on('click', function(){ utils.popupShow('information-box', 167); });

    // 弹窗关闭
    $('.popup-close-btn, #mask').on('click', function(){
        $('#activity-rules-box, #user-agreement-box, #popup-captcha-box, #insurance-box, #information-box, #mask').css('display', 'none');
    });

    // 复选框选择
    $('#agree-btn').on('click', function() {
      if($(this).is(':checked')) {
        $('#judge-btn').addClass('active');
      } else {
        $('#judge-btn').removeClass('active');
      }
    });

    $('#captcha-close-btn').on('click', function() {
        $('#mask-captcha, #captcha-box, #keyboard-box').css('display', 'none');
    });

    $('#idcard-close-btn').on('click', function() {
        $('#popup-idcard-input', '#form-box').remove();
        $('#idcard-mask, #popup-idcard-box').css('display', 'none');
        utils.bodyRestoreScroll();
    });

    $('#idcard-submit-btn').on('click', function(){
        if($('#popup-idcard-input', '#form-box').length !== 0) {
          $('#popup-idcard-input', '#form-box').val($('#popup-input').val());
        } else {
          $('#form-box').append('<input id="popup-idcard-input"' +
            ' type="hidden" name="idCard" value="' + $('#popup-input').val() + '"/>');
        }
        if(!utils.reg('idCard').test($('#popup-idcard-input').val())) {
          utils.salert('请输入正确的身份证号');
          return false;
        } else {
          $('#form-box').submit();
          $('#idcard-mask, #popup-idcard-box').css('display', 'none');
          utils.bodyRestoreScroll();
        }
    });

    // 获取验证码
    var is_click = false;
    var token = $("#token");

    $('#send').on('click', function() {
      var data = {
        phone: $('#mobile').val(),
        r: $('#random').val()
      };
      if(utils.reg('mobile').test(data.phone)) {
        utils.getCaptcha(data);
      } else {
        utils.salert('请输入正确的手机号码');
      }
    });

    // 验证验证码
    $('#captcha').on('blur', function () {
      var data = {
        phone: $('#mobile').val(),
        captcha: $('#captcha').val()
      };
      utils.validateCaptcha(data);
    });

    // 四位验证码分步输入
    var keyNum = 0;
    var PAN_DING = {
        validCaptcha: function (data, token, url) {
          var self = this;
          var token = token || $("#token");
          var url = url || '/verify/phone_captcha';
          $.ajax({
            type: 'get',
            async: false,
            url: url,
            data: data,
            success: function(response) {
              if(response.error_code != 0)
                {
                  token.val('');
                  utils.salert(utils.errObj('captcha'));
                } else {
                  token.val(response.token);
                  //$('#mask-captcha, #captcha-box, #keyboard-box').css('display', 'none');
                  $('#captcha-box, #keyboard-box').css('display', 'none');
                  //先弹验证码 再弹出新版弹窗
                  $("#new-mask-content").css("display","block");

                  // animationPacket._cutscenes(
                  //   $('#init-msg').val(), $('#packet-msg').val(), $('#security-msg').val()
                  // );

                }
            },
            error: function () {
              utils.salert('操作失败，请稍后重试...');
            }
          });
      },

      judgeInsur: function(data, isShow, cutscenesFn, fn) {
          var self = this;
          var sendId = $('#send');
          var token = $("#token");
          var fn = fn || (function () {});

          $.ajax({
            type: 'post',
            url: '/api/local/policy_checker',
            data: data,
            success: function (response) {
                console.log(response)
              if (response.status === 0 && !isShow) {

                var getData = { r: response['data'].random, phone: data['mobile'] };
                keyNum = 0;
                $('span', '#captcha-num-box').text('');
                $('#captcha').val('');
                $('#captcha-phone-num').text(getData.phone);
                $('#mask-captcha, #captcha-box, #keyboard-box').css('display', 'block');
                $('#mask-captcha').height($(document).height());
                $('html, body').scrollTop(0);

                if (sendId.attr('disabled') !== 'disabled') {
                  utils.getCaptcha(getData, sendId);
                }
                // 点击按钮倒计时
                sendId.on('click', function() {
                  utils.getCaptcha(getData, sendId);
                });

              } else if (response.status === 2) {
                $('#form-box').submit();
                fn();
              } else {
                $('#cutscenes-img').attr('src', '/static/images/cutscenes/wap_' +
                  response['data'].policy_company + '.png');
                setTimeout(cutscenesFn, 200);
              }
            },
            error: function () {
            self.salert('操作失败，请稍后重试...');
          }
      });
    }

    };

    // 表单验证
    //点击按钮进行表单校验 同时请求借口渲染页面，表单校验成功后弹出新弹出窗
    $('#judge-btn').on('click', function(e) {

        var valid = true;
        showMaskTable.renderTable();

        if(valid) {
          if(!$('#agree-btn').is(':checked')) {
            valid = false;
            utils.salert('请阅读活动规则和用户协议并勾选确认');
          }
        }

        if(valid && ($('input', '#sex-box').length > 0)){
          if(!utils.reg('name').test($('#name').val())) {
                valid =false;
                utils.salert(utils.errObj('name'));
                return false;
            }
        }

        if(valid && ($('input', '#sex-box').length > 0)) {
          var flag = false;
          $('input', '#sex-box').each(function(index, item){
            if($(item).is(':checked')) {
              flag = true;
            }
          });
          if (!flag) {
            valid = false;
            utils.salert('请选择性别');
          }
        }

        if(valid) {
          $('.input-text', '#form-box').each(function(index, item) {
            var inputValue = item.value;
            var inputName = item.name;

            if(!utils.reg(inputName).test(inputValue)) {
                valid =false;
                utils.salert(utils.errObj(inputName));
                return false;
            }

          });
        }

        if(valid) {
            if(isShowCaptcha && token.val() === '')
            {
              valid = false;
              utils.salert(utils.errObj('captcha'));
            }
        }

        if(valid) {
            valid = false;
            var formBoxData = $('#form-box').serializeArray();
            var formData = utils.formatData(formBoxData);


            if(isShowBirth){
              $.ajax({
                url: '/api/local/pa_policy_checker',
                type: 'post',
                async: false,
                data: formData,
                success: function(response){
                  if(response.status === 0) {
                    $('#form-box').append(
                      '<input id="success_encrypt" type="hidden" name="success_encrypt"' +
                      'value="'+ response.data.success_encrypt +'"/>');
                    if ($('#success_encrypt').val() !== '') {
                      $('#form-box').submit();
                    }
                  } else if (response.status === 1) {
                    $('#idcard-mask, #popup-idcard-box').css('display', 'block');
                    $('#idcard-mask').height($(document).height());
                    $('#popup-idcard-box').css('top', 120 + $(window).scrollTop());
                    utils.bodyNoScroll();
                  } else if (response.status === 2) {
                    $('#form-box').submit();
                  }
                },
                error: function(){
                  utils.salert('操作失败，请稍后重试...');
                }
              });
            } else{
              PAN_DING.judgeInsur(formData, isShowCaptcha, function() {
                  animationPacket._cutscenes(
                    $('#init-msg').val(), $('#packet-msg').val(), $('#security-msg').val());
              });
            }
        }

        if(!valid) {
            e.preventDefault();
            return false;
        }
    });

    // 模拟数字键盘点击事件
    $('.num', '#keyboard-box').on('click', function() {
        if (keyNum > 3) {
            return false;
        }
        var self = $(this);
        $('span', '#captcha-num-box').eq(keyNum).text(self.text());
        if (keyNum === 3) {
            var str = '';
            $('span', '#captcha-num-box').each(function(index, item) {
                str += $('span', '#captcha-num-box').eq(index).text().toString();
            });
            $('#captcha').val(str);
            // 验证验证码
            var data = {phone: $('#mobile').val(), captcha: $('#captcha').val()}
            PAN_DING.validCaptcha(data);
        }
        keyNum++;
    });
    $('.del', '#keyboard-box').on('click', function() {
        keyNum--;
        if (keyNum < 0) {
            keyNum = 0;
            return false;
        }
        $('span', '#captcha-num-box').eq(keyNum).text('');
    });

      // 保险条款切换
      $('a', '#logos-top').on('click', function(){
          var self = $(this);
          $('a', '#logos-top').removeClass('active');
          $('.item-box', '#insurance-items-box').removeClass('active');
          self.addClass('active');
          $('.item-box', '#insurance-items-box').eq(self.index()).addClass('active');
      });
      $("#new-submit-btn").on("click",function () {
            showMaskTable.maskTableAjax();
      });
      // 新逻辑弹出窗
      var showMaskTable={
          maskTableAjax:function (url,status,type) {
              var me = this;
              var url = url || 'http://localhost:3000/data/read?type=index';
              $.ajax({
                  type: 'post',
                  url: url,
                  async: status,
                  dataType:"jsonp",
                  success: function (data) {
                      console.log(data)

                  },
                  error: function () {
                      me.salert('操作失败，请稍后重试...');
                  }
              });
          },
          renderTable:function () {
              var me = this;
              me.maskTableAjax('','','table');
              console.log("页面渲染完成")
          }
      }
});