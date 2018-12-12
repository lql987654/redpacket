var TOOL = {

  // 标记
  _flag: true,

  // 拦截标记
  _extraActivity: {
    trigger: false,
    url: '',
    end: false
  },

  // 抽奖接口
  _interface: $("#prize-interface").val(),

  // 剩余抽奖次数
  _remainNum: 0,

  // 所有弹窗关闭
  _closeAllModalBox: function () {
    $('#mask, #modal-box, #modal-message-box, .modal-gold:not(".left-top, .right-bottom"), #modal-ribbon, #light-beam-box, ' +
    '#modal-all-prizes-box, #modal-single-prize-box, .all-prizes-box').css('display', 'none');
  },

  // 根元素默认高度
  _defaultHeight: function () {
    var h = $(window).height() > 627 ? $(window).height() : (12.6 + 'rem');
    $('#root, #loading').height(h);
  },

  // 广播
  _broadcast: function (data) {

    var broadcastStr = '';
    var count = 0;

    $.each(data, function (index, item) {
      broadcastStr += '<li>'+ item +'</li>'
    });
    $('#broadcast').html('').html('<ul>' + broadcastStr + broadcastStr + '</ul>');
    var liHeight = $('li', '#broadcast ul').eq(0).height();
    var liLength = $('li', '#broadcast ul').length;
    $('ul', '#broadcast').height(liHeight * liLength);

    // 滚动特效
    setInterval(function () {
      if (count >= liLength / 2) {
        count = 0;
        $('ul', '#broadcast').css('top', 0);
      }
      count++;
      $('ul', '#broadcast').animate({ top: -(liHeight * count) + 'px' }, 'slow');
    }, 3000);
  },

  // ios提示
  _iosNotice: function (data) {
    if (data.ios_notice !== '' && $('.ios-notice').length <= 0) {
      $('#root').append('<p class="ios-notice">'+ data +'</p>');
    }
  },

  // 活动规则
  _rules: function (data) {
    var rulesStr = '';
    $.each(data, function (index, item) {
      rulesStr += '<p>' + item + '</p>'
    });
    $('#modal-message-box').html('').html(rulesStr);
  },

  // 所有已抽到奖品
  _myPrizes: function (data) {
    var prizeSmall = '';
    if (data.length <= 0) {
      prizeSmall = '<p>要记得先抽奖哦！</p>';
      $('#modal-all-prizes-box').html('').html(prizeSmall);
    } else {
      $.each(data, function (index, item) {
        prizeSmall += '<a href="' + item.link +'" class="modal-prize-item">' +
                    '<img src="' + item.img_adress + '" alt="'+ item.alt +'"></a>'
      });
      $('#modal-all-prizes-box').html('').html(prizeSmall);
    }
  },

  // 抽奖情况
  _prizeDrawSituation: function (data) {
      $.each(data, function(key, value){
          if (!value) {
              $('.prize-item[data-prizeid="' + key + '"]').removeClass('active')
                  .addClass('active');
          }
      });
  },

  // 抽奖成功弹窗内容更新
  _prizeDrawSuccess: function (result) {
      var prize_img = result.prize_big.img_address, // 奖品图片地址
          prize_img_href = result.prize_big.link, // 点击图片的跳转链接
          prize_desc = result.prize_big.title,
          prizeImg = $(".gift-img img");            // 奖品图片

      $('#prize-desc').text(prize_desc);
      prizeImg.attr('src', prize_img);
      prizeImg.parents().attr("href", prize_img_href);
  },

  // 单个奖品弹窗显示
  _singlePrizeModalShow: function () {
    this._flag = true;
    this.showModal('.redpacket');
    $("#redpacket").attr('class',"redpacket modal-box");
  },

  // 抽奖前奖品随机特效
  _randomEffect: function (eles, className) {
    var len = eles.length;
    var _index = Math.floor(Math.random() * len);
    if (len > 0) {
      eles.removeClass(className);
      setTimeout(function(){
        eles.eq(_index).addClass(className);
      }, 0);
    }
  },

  // 抽奖通用数据初始化
  _prizeDrawDataInit: function (result) {
    console.log(response )
    var self = this;
    self._flag = false;
    self._prizeDrawSituation(result)
    self._prizeDrawSuccess(result);  // 抽奖成功弹窗内容更新
  },

  // 拦截弹窗初始化
  _interfaceInit: function () {
    var self = this;
    $.ajax({
      type: 'post',
      url: self._extraActivity.url,
      success: function(response) {
        if (response.status == 0) {
          $("#modal-intercept-box p").css('display','block');
          var str = '';
          $.each(response.data, function(index, item){
            str += '<a href="' + item.link + '">' +
                      '<img src="' + item.img_adress + '" alt="' + item.alt + '">' +
                   '</a>';
          });
          $('.lottery-product-box', '#modal-intercept-box').html('').html(str);
          setTimeout(function(){

            // 拦截弹窗显示
            if (response.data[0].link != 'javascript:;') {
              $('#mask, #modal-intercept-box').css('display', 'block');
              $('#more-draw-btn').css('display', 'none');
            }

            $('#loading').remove(); // 页面加载提示消失
          }, 0);
        } else {
            console.log(response.msg);
        }
      },
      error: function(){
          console.log('网络故障，请稍后重试...');
      }
    });
  },

  // 一进页面弹窗初始化
  _enterPageInterfaceInit: function () {
    var self = this;
    $.ajax({
      type: 'post',
      url: self._extraActivity.url,
      success: function(response) {
        if (response.status == 0) {
          $("#modal-intercept-box p").css('display','none');
          var str = '';
          $.each(response.data, function(index, item){
            str += '<a href="' + item.link + '">' +
            '<img src="' + item.img_adress + '" alt="' + item.alt + '">' +
            '</a>';
          });
          $('.lottery-product-box', '#modal-intercept-box').html('').html(str);
          setTimeout(function(){

            // 拦截弹窗显示
            if (response.data[0].link != 'javascript:;') {
              $('#mask, #modal-intercept-box').css('display', 'block');
              $('#more-draw-btn').css('display', 'none');
            }

            $('#loading').remove(); // 页面加载提示消失
          }, 0);
        } else {
            console.log(response.msg);
        }
      },
      error: function(){
          console.log('网络故障，请稍后重试...');
      }
    });
  },

  // 页面初始化
  _initPage: function (callback) {
    var self = this;
    console.log(self._interface)
    $.ajax({
      type: 'get',
      url: self._interface,
      data: { id: Math.random() },
        dataType:'jsonp',
      success: function (response) {
        console.log(response)

          var data = response.data.data;
          self._remainNum = data.remain_prizes.num  // 剩余抽奖次数

          // 回调函数(针对刮券抽奖)
          if (callback) {
            callback();
          }
          
          self._broadcast(data.broadcast_msg); // 广播
          self._iosNotice(data.ios_notice); // ios提示
          self._rules(data.activity_rules); // 活动规则
          self._myPrizes(data.prizes_small); // 我的奖品
          self._prizeDrawSituation(data.remain_prizes.status); // 已抽奖情况数据更新
          $.extend(self._extraActivity, data.extra_activity); // 拦截弹窗数据更新

          /*
          * 
          */
          if (self._extraActivity.trigger && !self._extraActivity.end) {
            self._interfaceInit();
          } else if (!self._extraActivity.trigger && self._extraActivity.end) {
            $('h3', '#modal-box').text(''); // 弹窗标题为空

            // 我的奖品“特殊弹窗”
            $('#mask, #modal-box, #modal-all-prizes-box, .all-prizes-box').css('display', 'block');
            $('#loading').remove(); // 页面加载提示消失
          } else {
            $('#loading').remove(); // 页面加载提示消失
          }

          if(!self._extraActivity.show_extra){
            $('#more-draw-btn').css('display', 'none');
          }
      },
      error: function () {
          console.log('网络故障，请稍后重试...');
      }
    });
  },
    //翻牌效果弹窗
    _prizeDrawTurnCard:function () {
        $(".maskLayer").removeClass("hide")
        $(".mask-box").removeClass('hide');
        setTimeout(function () {
            $(".mask-back").addClass("mask-back-click");
            $(".hb").addClass("hb-click")
        },500)

    },
  //关闭红包和遮罩层
    _closeCardMask:function () {
      $("#closeBtn").on('click',function () {
          $(".mask-box").addClass('hide');
          $(".maskLayer").addClass('hide');
          $(".mask-back").removeClass("mask-back-click");
          $(".hb").removeClass("hb-click")
      })
    },
  // 一进页面点击更多显示拦截弹窗
  _enterPageShowInterfaceBox: function () {
    var self = this;
    self._closeAllModalBox();
    self._enterPageInterfaceInit();
  },
  // 弹窗显示
  showModal: function (id_name) {
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
  },
  // 弹窗隐藏
  hideModal: function () {
      $('.mask').hide();
      $('.modal-box').hide();
      if (!breezeCommonJS.isPc()) {
          breezeCommonJS.recoverBodyScroll();
      }
  }
};

// 点击显示活动规则 || 我的奖品 && 不影响抽奖
$('a', '.button-box').on('click', function () {
  if (TOOL._flag) {
    $('.modal-content', '#modal-box').css('background-color', '#f9f9f9');
    $('.all-prizes-box').css('display', 'none');
    if ($(this).text() == '活动规则') {
      $('h3', '#modal-box').text($(this).text());
      $('#mask, #modal-box, #modal-message-box').css('display', 'block');
    } else {
      $('h3', '#modal-box').text($(this).text());
      $('#mask, #modal-box, #modal-all-prizes-box').css('display', 'block');
    }
  }
});

// 关闭模态框 && 拦截弹窗判断逻辑
$('#close-btn').on('click', function () {
  if ($('#modal-single-prize-box').css('display') == 'block') {
    TOOL._showInterfaceBox();
  } else {
    TOOL._closeAllModalBox();
  }
});

// 点击奖品链接弹窗消失
$('#single-prize, #get-prize-btn').on('click', function(){
   TOOL._closeAllModalBox();
});

// 拦截框关闭判断
$('#intercept-close-btn').on('click', function(){
  $('#modal-intercept-box').removeClass('close-active').addClass('close-active');
  $('#more-draw-btn').css('display', 'block');
  setTimeout(function(){
    $('#modal-intercept-box').removeClass('close-active');
    $('#mask, #modal-intercept-box').css('display', 'none');
  }, 500);
});
$('#more-draw-btn').on('click', function(){
  TOOL._enterPageShowInterfaceBox();
});
// $("#closeBtn").on('click',function () {
//     $(".mask-box").addClass('hide');
//     $(".maskLayer").addClass('hide');
// })
// 设置根元素默认高度
TOOL._defaultHeight();
