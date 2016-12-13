$(document).ready(function(){
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
	//绑定点击事件
	$("dd a").click(function(){
		adminObj.adminFunction.tabFun(this);
	});
	$("#articleType").click(function(){
		adminObj.articleTypeFunction.getLibraryType();
		adminObj.articleTypeFunction.getArticleType();
	});
	$("#registeredUsers").click(function(){
		adminObj.userManageObj.getUserFunction();
	});
	
	$("#loginBtn a").text("管理员："+loginName);
});	

var adminObj = {
		adminFunction : {
			//点击切换面包屑
			tabFun : function(obj){
				var breadcrumb1 = $(obj).parent().parent().find("dt").text();
				var breadcrumb2 = $(obj).text();
				//var href = $(obj).attr("href");
				$("#breadcrumb").children().remove();
				$("#breadcrumb").append("<li>控制台</li><li>"+breadcrumb1+"</li><li class='active'>"+breadcrumb2+"</li>");
			
			}
		},
		//获取文章分类信息
		articleTypeFunction : {
			//获取一级分类信息
			getLibraryType : function(){
				$.ajax({
			        type: "POST",
			        url: basePath+"/admin/getLibraryType.do",
			        data: {},
			        async: true,
			        dataType: "json",
			        success: function(result){
			        	if(result.success){
			        		$("#articleTypeTable1 tbody").children().remove();
			        		var list = result.data;
			        		if(list.length > 0){
			        			var length = list.length;
					        	for(var i = 0; i < length; i++){
					        		$("#articleTypeTable1 tbody").append("<tr>"+
											"<td>"+list[i].cn_notebook_type_name+"</td>"+
											"<td>"+list[i].cn_notebook_type_code+"</td>"+
											"<td>"+list[i].cn_notebook_type_desc+"</td>"+
											"<td><a href='#'>修改</a>&nbsp;&nbsp;<a href='#'>删除</a></td>"+
							        	"</tr>");
					        	}
			        		}
			        	}else{
			        		alert("请求失败");
			        	}
			        }
				});
			},
			//获取二级分类信息
			getArticleType : function(){
				$.ajax({
			        type: "POST",
			        url: basePath+"/admin/getArticleType.do",
			        data: {},
			        async: true,
			        dataType: "json",
			        success: function(result){
			        	if(result.success){
			        	  $("#articleTypeTable2 tbody").children().remove();
			        		var list = result.data;
			        		if(list.length > 0){
					        	var list = result.data;
					        	var length = list.length;
					        	for(var i = 0; i < length; i++){
					        		$("#articleTypeTable2 tbody").append("<tr>"+
											"<td>"+list[i].cn_notebook_name+"</td>"+
											"<td>"+list[i].cn_notebook_code+"</td>"+
											"<td>"+list[i].cn_notebook_type_name+"</td>"+
											"<td>"+list[i].cn_notebook_desc+"</td>"+
											"<td><a href='#'>修改</a>&nbsp;&nbsp;<a href='#'>删除</a></td>"+
							        	"</tr>");
					        	}
				        		}
				        }else{
				        	alert("请求失败");
				        }
			        }
				});
			}
		},
		//用户管理模块
		userManageObj : {
			
			//获取用户信息
			getUserFunction : function(){
				$.ajax({
			        type: "POST",
			        url: basePath+"/admin/getUserFunction.do",
			        data: {},
			        async: true,
			        dataType: "json",
			        success: function(result){
			        	console.log(result)
			        	if(result.success){
			        	  $("#registeredUsersTable tbody").children().remove();
			        		var list = result.data;
			        		if(list.length > 0){
					        	var list = result.data;
					        	var length = list.length;
					        	for(var i = 0; i < length; i++){
					        		$("#registeredUsersTable tbody").append("<tr>"+
											"<td>"+list[i].cn_user_name+"</td>"+
											"<td>"+list[i].cn_user_token+"</td>"+
											"<td>"+list[i].cn_user_register_time+"</td>"+
											"<td><a href='javascript:void(0)'>点击查看</a></td>"+
											"<td>"+list[i].cn_user_desc+"</td>"+
											"<td><a href='#'>管理</a></td>"+
							        	"</tr>");
					        	}
				        		}
				        }else{
				        	alert("请求失败");
				        }
			        }
				});
			}
		}
};	