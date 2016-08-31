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
			location.href="login.jsp";
		}
	</script>
</head>
<body>
<jsp:include page="header.html"></jsp:include>
<div class="jumbotron masthead">
	<div class="row" style="margin-top: 30px;width:100%;">
		<div class="col-lg-4" style="float: right;margin-right: 40px;">
			<div class="input-group">
			  <input id="searchContent" type="text" class="form-control" aria-label="...">
				<div class="input-group-btn">
				  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">请选择 <span class="caret"></span></button>
				  <ul class="dropdown-menu dropdown-menu-right">
				    <li role="separator" class="divider"></li>
				    <li><a href="javascript:myAllArticleObj.search('TITLE',true)">标题搜索</a></li> 
				    <li role="separator" class="divider"></li>
				    <li><a href="javascript:myAllArticleObj.search('TAG',true)">标签搜索</a></li>
				    <li role="separator" class="divider"></li>
				    <li><a href="javascript:myAllArticleObj.search('CONTENT',true)">内容搜索</a></li>
				  </ul>
				  <!-- 隐藏域，存放搜索类型 -->
				  <input type="text" id="searchType" value="" style="display: none;">
				</div><!-- /btn-group -->
			</div><!-- /input-group -->
		</div><!-- /.col-lg-6 -->
		<div class="col-xs-2" style="float: right;">
		  	<select class="form-control" id="articleType" onchange="myAllArticleObj.onchangeFun();">
					<option value="">--全部--</option>
			</select>
		</div>
	</div><!-- /.row -->
	<div class="content">
		<div class="loadMore-3">
			<!-- <div class="tab"> -->
				<span class="loadMore-left">我的文章&nbsp;&nbsp;&nbsp;</span>
				<ul id="myTab" class="nav nav-tabs">
					<li id="allArticlesTab"><a href="#myAllArticles" data-toggle="tab">所有文章</a></li>
					<li id="myShareTab"><a href="#myShare" data-toggle="tab">我的分享</a></li>
					<li id="myCollectTab"><a href="#myCollection" data-toggle="tab">我的收藏</a></li>
				</ul>
			<!-- </div> -->
		</div>
		<div class="tab-content">
			<div class="tab-pane fade in active" id="myAllArticles">
				<div class="kn_cloumn ">
					<div class="kn_left w830px whitebk">
						<ul id="seachForAllArticles" class="list02">
						</ul>
					<div class="loadMore-4"><a id="loadForAllArticles" href="javascript:myAllArticleObj.loadMore.loadMoreForAllShare('all')">加载更多 →</a></div>
					</div>
				</div>
			</div>
			<div class="tab-pane fade" id="myShare">
				<div class="kn_cloumn ">
					<div class="kn_left w830px whitebk">
						<ul id="seachForMyShare" class="list02">
						</ul>
					<div class="loadMore-4"><a id="loadForForMyShare" href="javascript:myAllArticleObj.loadMore.loadMoreForAllShare('share')">加载更多 →</a></div>
					</div>
				</div>
			</div>
			<div class="tab-pane fade" id="myCollection">
				<div class="kn_cloumn ">
					<div class="kn_left w830px whitebk">
						<ul id="seachForMyCollection" class="list02">
						</ul>
					<div class="loadMore-4"><a id="loadForMyCollection" href="javascript:myAllArticleObj.loadMore.loadMoreForAllShare('collect')">加载更多 →</a></div>
					</div>
				</div>
			</div>
		</div>
	</div>
<jsp:include page="fotter.html"></jsp:include>
</div>
<script type="text/javascript" src="baifu/js/myArticle.js"></script>
</body>
</html>