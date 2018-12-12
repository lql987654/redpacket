	function banner_move(index) {
		$("#banner li").eq(index)
									 .animate({ opacity: 1 }, 1000)
									 .css({ "z-index": "1" })
									 .siblings()
									 .animate({ opacity: 0 }, 1000)
									 .css({ "z-index": "0" });
		$("#banner-nav-button li").eq(index)
															.addClass("active")
															.siblings()
															.removeClass("active");
	}

	var index = 0;
	var max_number = 5;

	//自动播放
	var timer = setInterval(function(){
		banner_move(index);
		index++;
		if(index == max_number){
			index = 0;
		}
	} , 3000);

	//点击导航 触发动画
	$("#banner-nav-button li").hover(function(){
			if (timer) {
				clearInterval(timer);
			}
			index  =  $("#banner-nav-button li").index();
			timer = setTimeout(function(){
				banner_move(index);
				$('#banner').stop();
			} , 400);

		}, function(){
				clearInterval(timer);
				timer = setInterval(function(){
					banner_move(index);
					index++;
					if(index == max_number) {
						index=0;
					}
				} , 3000);
	});

	//滑入 停止动画，滑出开始动画.
	$('#banner').hover(function(){
	  if (timer) {
			clearInterval(timer);
	  }
	}, function(){
			timer = setInterval(function(){
			banner_move(index);
			index++;
			if (index == max_number) {
				index=0;
			}
		} , 3000);
	});
