$(function () {
    // 轮播方法
    var startX,
        startY,
        tapStatus = false;
    $(".Cooldog_content li").on("touchstart", function(e) {
        tapStatus = true;
        // 判断默认行为是否可以被禁用
        if (e.cancelable) {
            // 判断默认行为是否已经被禁用
            if (!e.defaultPrevented) {
                e.preventDefault();
            }
        }
        startX = e.originalEvent.changedTouches[0].pageX,
            startY = e.originalEvent.changedTouches[0].pageY;
    });
    $(".Cooldog_content li").on("touchend", function(e) {
        // 判断默认行为是否可以被禁用
        if (e.cancelable) {
            // 判断默认行为是否已经被禁用
            if (!e.defaultPrevented) {
                e.preventDefault();
            }
        }
        moveEndX = e.originalEvent.changedTouches[0].pageX,
            moveEndY = e.originalEvent.changedTouches[0].pageY,
            X = moveEndX - startX,
            Y = moveEndY - startY;
        //左滑
        if ( X > 0 ) {
            btn_right();
        }
        //右滑
        else if ( X < 0 ) {
            btn_left();
        }
    });

    //鼠标移入显示左右箭头和关闭按钮
    var arr = ['p1', 'p2', 'p3', 'p4', 'p5'];
    var index = 0;
    //图片自动轮播
    var test = function(){
        var timer = setInterval(function(){
            btn_right();
            if(tapStatus)  {
                clearInterval(timer);
                setTimeout(function(){
                    test();
                },2000);
            }
        },2000);
    };
    test();

    //点击上一张的封装函数
    function btn_left() {
        arr.unshift(arr[4]);
        arr.pop();
        $('.Cooldog_content li').each(function (i, e) {
            $(e).removeClass().addClass(arr[i]);
        })
        index--;
        if (index < 0) {
            index = 4;
        }

    }

    //点击下一张的封装函数
    function btn_right() {
        arr.push(arr[0]);
        arr.shift();
        $('.Cooldog_content li').each(function (i, e) {
            $(e).removeClass().addClass(arr[i]);
        })
        index++;
        if (index > 4) {
            index = 0;
        }
    }

    // 展示列表
    $('#show-location-list').on('click', function (object) {
        $('#location-list').show();
    });
    //  列表点击
    $('#location-list ul li').on('click', function (object) {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        var point = $(this).attr('data-location'),
            title = $(this).attr('data-name'),
            address = $(this).attr('data-address');
        initMap(point, title, address);
        $('#location-list').hide();
    });
    //  加载地图
    initMap();
    // 地图方法
    function initMap(point, title, address) {
        var mapPoint = point || '116.463317,40.032446' ,
            mapTitle = title || '北京光大汇晨朝来老年公寓',
            mapAddress = address || '北京市朝阳区来广营乡朝来森林公园南侧';
        var pointArr = mapPoint.split(',');

        $('#map-title span').text(title);
        // 百度地图组件
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(pointArr[0],pointArr[1]);
        map.centerAndZoom(point, 18);
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
        map.enableScrollWheelZoom();
        var opts = {
            width : 100,     // 信息窗口宽度
            height: 50,     // 信息窗口高度
            title : mapTitle,  // 信息窗口标题
            enableCloseOnClick: true
        };
        var infoWindow = new BMap.InfoWindow("地址：" + mapAddress , opts);  // 创建信息窗口对象
        marker.addEventListener("click", function(){
            map.openInfoWindow(infoWindow,point); //开启信息窗口
        });
        map.openInfoWindow(infoWindow,point);
    }

    $("select").change(function () {
        var selItem = $(this).val();
        if (selItem == $(this).find('option:first').val()) {
            $(this).css("color", '#b5b5b5');
        } else {
            $(this).css("color", '#444');
        }
    });

    var sendButton = $('#send'), // 发送验证码按钮
        captchaInput = $('#captcha'), // 验证码输入框
        mobileInput = $('#mobile'); // 手机号输入框

    // 点击发送验证码按钮
    sendButton.on('click', function () {
        var options = {
            target:sendButton,
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

    $('#submit-button').on('click', function (object) {
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
        // 预约校验
        if(valid){
            if ($("select[name='product'] option:selected").val()=="0") {
                valid = false;
                salert("请选择需要预约的项目");
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
            if (!breezeCommonJS.regularCheck("captcha").test($('input[name="captcha"]').val())) {
                valid = false;
                salert(breezeCommonJS.regularError("captcha"));
                return false;
            }
            if ($('input[name="token"]').val() === '') {
                valid = false;
                salert(breezeCommonJS.regularError("captcha"));
                return false;
            }
        }
        if(valid) {
            $('#form-box').submit();
        }
    })
}());