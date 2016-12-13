$(document).ready(function () {
	//var userName = cookieFunction.getCookie("userName");
	//console.log(loginName);
	if(loginName == "null" || loginName == "" || loginName == null){
		$(".forHide").show();
	}else{
		$("#loginName").text(loginName);
		$(".forShow").show();
		$(".forHide").hide();
	}
	//绑定事件
	// 登出
	$("#logout").click(function(){
		logoutOrChangePW.logout();
	});
	
	// 修改密码
	$("#changePW").click(function(){
		logoutOrChangePW.changepwd();
	});
	//发表文章
	/*$("#writeNote").click(function(){
		logoutOrChangePW.toWriteNote();
	});*/
	//登录
	$("#loginBtn").click(function(){
		logoutOrChangePW.toLogin();
	});
	//注册
	$("#registerBtn").click(function(){
		logoutOrChangePW.toRegister();
	});
	//我的空间
	/*$("#myHome").click(function(){
		logoutOrChangePW.toMyHome();
	});*/
	//个人中心
	$("#personalCenter").click(function(){
		logoutOrChangePW.toPersonalCenter();
	});
	//加载头部信息
	loadHeadTitle.loadHeadTitleFun();
});

//退出和修改密码模块
var logoutOrChangePW = {
		//修改密码
		changePW : {},
		//退出登录
		logout : function (){
			//注销session
			$.post(
					basePath+"/login/logout.do",
					{},
					function(result){
						if(result.success){
							//程序执行成功
							//cookieFunction.delCookie("userName");
							location.href="login.jsp";
						}else{
							//程序执行失败
							alert(result.message);
						}
					}
					);
			},
			//跳到登录页面
			toLogin : function(){
				location.href="login.jsp?url="+window.location.href;
			},
			//跳到注册页面
			toRegister : function(){
				location.href="login.jsp?type=register";
			},
			//跳到密码修改页面
			changepwd : function(){
				location.href="login.jsp?type=change";
			},
			/*//跳到我的空间
			toMyHome : function(){
				if(loginName == "null" || loginName == "" || loginName == null){
					location.href="login.jsp";
				}else{
					location.href="myWorld.jsp";
				}
			},*/
			/*//发表文章
			toWriteNote : function(){
				location.href="edit.jsp";
			},*/
			//个人中心
			toPersonalCenter : function(){
				//location.href="#";
				alert("未开启");
			}
		
};
//加载页面头部的各个模块信息
var loadHeadTitle = {
		loadHeadTitleFun : function(){
			$.post(
					basePath+"/login/loadHeadTitleFun.do",
					{},
					function(result){
						/*console.log(result);*/
						if(result.success){
							//程序执行成功
							var list = result.data;
							$(list).each(function(index){
								//拼接各个知识模块
								var ul = '<ul class="nav navbar-nav">'+
										'			<li class="dropdown">'+
										'		<a class="dropdown-toggle" data-toggle="dropdown">'+
										'			'+this.cn_notebook_type_name+'<b class="caret"></b>'+
										'		</a>'+
										'		<ul class="dropdown-menu" id="typeCode'+this.cn_notebook_type_code+'">'+
										'		</ul>'+
										'	</li>'+
										'</ul>'
								$("#headerList").append(ul);
								//解析cn_notebook_code字段
								var arrCode = JSON.stringify(this.cn_notebook_code).split(","); 
								var arrName = JSON.stringify(this.cn_notebook_name).split(","); 
								//拼接文章分类模块
								for(var i=0;i<arrCode.length;i++){
									var code = arrCode[i].replace(/\"/gmi,"");
									var name = arrName[i].replace(/\"/gmi,"");
									var li = '<li id="noteCote'+code+'"><a href="#">'+name+'</a></li><li class="divider"></li>';
									$("#typeCode"+this.cn_notebook_type_code).append(li);
								}
								//为头部的各个模块绑定事件
								$("#typeCode"+this.cn_notebook_type_code+" a").not(".dropdown-toggle").click(function(){
									var title = $(this).text();
									//对汉字编码
									title = encodeURI(encodeURI(title));
									location.href="allSharePage.jsp?type="+title;
								});
							});
							
						}else{
							//程序执行失败
							alert(result.message);
						}
					}
				);
		}
};