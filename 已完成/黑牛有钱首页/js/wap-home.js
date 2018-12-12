$(function(){
    // 活动规则
    $('#activity-rules-btn').on('click', function(){
        $('#mask, #rules').css('display', 'block');
        setTimeout(function(){
            $('#mask, #rules').addClass('active');
        }, 100);
    });

    $('a', '#rules h3').on('click', function(){
        $('#mask, #rules').removeClass('active');
        setTimeout(function(){
            $('#mask, #rules').css('display', 'none');
        }, 500);
    });

    // 增险详情
    $('header a').on('click', function(){
        $('#mask, #detail').css('display', 'block');
        setTimeout(function(){
            $('#mask, #detail').addClass('active');
        }, 100);
    });

    $('a', '#detail h3').on('click', function(){
        $('#mask, #detail').removeClass('active');
        setTimeout(function(){
            $('#mask, #detail').css('display', 'none');
        }, 500);
    });


    // 提交表单
    $('.submit-btn').on('click', function(e){
        var valid = true;
        if (valid) {
            if (!$('#agree-btn').prop('checked')) {
                valid = false;
                salert('请阅读活动规则并勾选确认')
                return false;
            }
        }
        if (valid) {
            $('.input-text', 'form').each(function(index, item){
                var $name = $(item).prop('name');
                var $value = $(item).prop('value');
                if ($value === '') {
                    valid = false;
                    salert(REG._empty($name));
                    return false;
                } else if (!REG._reg($name).test($value)) {
                    valid = false;
                    salert(REG._error($name));
                    return false;
                }
            });
        }
        if(valid){
            $("#form-box").submit();
        }
        if (!valid) {
            e.preventDefault();
            return false
        }
    });
});
