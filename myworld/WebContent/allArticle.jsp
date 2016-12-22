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
</head>
<body>
<jsp:include page="header.html"></jsp:include>
<div class="jumbotron masthead">
	<div class="row" style="margin-top: 30px;width:100%;">
		<div class="col-lg-4" style="float: right;margin-right: 40px;">
			<div class="input-group">
			  	<input id="searchContent" type="text" class="form-control" aria-label="..." >
				<div class="input-group-btn">
				  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">请选择 <span class="caret"></span></button>
				  <ul class="dropdown-menu dropdown-menu-right">
				    <li role="separator" class="divider"></li>
				    <li><a id="TITLESearch" href="javascript:">标题搜索</a></li> 
				    <li role="separator" class="divider"></li>
				    <li><a id="TAGSearch" href="javascript:">标签搜索</a></li>
				    <li role="separator" class="divider"></li>
				    <li><a id="CONTENTSearch" href="javascript:">内容搜索</a></li>
				  </ul>
				  <!-- 隐藏域，存放搜索类型 -->
				  <input type="text" id="searchType" value="" style="display: none;">
				</div><!-- /btn-group -->
			</div><!-- /input-group -->
		</div><!-- /.col-lg-6 -->
		<div class="col-xs-2" style="float: right;">
		  	<select class="form-control" id="articleType" onchange="allArticleObj.onchangeFun();">
					<option value="">--全部--</option>
			</select>
		</div>
	</div><!-- /.row -->
		<div class="content">
			<div class="loadMore-3">
				<!-- <div class="tab"> -->
					<span class="loadMore-left">全部文章&nbsp;&nbsp;&nbsp;</span>
					<ul id="myTab" class="nav nav-tabs">
						<li class="active"><a href="#articles1" data-toggle="tab">最新发表</a></li>
						<li><a href="#articles2" data-toggle="tab">最热访问</a></li>
					</ul>
				<!-- </div> -->
			</div>
			<div class="tab-content">
				<div class="tab-pane fade in active" id="articles1">
					<div class="kn_cloumn ">
						<div class="kn_left w830px whitebk">
							<ul id="seachForDate" class="list02">
								<!-- <li class="clearfix">
									
									<div class="ahover clearfix">
										<a target="_blank" class="firstdiv firstc19" href="#"> 
											<span class="glyphicon glyphicon-gift" style="color: rgb(193, 114, 242); font-size: 15px;">
												嵌入式开发
											</span>
										</a> 
										<span class="twodiv">
											<div data-mod="popu_224_lib_19" class="csdn-tracking-statistics">
												<a target="_blank" title="从单片机编程到操作系统产生" class="title" href="#" contentid="38986">
													从单片机编程到操作系统产生
													&nbsp;&nbsp;&nbsp; 
												</a>
											</div> 
											<span class="infors clearfix"> 
												<span class="inforleft">访问&nbsp;&nbsp;
													<em class="r">
														1028
														&nbsp;&nbsp;
													</em>次
												</span> 
												<span class="inforright">
														2016-8-22&nbsp;&nbsp;由&nbsp;&nbsp;
														<em class="r">张浩&nbsp;&nbsp;</em>
														发表到&nbsp;&nbsp;
														<a target="_blank" href="#">体系编程</a>
												</span>
											</span>
										</span>
									</div>
								</li> -->
							</ul>
						<div class="loadMore-4"><a id="loadForHotShareByDate" href="javascript:">加载更多 →</a></div>
						</div>
					</div>
				</div>
				<div class="tab-pane fade" id="articles2">
					<div class="kn_cloumn ">
						<div class="kn_left w830px whitebk">
							<ul id="seachForTimes" class="list02">
								<!-- <li class="clearfix">
									<div class="ahover clearfix">
										<a target="_blank" class="firstdiv firstc19" href="#"> 
											<span class="glyphicon glyphicon-gift" style="color: rgb(193, 114, 242); font-size: 15px;">
												嵌入式开发
											</span>
										</a> 
										<span class="twodiv">
											<div data-mod="popu_224_lib_19" class="csdn-tracking-statistics">
												<a target="_blank" title="从单片机编程到操作系统产生" class="title" href="#" contentid="38986">
													从单片机编程到操作系统产生
													&nbsp;&nbsp;&nbsp; 
												</a>
											</div> 
											<span class="infors clearfix"> 
												<span class="inforleft">访问&nbsp;&nbsp;
													<em class="r">
														1028
														&nbsp;&nbsp;
													</em>次
												</span> 
												<span class="inforright">
														2016-8-22&nbsp;&nbsp;由&nbsp;&nbsp;
														<em class="r">张浩&nbsp;&nbsp;</em>
														发表到&nbsp;&nbsp;
														<a target="_blank" href="#">体系编程</a>
												</span>
											</span>
										</span>
									</div>
								</li> -->
							</ul>
						<div class="loadMore-4"><a id="loadForHotShareByTimes" href="javascript:">加载更多 →</a></div>
						</div>
					</div>
				</div>
			</div>
		</div>
<jsp:include page="fotter.html"></jsp:include>
</div>
<script type="text/javascript" src="baifu/js/allArticle.js"></script>
</body>
</html>