window.onload = function () {
    var k = 0;//可以点击
    var c = 0;//娃娃的
    scrollLeft();//娃娃滚动

    var talon = $(".pole").offset().left + 55;//首先获取爪子的位置(这里是固定的)
    /*声明变量*/
    var areaHeight = $(".macbg").height() + 70;//活动区域的高
    var long = areaHeight - 90//爪子伸长的距离(目前娃娃的高度暂定为115px;)
    /*赋值给活动区域高度*/
    $(".macbg").css({height: areaHeight});

    /*娃娃滚动*/
    function scrollLeft() {
        var speed = 20;
        var yu = $("#sel1").html();
        $("#sel2").html(yu);
        function Marquee() {
            c++
            if ($("#sel2").width() - $("#pack").scrollLeft() <= 0) {
                c = 0
                $("#pack").scrollLeft(c);
            } else {
                $("#pack").scrollLeft(c);
            }
        }//Marquee结束
        var timer = setInterval(Marquee, speed);
        /*点击按钮*/
            $(".start").bind('click', function () {
                $(".start").attr("disabled",true);
                $(".left-foot").css("transform", 'rotate(30deg)');
                $(".right-foot").css("transform", 'rotate(-30deg)');
                $(".pawer").animate({height: long},
                    {
                        duration: 2000,
                        step: function () {
                            $(".pawer").css("overflow", "visible");
                        },

                        complete: function () {
                            $(".pawer").css("overflow", "visible");
                        }
                    }
                );//伸下去(绳子)
                /*抓到娃娃*/
                function fn(t_img) {
                    $(".pawerPic").addClass("on");
                    $(".win img").attr("src", t_img)
                };

                /*娃娃消失*/
                function end() {
                    $(".pawerPic").removeClass("on")
                }
                /*按钮点击*/
                function btn() {
                    $(".btn_star").css({display: "block"})
                }//控制按钮是否可以点击
                /*判断抓没抓到娃娃*/
                if_ok = setTimeout(ok_no, 2000);
                var temp;//存储抓到的娃娃的位置
                function ok_no() {
                    /*打印出此时此刻每个娃娃的位置*/
                    for (var i = 0; i < $("#pack img").length; i++) {
                        var l = $("#pack img").eq(i).offset().left + 41.61//此时此刻每个娃娃的位置
                        if (l - 60 <= talon && talon <= l + 60) {
                            alert("你抓到了");
                            $(".left-foot").css("transform", 'rotate(0deg)');
                            $(".right-foot").css("transform", 'rotate(0deg)');
                            $("#pack img").eq(i).css("opacity", "0")
                            var t_img = $("#pack img").eq(i).attr("src")
                            time_zz = setTimeout(fn(t_img), 0)
                            temp = i;
                            return
                        } else {
                            temp = ""
                            console.log("没抓到")
                        }
                    }
                }
                /*事件调用*/
                //time_zz=setTimeout(fn,2000);//抓到娃娃
                time_xs = setTimeout(end, 4000);//娃娃消失
                time_ww = setTimeout(btn, 4000);//按钮点击
                $(".pawer").animate({height: 246},
                    {
                        duration: 2000,
                        step: function () {
                            $(".pawer").css("overflow", "visible");
                        },
                        complete: function () {
                            $(".pawer").css("overflow", "visible");
                            $(".left-foot").css("transform", 'rotate(0deg)');
                            $(".right-foot").css("transform", 'rotate(0deg)');
                            $(".win img").attr('src', "");
                            if (temp != "") {
                                var a = $("#pack img")[temp];
                                a.style.opacity = "1";
                                temp = "";
                            }
                            $(".start").attr("disabled",false);
                        }
                    });//缩回来(绳子)
            })

    }//scrollLeft结束
}//window.onload结束
(function () {
    var speed=20;
    var backward_img1 = document.getElementById("backward-img1");
    var backward_img2 = document.getElementById("backward-img2");
    var backward_pack = document.getElementById("backward-pack");
    backward_img2.innerHTML=backward_img1.innerHTML
    backward_pack.scrollLeft=backward_pack.scrollWidth
    function Marquee(){
        if(backward_pack.scrollLeft<=0)
            backward_pack.scrollLeft+=backward_img2.offsetWidth
        else{
            backward_pack.scrollLeft--
        }
    }
    var MyMar=setInterval(Marquee,speed)
}());
(function(){
   $(".rule").click(function () {
        $(".rule-modal").css("display","block");
   })
    $(".close").click(function(){
        $(".rule-modal").css("display","none");
    })
}())