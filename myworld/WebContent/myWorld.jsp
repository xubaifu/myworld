<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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
	<script type="text/javascript">
		var loginName = "<%=session.getAttribute("userName") %>";
		var userId = "<%=session.getAttribute("userId") %>";
		if(loginName == "null" || loginName == "" || loginName == null){
			location.href="login.jsp?url="+window.location.href;
		}
	</script>
</head>
<body>
<jsp:include page="header.html"></jsp:include>
	<div class="jumbotron masthead">
		<div class="header_top">
			<div class="banner_myworld">
				<p class="text_myworld">
					我的世界，我做主
				</p>
			</div>
		</div>

		<div class="content">
			<div class="loadMore-1">
				<div>
					<span class="glyphicon glyphicon-home loadMore-left"> 我的知识库</span>
					<!-- <span class="loadMore-left"></span> -->
					<span class="loadMore-right"><a href="myArticle.jsp?type=all">更多>></a></span>
				</div>
			</div>
			<div class="caseList">
			<ul id="myNote">
					<!-- <li><a href="#">
							<div class="caseThum">
								<img width="300" height="180" align="SVG水纹波动的按钮特效"
									src="baifu/image/jquery-1.jpg">
							</div>
							<div class="caseBottom">
								<div class="caseName">SVG水纹波动的按钮特效</div>
								<div class="caseInfo">
									<div class="caseIcon ll">1000</div>
									<div class="caseTime">2016-07-30</div>
								</div>
							</div>
					</a></li>
					<li><a href="#">
							<div class="caseThum">
								<img width="300" height="180" align="CSS3动画-奔跑吧！绵羊"
									src="baifu/image/jquery-8.jpg">
							</div>
							<div class="caseBottom">
								<div class="caseName">CSS3动画-奔跑吧！绵羊</div>
								<div class="caseInfo">
									<div class="caseIcon ll">1000</div>
									<div class="caseTime">2016-07-17</div>
								</div>
							</div>
					</a></li> -->
				</ul>
			</div>
			<!-- <div class="loadMore"><a>加载更多 →</a></div> -->
			<div class="loadMore-1">
				<div>
					<span class="glyphicon glyphicon-th-list loadMore-left"> 我的分享</span>
					<!-- <span class="loadMore-left">我的分享</span> -->
					<span class="loadMore-right"><a href="myArticle.jsp?type=share">更多>></a></span>
				</div>
			</div>
			
			<div class="caseList">
			<ul id="myShare">
					<!-- <li><a href="#">
							<div class="caseThum">
								<img width="300" height="180" align="SVG水纹波动的按钮特效"
									src="baifu/image/jquery-9.jpg">
							</div>
							<div class="caseBottom">
								<div class="caseName">SVG水纹波动的按钮特效</div>
								<div class="caseInfo">
									<div class="caseIcon ll">1000</div>
									<div class="caseTime">2016-07-30</div>
								</div>
							</div>
					</a></li>
					<li><a href="#">
							<div class="caseThum">
								<img width="300" height="180" align="CSS3动画-奔跑吧！绵羊"
									src="baifu/image/jquery-12.jpg">
							</div>
							<div class="caseBottom">
								<div class="caseName">CSS3动画-奔跑吧！绵羊</div>
								<div class="caseInfo">
									<div class="caseIcon ll">1000</div>
									<div class="caseTime">2016-07-17</div>
								</div>
							</div>
					</a></li> -->
				</ul>
			</div>
			<!-- <div class="loadMore"><a>加载更多 →</a></div> -->
			<div class="loadMore-1">
				<div>
					<span class="glyphicon glyphicon-book loadMore-left"> 我的收藏</span>
					<!-- <span class="loadMore-left">我的收藏</span> -->
					<span class="loadMore-right"><a href="myArticle.jsp?type=collect">更多>></a></span>
				</div>
			</div>
			
			<div class="caseList">
				<ul id="myCollection">
					<!-- <li><a href="#">
							<div class="caseThum">
								<img width="300" height="180" align="SVG水纹波动的按钮特效"
									src="baifu/image/jquery-13.jpg">
							</div>
							<div class="caseBottom">
								<div class="caseName">SVG水纹波动的按钮特效</div>
								<div class="caseInfo">
									<div class="caseIcon ll">1000</div>
									<div class="caseTime">2016-07-30</div>
								</div>
							</div>
					</a></li>
					<li><a href="#">
							<div class="caseThum">
								<img width="300" height="180" align="CSS3动画-奔跑吧！绵羊"
									src="baifu/image/jquery-16.jpg">
							</div>
							<div class="caseBottom">
								<div class="caseName">CSS3动画-奔跑吧！绵羊</div>
								<div class="caseInfo">
									<div class="caseIcon ll">1000</div>
									<div class="caseTime">2016-07-17</div>
								</div>
							</div>
					</a></li> -->
				</ul>
			</div>
			<div class="loadMore-1">
				<div>
					<span class="glyphicon glyphicon-list-alt loadMore-left" > 热门推荐</span>
					<!-- <span class="loadMore-left">热门推荐</span> -->
					<span class="loadMore-right"><a href="allArticle.jsp">更多>></a></span>
				</div>
			</div>
			
			<div class="caseList">
				<ul id="hotShareByDate">
					<!-- <li><a href="#">
							<div class="caseThum">
								<img width="300" height="180" align="SVG水纹波动的按钮特效"
									src="baifu/image/jquery-13.jpg">
							</div>
							<div class="caseBottom">
								<div class="caseName">SVG水纹波动的按钮特效</div>
								<div class="caseInfo">
									<div class="caseIcon ll">1000</div>
									<div class="caseTime">2016-07-30</div>
								</div>
							</div>
					</a></li>
					<li><a href="#">
							<div class="caseThum">
								<img width="300" height="180" align="CSS3动画-奔跑吧！绵羊"
									src="baifu/image/jquery-16.jpg">
							</div>
							<div class="caseBottom">
								<div class="caseName">CSS3动画-奔跑吧！绵羊</div>
								<div class="caseInfo">
									<div class="caseIcon ll">1000</div>
									<div class="caseTime">2016-07-17</div>
								</div>
							</div>
					</a></li> -->
				</ul>
				<ul id="hotShareByTimes">
				</ul>
			</div>
			<!-- <div class="loadMore"><a href="#">加载更多 →</a></div> -->
		</div>			
		
		
	<jsp:include page="fotter.html"></jsp:include>		
	</div>
<script type="text/javascript" src="baifu/js/myWorld.js"></script>
</body>
</html>