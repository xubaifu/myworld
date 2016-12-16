<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>ShareOne-知识共享</title>
	<link rel="stylesheet" href="baifu/common/bootstrap-3.3.5-dist/css/bootstrap.min.css"/>
	<link rel="stylesheet" href="baifu/css/index.css"/>
	<script type="text/javascript" src="baifu/js/common/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="baifu/common/bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="baifu/js/common/basePath.js"></script>
	<script type="text/javascript" src="baifu/js/common/cookie.js"></script>
	<script type="text/javascript" src="baifu/js/common/common.js"></script>
	<script type="text/javascript" src="baifu/js/index.js"></script>
	<script type="text/javascript">
		var loginName = "<%=session.getAttribute("userName") %>";
		var userId = "<%=session.getAttribute("userId") %>";
		var thirdPartCode = common.getURLParams("code");
		if(loginName == "null" && thirdPartCode != null){
			$.ajax({
		        type: "POST",
		        url: basePath+"/login/baidu.do",
		        data: {"code" : thirdPartCode},
		        async: true,
		        dataType: "json",
		        success: function(result){
		        	if(result.success){
		        		location.href="index.jsp";
		        	}else{
		        		alert("请求失败");
		        	}
		        }
			});    
		}
	</script>
</head>
<body>
	<jsp:include page="header.html"></jsp:include>
	<div class="jumbotron masthead">
		<div class="header_top">
			<div class="banner">
				<p class="text">
					ShareOne
				</p>
				<p class="text1">
					在这里，你将变得不一样
				</p>
			</div>
			
		</div>

		<div class="number">
			<div class="container">
				<div class="h1">AngularJS</div>
				<div class="h6">为克服HTML在构建应用上的不足而设计!</div>
				<div class="total">
					<div class="app">
						<svg class="svg" version="1.1" height="130" width="270" xmlns="http://www.w3.org/2000/svg">
						  <path d="M 65 10 A 55 55, 0, 1, 0, 65 120 H 205 A 55 55, 0, 1, 0, 205 10 H 65"/>
						</svg>
						<div>						
							<div class="h6">端对端的解决方案</div>					
							<span class="count" id="appCount">数据绑定、基本模板标识符</span>
						</div>
					</div>
					<div class="apk">
						<svg class="svg" version="1.1" height="130" width="270" xmlns="http://www.w3.org/2000/svg">
						  <path d="M 65 10 A 55 55, 0, 1, 0, 65 120 H 205 A 55 55, 0, 1, 0, 205 10 H 65"/>
						</svg>
						<div>						
							<div class="h6">双向数据绑定</div>					
							<span class="count" id="apkCount">表单验证、路由、深度链接</span>
						</div>
					</div>
					<div class="api">
						<svg class="svg" version="1.1" height="130" width="270" xmlns="http://www.w3.org/2000/svg">
						  <path d="M 65 10 A 55 55, 0, 1, 0, 65 120 H 205 A 55 55, 0, 1, 0, 205 10 H 65"/>
						</svg>
						<div>						
							<div class="h6">构建CRUD应用</div>					
							<span class="count" id="apiCount">组件重用、依赖注入</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="header_top">
			<div class="banner1">
				<p class="text">
					改变未来
				</p>
				<p class="text1">
					软件定义世界，我们洞悉软件
				</p>
			</div>
		</div>

		<div class="number">
		        <div class="echarts">
		       		<div class="h1">echarts</div>
		       		<p class="text1">
					绚丽的特效  丰富的图表类型
					</p>
					<p class="text1">
					深度的交互式数据探索
					</p>
					<p class="text1">
					多维数据的支持以及丰富的视觉编码手段
					</p>
		        </div>
		        <div class="pic"></div>
		</div>

		<div class="header_top">
			<div class="banner2">
				<p class="text">
					连接一切
				</p>
				<p class="text1">
					未来，网络连接一切
				</p>
			</div>
		</div>

		<div class="number">
		    <div class="box-3">
		        <div class="row update-cont">
		            <div class="col-md-4 pic2">
		            </div>
		            
		            <dl class="col-md-8 info">
		                <dt>Bootstrap</dt>
		                <dd>简洁、直观、强悍的前端开发框架，让web开发更迅速、简单。</dd>
		                <dt>MongoDB</dt>
		                <dd>高性能、易部署、易使用，存储数据非常方便，为WEB应用提供可扩展的高性能数据存储解决方案。</dd>
		                <dt>NodeJS</dt>
		                <dd>基于 Chrome V8 引擎的 JavaScript 运行环境，事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。</dd>
		            </dl>
		        </div>
			</div>
		</div>

		<div class="header_top">
			<div class="banner3">
				<p class="text">
					互联网+
				</p>
				<p class="text1">
					万物皆可以互联，互联成全生态 
				</p>
				<!-- <a id="goToMyWorld" class="btn btn-primary" href="javascript:gotoMyHome();">进入我的世界</a> -->
				<div class="loadMore-2"><a id="goToMyWorld" class="btn btn-primary" href="javascript:gotoMyHome();">进入我的Share</a></div>
			</div>
		</div>

		<jsp:include page="fotter.html"></jsp:include>

	</div>
<script type="text/javascript">
function gotoMyHome(){
	if(loginName == "null" || loginName == "" || loginName == null){
		location.href="login.jsp";
	}else{
		location.href="myWorld.jsp";
	}
}
</script>
</body>
</html>