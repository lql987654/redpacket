(function () {

    var serverParams = {},
        userParams = {};
    //  机器人提问
    $('.chat-area').on('click','.message-answer span', function (object) {
        var answerId = $(this).attr('data-answerid');
        serverParams = {
            "answerId" : answerId,
            "answerTime" : 0
        };
        template.userTpl($(this).text());
        $('.message-answer', '.server').hide();
        setTimeout(function () {
            ajaxFunction.serverQuestion(function () {
                toAreaBottom();
            })
        }, 200)
    });
    // 展示问题
    $('.other-question').on('click', function (object) {
        $('.show-other-question-list').show()
    });

    //  展示问题 由用户提问
    $('.show-other-question-list').on('click','ul li', function (object) {
        template.userTpl($(this).text());
        $('.show-other-question-list').hide();
        $('.message-answer', '.server').hide();
        setTimeout(function () {
            ajaxFunction.userQuestion(function () {
                toAreaBottom();
                //  5s未进行操作 执行机器人问答方法 并调整滚动条到底部
                hasOperate(function () {
                    ajaxFunction.serverQuestion(function () {
                        toAreaBottom();
                    })
                }, 5000)
            });
        }, 200)
    });
    // 换一换
    $('#list-change').on('click', function (object) {
        ajaxFunction.changeUserQuestion();
    });
    // 接口方法
    var ajaxFunction = {
        // 机器人提问接口
        serverQuestion: function (callbackFunc) {
            var callback = callbackFunc || function () { };

            $.ajax({
                type: "get",
                url: '/api/ai_robot/robot_qtoa',
                async: false,
                data : serverParams,
                dataType: "json",
                beforeSend: function () {
                    addWaitingBox();
                },
                success: function (result) {
                    console.log(result)
                    var data = result.data.data,
                        template_type = 1;

                    setTimeout(function () {
                        delWaitingBox();
                        template.robotTpl(data, template_type);
                        callback();
                    },1000)
                }
            })
        },
        //  用户提问机器人回答接口
        userQuestion: function (callbackFunc) {
            var callback = callbackFunc || function () { };

            $.ajax({
                type: "post",
                url: 'http://192.168.7.66:3000/data/read?type=index',
                async: false,
                dataType: "jsonp",
                jsonp: 'callback',
                beforeSend: function () {
                    addWaitingBox();
                },
                success: function (result) {
                    var data = result.data.data,
                        template_type = 0;
                    setTimeout(function () {
                        delWaitingBox();
                        template.robotTpl(data, template_type);
                        callback();
                    },1000);

                }
            })
        },
        //  换一换问题
        changeUserQuestion: function () {
            $.ajax({
                type: "post",
                url: 'http://192.168.7.66:3000/data/read?type=index',
                async: false,
                dataType: "jsonp",
                jsonp: 'callback',
                beforeSend: function () {

                },
                success: function (result) {
                  console.log(1)
                }
            })
        }
    };
    // 模板方法
    var template = {
        //  机器人模板
        robotTpl: function (data, template_type) {
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
            $('.chat-area').append(str);
        },
        // 性别人物模板
        userTpl: function (selectText) {
            var str = '';
                str += '<div class="message-item self clx">' +
                            '<img class="service" src="./images/man.png"/>' +
                            '<div class="message-question self-answer">' + selectText+ '</div>' +
                        '</div>';
                $('.chat-area').append(str);
        }
    };
    //  添加等待样式的div
    function addWaitingBox() {
        var str = '';
            str += '<div class="message-item server clx box-from-left" id="waiting-box">' +
                        '<img class="service" src="./images/robot.png"/>' +
                        '<div class="message-question waiting"><i class="delay300"></i><i class="delay500"></i><i class="delay800"></i></div>' +
                    '</div>';
        $('.chat-area').append(str);
        toAreaBottom();
    }
    //  删除等待样式的div
    function delWaitingBox() {
        $('#waiting-box').remove();
    }
    //  自动滚动到页面底部
    function toAreaBottom() {
        var chatArea = $('.chat-area');
        var chatAreaHeight = chatArea[0].scrollHeight;
        chatArea.scrollTop(chatAreaHeight);
    }
    //  检测未操作时执行的方法
    function  hasOperate(callbackFunc, second) { //second是检测未操作的时间，秒为单位，callback是该时间段未点击需要执行的函数
        var status = false;

        document.body.onmousedown = function () {
            status = true;
        };
        document.body.onmouseup = function () {
            countTime();
        };

        function countTime() {

            setTimeout(function() {
                if (!status) {
                    callbackFunc();
                    status = true;
                }
            }, second);
        }
        countTime();
    }
    $('.chat-area').on('click','.message-answer-new span',function () {
        $(this).css({
            'background':"#00baff",
            'color': '#fff'
        })
        $(".message-answer-new").parent().find('.self-answer').text($(this).text());
        var targetHeight = $('.self-answer').height()/100 + 'rem',
            targetWeight = $('.self-answer').width()/100 + 'rem';

        $(".message-answer-new").animate({"width":targetWeight,"height":targetHeight,"margin-right": '.8rem',"margin-top": '.2rem','float':'right'},600,function () {
            $(".message-answer-new").hide();
            $('.self-answer').show();
        });
        setTimeout(function () {
            $(".message-answer-new span").css('opacity','0');
        },60);
        setTimeout(function () {
            $('.self-new .service').show().animate({"opacity": '1', "top" :0},200)
        },500);
        $('.self-answer').animate({"opacity": '1'},800)
    })
}());