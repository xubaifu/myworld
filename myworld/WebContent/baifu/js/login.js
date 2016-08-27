/**
 * 页面初始化后，绑定函数。
 */
$(function(){
	//判断请求类型，是不是注册
	if(common.getURLParams("type") == "register"){
		$("#dl").hide();
		$("#zc").show();
		$("#xgmm").hide();
	//修改密码
	}else if(common.getURLParams("type") == "change"){
		$("#dl").hide();
		$("#zc").hide();
		$("#xgmm").show();
	}
	//显示注册
	$("#toRegister").click(function(){
		$("#dl").hide();
		$("#zc").show();
	});
	//取消注册
	$("#back").click(function(){
		$("#zc").hide();
		$("#dl").show();
	});
	// 注册
	$("#register").click(function(){
		// 调用业务方法
		loginOrRegister.registerFunction.register();
	});
	
	// 登录
	$("#login").click(function(){
		loginOrRegister.loginFunction.login();
	});
	// 修改密码
	$("#changePassword").click(function(){
		loginOrRegister.changePW.changepwd();
	});
	
	
});

//登录和注册模块
var loginOrRegister = {
		//登录模块
		loginFunction : {},
		//注册模块
		registerFunction : {},
		//修改密码
		changePW : {},
};

//注册
loginOrRegister.registerFunction.register = function(){
	// 客户端验证
	var userName=$("#registerUserName").val();
	//var nickName=$("#nickname").val();
	var password=$("#registerPassword").val();
	var finalPassword=$("#confirmPassword").val();
	// 校验帐号，3-20数字字母下划线组合
	var reg=/^\w{3,20}$/;
	if(!reg.test(userName)){
		alert("用户名请输入3-20数字字母下划线组合");
		return;
	}
	// 校验密码不小于6位
	if(password.length<6){
		alert("密码长度不能少于六位");
		return;
	}
	// 校验确认密码
	if(password!=finalPassword){
		alert("密码不一致");
		return;
	}
	// 注册
	$.post(
			basePath+"/login/register.do",
			{"cn_user_name":userName,
			 "cn_user_password":password},
			 //ajax默认把Controller的返回值封装到request中，所以，request会访问到session
			 //data、success属性
			function(result){
				 console.log(result);
				 if(result.success){
					 // 代码执行成功
					 if(result.data){
						 // 注册成功
						 alert("注册成功");
						 $("#zc").hide();
						 $("#dl").show();
						 $("#zc input").val("");
						 $("#loginUserName").val(userName);
						 $("#loginPassword").val(password);
					 }else{
						 // 注册失败
						 alert("用户名存在");
					 }
				 }else{
					 // 代码执行失败
					 alert("注册失败");
				 }
				
			}
	);
	// alert("注册成功.");
	// $("#zc").attr("class","sig sig_out");
	// $("#dl").attr("class","log log_in");
};


// 登陆
loginOrRegister.loginFunction.login = function() {
	// 客户端验证
	// 判断用户名是否为空
	var userName=$("#loginUserName").val();
	if(!userName){
		alert("输入用户名");
		return;
	}
	// 判断密码是否为空
	var password=$("#loginPassword").val();
	if(!password){
		alert("输入密码");
		return;
	}
	// 校验用户名和密码是否正确
	$.post(
			basePath+"/login/login.do",
			{"userName":userName,"password":password},
			function(result){
				console.log(result);
				if(result.success){
					//程序执行正确
					var map=result.data;
					if(map.flag==0){
						// 跳转到edit.jsp页面
						if(common.getURLParams("url") =="" ||common.getURLParams("url") =="null" ||common.getURLParams("url") ==null){
							location.href="index.jsp";
						}else{
							location.href=common.getURLParams("url");
						}
						
						//cookieFunction.addCookie("userID",map.userID,10);
						//cookieFunction.addCookie("userName",map.userName,10);
					}else if(map.flag==1){
						alert("用户名错误");
					}else{
						alert("密码错误");
					}
				}else{
					// 程序执行报错
					alert(result.message);
				}
			}
	);
};
/**
 * 修改密码
 */
loginOrRegister.changePW.changepwd = function(){
	var lastPassword=$("#oldPassword").val();
	var newPassword=$("#newPassword").val();
	var finalPassword=$("#finalPassword").val();
	
	if(lastPassword.length==0){
		alert("密码不能为空");
		return;
	}
	
	if(newPassword.length<6){
		alert("密码长度不能少于六位");
		return;
	}
	
	if(finalPassword!=newPassword){
		alert("密码不一致");
		return;
	}
	
	$.post(
			basePath+"/login/update.do",
			{"oldPassword":lastPassword,"newPassword":newPassword,},
			function(result){
				if(result.success){
					//代码执行正确
					var map=result.data;
					if(map.flag==0){
						//修改成功
						alert("修改成功.");
						location.href="index.jsp";
					}else if(map.flag==2){
						alert("密码错误");
					}else{
						alert("请登录");
						$("#dl").show();
						$("#zc").hide();
						$("#xgmm").hide();
					}
				}else{
					//代码执行错误
					alert(result.message);
				}
			}
	);
};
