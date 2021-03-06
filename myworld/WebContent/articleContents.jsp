<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>ShareOne-知识共享</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
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
		/* if(loginName == "null" || loginName == "" || loginName == null){
			location.href="login.jsp";
		} */
	</script>
	<style type="text/css" media="print, screen">  
		label {
		    font-weight: bold;
		}
		a {
			font-family: Microsoft YaHei;
		}
		#articleComment {
			width: 830px;
			/* height: 1500px; */
			/* overflow: auto; */
		}
</style> 
</head>
<body>
<jsp:include page="header.html"></jsp:include>
<div class="jumbotron masthead">

		<div class="content">
			<div class="tab-content">
				<div class="title">
					<span>
						<span>文章类别:</span>
						<span id="notebookType"></span>
						<a target="_blank" href="" id="articleType"></a>
					</span>
				</div>
				<div class="tab-pane fade in active">
					<div class="kn_cloumn ">
						<div class="kn_left w830px whitebk">
							
							<div class="title-author">
								<div class="collectBtn">
									<a href="javascript:articleContentsObj.collectArticleFun();">
										<span id="collection" class="glyphicon glyphicon-heart" style="color: gray;"> 收藏</span>
										<span id="myArticle" class="glyphicon glyphicon-star" style="display: none;color: red;"> 我的文章</span>
									</a>
								</div>
								<br>
								<span id="title" class="title-span">
									
								</span>
								<br>
								<div class="title-author-span">
									<span style="float: left;"><strong>作者：</strong><span id="author">baifu</span></span>
									<span style="float: none;"><strong>日期	：</strong><span id="update">2015-12-12</span></span>
									<span style="float: right;"><strong>浏览量：</strong><span id="times">125</span></span>
								</div>
							</div>
							<div id="contents" class="articleContents">
								
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>

		<div id="articleComment" class="commentDiv">
			<div style="margin-bottom: 20px;" class="ui threaded comments" id="commentItems">
				<div style="font-size: 2rem; padding-bottom: 10px; border-bottom: 1px solid #DFDFDF;" class="text">全部评论</div>
				</div>
				<div id="commentFrom">
					<form class="ui reply form" id="replyBoxAri">
						<div class="ui large form ">
							<div class="contentField field">
								<textarea id="commentContent"></textarea>
								<!-- <label for="commentContent" class="commentContentLabel">Content</label> -->
							</div>
							<div >
								<button type="button" class="btn btn-primary" onclick="articleContentsObj.commentObj.addComment('')">提交评论</button>
							</div>
						</div>
					</form>
				</div>
		</div>


		<jsp:include page="fotter.html"></jsp:include>
	</div>
<script type="text/javascript" src="baifu/js/articleContents.js"></script>
</body>
</html>