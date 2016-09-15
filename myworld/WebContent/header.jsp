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
					<span class="sr-only"></span> <span class="icon-bar"></span> 
					<span class="icon-bar"></span> <span class="icon-bar"></span>
				</button>
				<div class="header-brand">
		          <!--  <a href="index.jsp">
		               <img class="brand-logo" src="baifu/image/logo6.png">
		           </a> -->
		           
		           <a href="index.jsp" class="navbar-brand hidden-sm">ShareOne</a>
		      	</div>
		           <!-- <a href="index.jsp" class="navbar-brand hidden-sm">我的世界</a> -->
			</div>
			<div class="navbar-collapse collapse" id="headerList">
				<!-- <ul class="nav navbar-nav" id="header1"> -->
					<!-- <li class="hidden-sm hidden-md" id="JavaScript"><a href="#">JavaScript</a></li>
					<li class="hidden-sm hidden-md" id="Echarts"><a href="#">Echarts</a></li> -->
				<!-- </ul> -->
				
				<!-- <ul class="nav navbar-nav" id="header2">
					<li class="dropdown">
						<a  id="other" href="#" class="dropdown-toggle" data-toggle="dropdown">
							其他模块<b class="caret"></b>
						</a>
						<ul class="dropdown-menu" id="otherLi">
							<li id="MongoDB"><a href="#">MongoDB</a></li>
							<li class="divider"></li>
							<li id="JavaSE"><a href="#">JavaSE</a></li>
						</ul>
					</li>
				</ul> -->
				<!-- 搜索框 -->
				<ul class="nav navbar-nav navbar-right hidden-sm">
					<li class="dropdown">
						<a target="_blank" href="allArticle.jsp">
							<span class="glyphicon glyphicon-search" style="color:#9d9d9d"></span>
						</a>
					</li>
				</ul>
				<!-- 登录模块 -->
				<ul class="nav navbar-nav navbar-right hidden-sm">
					<li id="loginBtn" class="forHide"><a href="#">登录</a></li>
					<li id="userName" class="forShow" style="display: none;">
						<ul class="nav navbar-nav">
							<li class="dropdown">
								<a  href="#" class="dropdown-toggle" data-toggle="dropdown">
									欢迎您&nbsp;:&nbsp;&nbsp;<span id="loginName"></span>
									<b class="caret"></b>
								</a>
								<ul class="dropdown-menu">
									<li id="myHome"><a target="_blank" href="myWorld.jsp">我的空间</a></li>
									<li class="divider"></li>
									<li id="writeNote"><a target="_blank" href="edit.jsp">发表文章</a></li>
									<li class="divider"></li>
									<li id="personalCenter"><a href="#">个人中心</a></li>
									<li class="divider"></li>
									<li id="changePW"><a href="#">修改密码</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li id="registerBtn" class="forHide"><a href="#">注册</a></li>
					<li id="logout" class="forShow" style="display: none;"><a href="javascript:void(0)">退出</a></li>
				</ul>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="baifu/js/header.js"></script>
	</body>
</html>