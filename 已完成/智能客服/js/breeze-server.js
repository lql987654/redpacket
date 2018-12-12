var breezeModalCaptcha2 = {
    arr: [],
    init: function(static_host) {
        var _this = this;
        var static_host = static_host || '';
        $('<link>').attr({
            rel: 'stylesheet',
            href: './css/wap-home.css?timestamp=' + Math.random()
        }).appendTo('head');
        setTimeout(function(){
            $('body').append('<div class="breeze-server-box"></div>');
        }, 200);
    },
    layoutRobotTpl: function (data,template_type) {
        //  template_type = 1 机器人提问 template_type = 0 机器人回答
        var messageContent = data.server_question,
            serverAnswer = data.server_answer;
        var str = '';
        str += '<div class="message-item server clx box-from-left">' +
                    '<img class="service" src="./images/robot.png"/>' +
                    '<div class="message-question">' + messageContent + '</div>' ;
        if(template_type === 1 ){
            var answerItem = '';
            for(var i = 0; i< serverAnswer.length; i++) {
                answerItem += '<span data-answerId = '+ serverAnswer[i].item_id +'>' + serverAnswer[i].item_detail + '</span>'
            }
            str += '<div class="message-answer">'+
                        answerItem +
                    '</div>';

        }
        str += '</div>';
        return str;
    },
    showChatArea: function () {
        $('.breeze-modal-captcha-box-new').html('').append(
            '<div class="chat-area wrap">' +
                '<img class="service" src="./images/robot.png"/>' +
                ''
        )
    },
    layoutUserTpl: function (selectText) {
        var str = '';
        str += '<div class="message-item self clx">' +
                    '<img class="service" src="./images/man.png"/>' +
                    '<div class="message-question self-answer">' + selectText+ '</div>' +
                '</div>';
        return str;
    },
    layoutCaptcha: function(mobile, policyName, themeName, themeLink, layoutType) {
        var headerHtml = '',
            buttonHtml = '';
        if (themeLink == '') {
            buttonHtml = '';
        } else {
            buttonHtml = '<a class="breeze-modal-captcha-box-fixed-button" href="' + themeLink + '">' +
                '<span>直接去</span><span>' + themeName + '</span>' +
                '</a>';
        }

        // 0: 平安保险 else 其他保险
        if(layoutType === 0) {
            //  平安保险头部布局
            headerHtml += '<div class="breeze-modal-captcha-box-new-header-pingan">' +
                '<div class="breeze-modal-captcha-input-new breeze-modal-captcha-input-new-pingan">' +
                '<p class="breeze-modal-captcha-box-clx">' +
                '<span>验证码短信已发送至' + mobile + '</span>' +
                '<input type="button" value="获取验证码" id="breeze-modal-captcha-send-new">' +
                '</p>'+
                '<ul class="breeze-modal-captcha-box-clx"><li></li><li></li><li></li><li></li><li></li><li></li></ul>' +
                '</div>' +
                '<div class="breeze-modal-captcha-box-new-content-pingan breeze-modal-captcha-box-section">' +
                '<h3>正在为您承保' + policyName + ',输入【平安健康】验证码将为您免费加赠价值<span>3000元</span>的1年期重疾险</h3>' +
                '<p>最终承保结果请以保险公司短信为准</p>' +
                '</div>' +
                '</div>';

        } else {
            //  其他保险头部布局
            headerHtml += '<div class="breeze-modal-captcha-box-new-header">' +
                '<div class="breeze-modal-captcha-box-new-header-info">' +
                '输入【平安健康】签名的验证码将为您免费加赠价值<span>3000元</span>的1年期重疾保障<em>（请按需领取）</em>' +
                '</div>' +
                '<div class="breeze-modal-captcha-input-new">' +
                '<ul class="breeze-modal-captcha-box-clx"><li></li><li></li><li></li><li></li><li></li><li></li></ul>' +
                '<p class="breeze-modal-captcha-box-clx">' +
                '<span>验证码短信已发送至' + mobile + '</span>' +
                '<input type="button" value="获取验证码" id="breeze-modal-captcha-send-new">' +
                '</p>' +
                '</div>' +
                buttonHtml +
                '</div>';
        }

        $('.breeze-modal-captcha-box-new').html('').append(headerHtml +
            '<div class="breeze-modal-captcha-box-new-detail breeze-modal-captcha-box-section">' +
            '<img class="breeze-modal-captcha-box-new-detail-logo" src="/static/plugins/heiniu/modal-captcha-2.0/images/breeze-modal-captcha-img-logo.png" />' +
            '</div>' +
            '<table>' +
            '<tr>' +
            '<td>1</td>' +
            '<td>2</td>' +
            '<td>3</td>' +
            '</tr>' +
            '<tr>' +
            '<td>4</td>' +
            '<td>5</td>' +
            '<td>6</td>' +
            '</tr>' +
            '<tr>' +
            '<td>7</td>' +
            '<td>8</td>' +
            '<td>9</td>' +
            '</tr>' +
            '<tr>' +
            '<td disabled="disabled"></td>' +
            '<td>0</td>' +
            '<td data="del"></td>' +
            '</tr>' +
            '</table>');
    },
    closeCaptcha: function(callback) {
        var _this = this;
        var callback = callback || function(){};
        callback();
        $('#mask, .breeze-modal-captcha-box-new').css('display', 'none');
        breezeCommonJS.recoverBodyScroll();
    },
    showCaptcha: function(options, type) {
        var _this = this;
        _this.layoutType = options.layoutType || 0,
            _this.policyName = options.policyName || '',
            _this.themeName = options.themeName || '礼包',
            _this.themeLink = options.themeLink || '',
            _this.mobile = options.mobile || '您的手机',
            _this.getCaptcha = options.getCaptcha || function(){},
            _this.verifyCaptcha = options.verifyCaptcha || function(){},
            _this.closeModalCaptcha = options.closeModalCaptcha || function(){},
            _this.type = type || false;
        _this.mobile = _this.mobile.substr(0, 3) + '****' + _this.mobile.substr(7);
        _this.layoutCaptcha(_this.mobile, _this.policyName, _this.themeName, _this.themeLink, _this.layoutType);
        $('.breeze-modal-captcha-box-new').css('display', 'block');
        setTimeout(function(){
            if (_this.type) {
                _this.getCaptcha('#breeze-modal-captcha-send-new');
            }
            setTimeout(function(){
                $('.breeze-modal-captcha-box-new').off('click');
                $('.breeze-modal-captcha-box-new').on('click', '.breeze-modal-captcha-close', function(){
                    _this.closeCaptcha(_this.closeModalCaptcha);
                });
                $('.breeze-modal-captcha-box-new').on('click', '#breeze-modal-captcha-send-new', function(){
                    _this.getCaptcha('#breeze-modal-captcha-send-new');
                });
                $('.breeze-modal-captcha-box-new').on('tap click', 'td', function(){
                    _this.getNumberValue($(this), _this.verifyCaptcha)
                });
            }, 0);
        }, 0);
        breezeCommonJS.forbidBodyScroll();
    },
    getNumberValue: function(target, callback) {
        var _this = this;
        if (target.attr('data') == 'del') {
            _this.arr.pop();
            $('li', '.breeze-modal-captcha-input-new ul').each(function(index, item){
                $(item).text('').text(_this.arr[index]);
            });
        } else if (target.text() !== '') {
            if (_this.arr.length < 6) {
                _this.arr.push(target.text());
                $('li', '.breeze-modal-captcha-input-new ul').each(function(index, item){
                    $(item).text('').text(_this.arr[index]);
                });
                if (_this.arr.length === 6) {
                    callback(_this.arr.join(''));
                }
            } else {
                return;
            }
        } else {
            console.log('');
        }
    }
}
