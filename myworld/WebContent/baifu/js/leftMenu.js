
$(document).ready(function(){
			//控制左侧菜单栏
			$(".leftsidebar_box dt").css({"background-color":"#22282E"});
			$(".leftsidebar_box dt img").attr("src","baifu/image/leftMenu/select_xl01.png");
			$(function(){
				$(".leftsidebar_box dd").hide();
				$(".leftsidebar_box dt").click(function(){
					$(".leftsidebar_box dt").css({"background-color":"#22282E"});
					$(this).css({"background-color": "#4b4b4b"});
					$(this).parent().find('dd').removeClass("menu_chioce");
					$(".leftsidebar_box dt img").attr("src","baifu/image/leftMenu/select_xl01.png");
					$(this).parent().find('img').attr("src","baifu/image/leftMenu/select_xl.png");
					$(".menu_chioce").slideUp(); 
					$(this).parent().find('dd').slideToggle();
					$(this).parent().find('dd').addClass("menu_chioce");
				});
			});
		});