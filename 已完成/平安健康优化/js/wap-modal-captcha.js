var breezeModalCaptcha = {
    arr: [],
	init: function(static_host) {
        var _this = this;
        var static_host = static_host || '';
		$('<link>').attr({
			rel: 'stylesheet',
            href: static_host + './css/wap-modal-captcha.css?timestamp=' + Math.random()
        }).appendTo('head');
        setTimeout(function(){
            $('body').append(_this.layoutCaptcha());
            setTimeout(function(){
                $('.breeze-modal-captcha-box-new').on('click', '.breeze-modal-captcha-close', function(){
                    _this.closeCaptcha(_this.closeModalCaptcha);
                });
                $('.breeze-modal-captcha-box-new').on('click', '#breeze-modal-captcha-send', function(){
                    _this.getCaptcha($('#breeze-modal-captcha-send'));
                });
                $('.breeze-modal-captcha-box-new').on('tap click', 'td', function(){
                    _this.getNumberValue($(this), _this.verifyCaptcha)
                });
            }, 0);
        }, 200);
	},
	layoutCaptcha: function() {
        var array = [0,1];
        var layoutType = Math.floor((Math.random()*array.length));
        var headerHtml = '';
        if(layoutType === 0) {
            headerHtml += '<div class="breeze-modal-captcha-box-new-header-pingan">' +
                                '<div class="breeze-modal-captcha-input-new breeze-modal-captcha-input-new-pingan">' +
                                    '<p class="breeze-modal-captcha-box-clx">' +
                                        '<span>验证码短信已发送至166****2580</span>' +
                                        '<input type="button" value="获取验证码" id="breeze-modal-captcha-send">' +
                                    '</p>'+
                                    '<ul class="breeze-modal-captcha-box-clx"><li></li><li></li><li></li><li></li><li></li><li></li></ul>' +
                                '</div>' +
                                '<div class="breeze-modal-captcha-box-new-content-pingan breeze-modal-captcha-box-section">' +
                                    '<h3>正在为您承保XXXX,输入【平安健康】验证码将为您免费加赠价值<span>3000元</span>的1年期重疾险</h3>' +
                                    '<p>最终承保结果请以保险公司短信为准</p>' +
                                '</div>' +
                            '</div>';

        } else {
            headerHtml += '<div class="breeze-modal-captcha-box-new-header">' +
                                '<div class="breeze-modal-captcha-box-new-header-info">' +
                                    '输入【平安健康】签名的验证码将为您免费加赠价值<span>3000元</span>的1年期重疾保障<em>（请按需领取）</em>' +
                                '</div>' +
                                '<div class="breeze-modal-captcha-input-new">' +
                                    '<ul class="breeze-modal-captcha-box-clx"><li></li><li></li><li></li><li></li><li></li><li></li></ul>' +
                                    '<p class="breeze-modal-captcha-box-clx">' +
                                        '<span>验证码短信已发送至166****2580</span>' +
                                        '<input type="button" value="获取验证码" id="breeze-modal-captcha-send">' +
                                    '</p>' +
                                '</div>' +
                                '<a class="breeze-modal-captcha-box-fixed-button" href="javascript:;">' +
                                    '<span>直接去</span><span>领XX券</span>' +
                                '</a>' +
                            '</div>';
        }

        return '<div class="breeze-modal-captcha-box-new">' +
                    headerHtml +
                    '<div class="breeze-modal-captcha-box-new-detail breeze-modal-captcha-box-section">' +
                        ' <img class="breeze-modal-captcha-box-new-detail-logo" src="./images/breeze-modal-captcha-img-logo.png" />' +
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
                    '</table>' +
                '</div>';
	},
	closeCaptcha: function(callback) {
		var _this = this;
        var callback = callback || function(){};
        callback();
		$('#mask, .breeze-modal-captcha-box, .breeze-modal-captcha-mask').css('display', 'none');
        breezeCommonJS.recoverBodyScroll();
    },
    showCaptcha: function(options, type) {
        var _this = this;
        _this.mobile = options.mobile || '您的手机',
        _this.getCaptcha = options.getCaptcha || function(){},
        _this.verifyCaptcha = options.verifyCaptcha || function(){},
        _this.closeModalCaptcha = options.closeModalCaptcha || function(){},
        _this.type = type || false;
        setTimeout(function(){
            if (_this.type) {
                _this.getCaptcha($('#breeze-modal-captcha-send'));
            }
        }, 0);
        $('span', '.breeze-modal-captcha-input-new').text(_this.mobile);
        $('.breeze-modal-captcha-box-new').css('display', 'block');
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
