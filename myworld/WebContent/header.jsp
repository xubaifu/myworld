<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
	<body>
	<div class="navbar navbar-inverse navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<button data-target=".navbar-collapse" data-toggle="collapse" type="button" class="navbar-toggle collapsed">
					<span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> 
					<span class="icon-bar"></span> <span class="icon-bar"></span>
				</button>
				<div class="header-brand">
		           <a href="index.jsp">
		               <img class="brand-logo" src="baifu/image/logo6.png">
		           </a>
		      	</div>
		           <!-- <a href="index.jsp" class="navbar-brand hidden-sm">我的世界</a> -->
				
			</div>
			<div class="navbar-collapse collapse">
				<ul class="nav navbar-nav">
					<li>
						<i class="fa fa-fire job-hot">
						<!-- 导航条 -->
						</i>
						<a href="#"></a>
					</li>
				</ul>
				<ul class="nav navbar-nav navbar-right hidden-sm">
					<li id="loginBtn" class="forHide"><a href="#">登录</a></li>
					<li id="userName" class="forShow" style="display: none;"><a href="#"></a></li>
					<li id="registerBtn" class="forHide"><a href="#">注册</a></li>
					<li id="logout" class="forShow" style="display: none;"><a href="#">退出</a></li>
					<li id="changePW" class="forShow" style="display: none;"><a href="#">修改密码</a></li>
				</ul>
			</div>
		</div>
	</div>
	</body>
<script type="text/javascript" src="baifu/js/header.js"></script>
</html>