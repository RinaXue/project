
require(["../scripts/config.js"], function(){
	require(["common","jquery","swiper", "fontscroll"], function(com, $, Swiper){
		// $(".top_banner_r .br_02").on("mouseover",function(){
		// 	$("#top .left-t img").show()
		// })
		// $(".top_banner_r .br_02").on("mouseout",function(){
		// 	$("#top .left-t img").hide()
		// })

		$.ajax({
			url:"https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=233,266,267",
			dataType:"jsonp",
			success:function(response){
				console.log(response)//object
				var list = response.block_266
				var ej = document.querySelector(".menu_left")
				console.log(list)
				console.log(ej)
				list.forEach(element => {
					var $li = $('<li>')
					var $i = $('<i>')
					console.log(element)
					var $span = $('<span>')
					var $div = $('<div>')
					$div.addClass("menu_l1")
					$i.html(element.name)
					console.log(element.name)
					$span.html(">")
					$li.append($i)
					$li.append($span)
					$li.append($div)
					$(ej).append($li)
					$li.hover(function(){
						// $(".menu_l1").html("")
						var haha = element.node
						haha.forEach(function(value){
							var $a = $('<a href="#"></a>')
							var $img = $('<img>')
							var $h3 = $('<h3>')
							var $h4 = $('<h4>')
							$img.attr({ src: value.img})
							$h3.html(value.name)
							$h4.html(value.skuprice)
							$a.append($img)
							$a.append($h3)
							$a.append($h4)
							$div.append($a)
						})
						
					},
					function(){
						$div.html("")
					})
				});
			}			
		})
		var mySwiper = new Swiper ('.swiper-container', {
			autoplay:true,
			hashNavigation:true,
			loop: true, // 循环模式选项
			// 如果需要分页器
			pagination: {
			  el: '.swiper-pagination',
			},
			// 如果需要前进后退按钮
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
			
		})
		mySwiper.pagination.$el.addClass('MyClass');
		
	}),
	$(function(){
		var $tabs = $(".tit ul li");
		var $imgs = $(".tab ol li");
		$tabs.hover(function(){
			$imgs.eq($(this).index()).show().siblings().hide();
		})
	}),
	$(function(){
		var $tabs = $(".loftb .tit1 ul li");
		var $imgs = $(".loftb .tab11 ol li");
		$tabs.hover(function(){
			$imgs.eq($(this).index()).show().siblings().hide();
		})
	}),
	$(function(){
		var $tabs = $(".loft2 .tit1 ul li");
		var $imgs = $(".loft2 .tab11 ol li");
		$tabs.hover(function(){
			$imgs.eq($(this).index()).show().siblings().hide();
		})
	}),
	$(function(){
		var $tabs = $(".loft3 .tit1 ul li");
		var $imgs = $(".loft3 .tab11 ol li");
		$tabs.hover(function(){
			$imgs.eq($(this).index()).show().siblings().hide();
		})
	}),
	$(function(){
		var $tabs = $(".loft4 .tit1 ul li");
		var $imgs = $(".loft4 .tab11 ol li");
		$tabs.hover(function(){
			$imgs.eq($(this).index()).show().siblings().hide();
		})
	}),
	$(function(){
		var $tabs = $(".loft5 .tit1 ul li");
		var $imgs = $(".loft5 .tab11 ol li");
		$tabs.hover(function(){
			$imgs.eq($(this).index()).show().siblings().hide();
		})
	}),
	$(function(){
		var $tabs = $(".loft6 .tit1 ul li");
		var $imgs = $(".loft6 .tab11 ol li");
		$tabs.hover(function(){
			$imgs.eq($(this).index()).show().siblings().hide();
		})
	})
})

