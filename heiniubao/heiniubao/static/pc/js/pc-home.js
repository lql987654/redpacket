$(document).ready(function(){
    $(window).scrollTop(0);
	// 滚动状态
	var screen_moving = false,
			banner_index = 0,
			banner_max_number = 3,
			banner_timer = null,
			sendButton = $('#send'), // 发送验证码按钮
			captchaInput = $('#captcha'), // 验证码输入框
			mobileInput = $('#mobile'), // 手机号输入框
            tag_checked = false, //如果导航被点击则值为  true
			formSubmit = $('#form-submit');

	// 设置模块高度
	function set_section_height () {
		var window_height = $(window).height(),
				window_width = $(window).width();
		$('.section').height(window_height);
	}

	// 屏幕切换滚动
	function move (index, flag) {
		if (index < 0 || index > 6) {
			return;
		}
		if (!flag) {
			screen_moving = false;
		}
		if (!screen_moving) {
			if (flag) {
				screen_moving = true;
			}
			var window_height = $(window).height(),
					move_distance = window_height * index;
			$('#current-location').val(index);
			$('li', '.sidebar').eq(index).addClass('active')
												 .siblings('li')
												 .removeClass('active');
			$('.content').animate({'bottom': move_distance}, 800, function(){
				if (flag) {
					setTimeout(function(){screen_moving = false;}, 400);
				}
			});
		}
	}

	// banner图滚动
	function banner_move(index) {
		$("#banner li , .top-section ul li").eq(index)
									 .animate({ opacity: 1 }, 1000)
									 .css({ "z-index": "1" })
									 .siblings()
									 .animate({ opacity: 0 }, 1000)
									 .css({ "z-index": "0" });
		$("#banner-nav-button a").eq(index)
															.addClass("active")
															.siblings()
															.removeClass("active");
	}

	// 点击侧边栏滚动
	$('li', '.sidebar').on('click', function(){
        tag_checked = true;
		var self = $(this);
        self.siblings().removeClass('active');
		self.addClass('active');
		var index = self.index();
		var toHeight = $('.section:eq('+ index +')').offset().top;
		// move(index, false);
        $('body,html').animate({scrollTop: toHeight}, 1000);
        //导航被点击  结束 改变状态
        setTimeout(function(){tag_checked = false;},1000)
    });

    window.onscroll = function() {
        //滚动到导航链接处，将对应导航置为选择状态
        var s_top = $(window).scrollTop();
        //点击导航则不执行这里
        if (!tag_checked) {
            $('li', '.sidebar').each(function () {
                var data_href = $(this).attr("data-id");
                var target = $('#'+ data_href +'');
                if (target.offset().top - 10 - (s_top ) < 0) {
                    $(this).siblings().removeClass("active");
                    $(this).addClass("active");
                }
            });
        }
    };

	//banner自动播放
	banner_timer = setInterval(function(){
		banner_move(banner_index);
		banner_index++;
		if(banner_index == banner_max_number){
			banner_index = 0;
		}
	} , 2000);

	//点击导航 触发banner动画
	$("#banner-nav-button a").hover(function(){
			if (banner_timer) {
				clearInterval(banner_timer);
			}
			banner_index  =  $("#banner-nav-button a").index(this);
			banner_timer = setTimeout(function(){
				banner_move(banner_index);
				$('#banner').stop();
			} , 400);
		}, function(){
				clearInterval(banner_timer);
				banner_timer = setInterval(function(){
					banner_move(banner_index);
					banner_index++;
					if(banner_index == banner_max_number) {
						banner_index=0;
					}
				} , 3000);
	});

	//滑入 停止banner动画，滑出开始banner动画.
	$('#banner').hover(function(){
	  if (banner_timer) {
			clearInterval(banner_timer);
	  }
	}, function(){
			banner_timer = setInterval(function(){
			banner_move(banner_index);
			banner_index++;
			if (banner_index == banner_max_number) {
				banner_index=0;
			}
		} , 3000);
	});

	// tab导航切换
	$('a', '#tab-nav-box').on('click', function(){
		var index = $(this).index();
		$(this).addClass('active')
					 .siblings()
					 .removeClass('active');

		$('ul', '#tab-content-box').eq(index)
															 .addClass('active')
															 .siblings()
															 .css('display', 'none');
		setTimeout(function(){
			$('ul', '#tab-content-box').eq(index)
																 .siblings()
																 .css('display', 'block')
																 .removeClass('active');
		}, 400);
	});

	// 遮罩层特效
	$('li', '#live-box-fifth, #live-box-sixth ').hover(function(){
		var h = $(this).height();
		$('.text', this).stop().animate({
			height: h + 'px'
		}, 'slow');
	}, function(){
		$('.text', this).stop().animate({
			height: '0'
		});
	});

	// 初始化
	set_section_height();

	$(window).resize(function(){
		set_section_height();
	});

    $("input").focus(function (object) {
    	$(this).parent().addClass('focus-input')
    })
    $("input").blur(function (object) {
        $(this).parent().removeClass('focus-input')
    })

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
            $('#input-box-mobile').find('#error-info').remove();
        } else if (options.data.phone === '') {
            $('#input-box-mobile').append(breezeCommonJS.errorInfo(breezeCommonJS.regularEmpty('mobile')))
        } else {
            $('#input-box-mobile').append(breezeCommonJS.errorInfo(breezeCommonJS.regularError('mobile')))
        }
    });

    // 失去焦点验证验证码是否正确
    captchaInput.on('blur', function(){
        var options = {
            target: $('#token'),
            data: {
                phone: mobileInput.val(),
                captcha: captchaInput.val()
            },
			callback: function () {
                $('#input-box-captcha').find('#error-info').remove();
            }
        };

        if (breezeCommonJS.regularCheck('mobile').test(options.data.phone)
            && breezeCommonJS.regularCheck('captcha').test(options.data.captcha)) {
            breezeCommonJS.verifyCaptcha(options);
        }

    });
    // 表单提交 
    formSubmit.on('click', function () {

        var valid = true;

        // 姓名校验
        if (valid) {
            if (!breezeCommonJS.regularCheck('name').test($('input[name="name"]').val())) {
                valid = false;
                if ($('input[name="name"]').val() === '') {
                	$('#input-box-name').append(breezeCommonJS.errorInfo(breezeCommonJS.regularEmpty('name')))
                } else {
                    $('#input-box-name').append(breezeCommonJS.errorInfo(breezeCommonJS.regularError('name')))
                }
                return false;
            }else {
                $('#input-box-name').find('#error-info').remove();
			}
        }

        // 手机号码校验
        if (valid) {
            if (!breezeCommonJS.regularCheck('mobile').test($('input[name="mobile"]').val())) {
                valid = false;
                if ($('input[name="mobile"]').val() === '') {
                    $('#input-box-mobile').append(breezeCommonJS.errorInfo(breezeCommonJS.regularEmpty('mobile')))
                } else {
                    $('#input-box-mobile').append(breezeCommonJS.errorInfo(breezeCommonJS.regularError('mobile')))
                }
                return false;
            }else {
                $('#input-box-mobile').find('#error-info').remove();
			}
        }
        // 验证码校验
        if(valid){
            if (!breezeCommonJS.regularCheck("captcha").test($("input[name='captcha']").val())) {
                valid = false;
                $('#input-box-captcha').append(breezeCommonJS.errorInfo(breezeCommonJS.regularError('captcha')))
                return false;
            }
            if ($('#token').val() === '') {
                valid = false;
                $('#input-box-captcha').append(breezeCommonJS.errorInfo(breezeCommonJS.regularError('captcha')))
                return false;
            }
        }
        if(valid) {
        	$('#form-box').submit();
		}
    })
});