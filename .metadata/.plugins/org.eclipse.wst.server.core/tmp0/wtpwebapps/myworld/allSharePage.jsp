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
	</script>
</head>
<body>
<jsp:include page="header.html"></jsp:include>
	<div class="jumbotron masthead">
		<div class="header_top">
			<div class="banner_myworld">
				<p class="text_myworld" id="allShareTitle">
					我的世界，我做主
				</p>
			</div>
		</div>
		<div class="content">
			<div class="loadMore-1">
				<div>
					<span class="loadMore-left">热门推荐&nbsp;&nbsp;&nbsp;</span>
					<ul id="myTab" class="nav nav-tabs">
						<li class="active"><a href="#hotShare1" data-toggle="tab">最新推荐</a></li>
						<li><a href="#hotShare2" data-toggle="tab">最热推荐</a></li>
					</ul>
				</div>
			</div>
			
			<div class="tab-content">
				<div class="tab-pane fade in active" id="hotShare1">
					<div class="caseList">
						<ul id="hotShareByDate">
							
						</ul>
					</div>
					<div class="loadMore"><a id="loadForHotShareByDate" href="javascript:allShareObj.loadMore.loadMoreForAllShare('date')">加载更多 →</a></div>
				</div>
				<div class="tab-pane fade" id="hotShare2">
					<div class="caseList">
						<ul id="hotShareByTimes">
							
						</ul>
					</div>
					<div class="loadMore"><a id="loadForHotShareByTimes" href="javascript:allShareObj.loadMore.loadMoreForAllShare('times')">加载更多 →</a></div>
				</div>
			</div>
		</div>			
		
	<jsp:include page="fotter.html"></jsp:include>
	</div>
	<script type="text/javascript" src="baifu/js/allSharePage.js"></script>
</body>
</html>