<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>ShareOne-知识共享后台管理</title>
	<link rel="stylesheet" href="baifu/common/bootstrap-3.3.5-dist/css/bootstrap.min.css"/>
	<link rel="stylesheet" href="baifu/css/index.css"/>
	<link rel="stylesheet" href="baifu/css/adminPage.css"/>
	<script type="text/javascript" src="baifu/js/common/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="baifu/common/bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="baifu/js/common/echarts.min.js"></script>
	<script type="text/javascript" src="baifu/js/common/basePath.js"></script>
	<script type="text/javascript" src="baifu/js/common/common.js"></script>
	<script type="text/javascript">
		var loginName = "<%=session.getAttribute("userName") %>";
		var userId = "<%=session.getAttribute("userId") %>";
		var adminTab = "<%=session.getAttribute("adminTab") %>";
		//判断是否登录
		if(loginName == "null" || loginName == "" || loginName == null){
			location.href="login.jsp?url="+window.location.href;
		}else{
			//判断是否是管理员
			if(adminTab != 1){
				alert("权限不足");
				location.href="index.jsp";
			}
		}
		
	</script>
	<style type="text/css">
		a:hover {color: #FF0000} /* 未访问的链接 */
		a:visited {color: #00FF00} /* 已访问的链接 */
		a:link {color: #FF00FF} /* 鼠标移动到链接上 */
		a:active {color: #0000FF} /* 选定的链接 */
	</style>
</head>
<body>
<div>
	<!-- 页面头  start-->
	<div class="navbar navbar-inverse navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<button data-target=".navbar-collapse" data-toggle="collapse" type="button" class="navbar-toggle collapsed">
					<span class="sr-only"></span> <span class="icon-bar"></span> 
					<span class="icon-bar"></span> <span class="icon-bar"></span>
				</button>
				<div class="header-brand">
		           <a href="javascript:void(0)" class="navbar-brand hidden-sm">ShareOne管理控制台</a>
		      	</div>
			</div>
			<div class="navbar-collapse collapse" id="headerList">
				<ul class="nav navbar-nav navbar-right hidden-sm">
					<li id="loginBtn" class="forHide"><a href="javascript:void(0)">欢迎您，管理员</a></li>
					<li id="logout" class="forShow"><a href="javascript:void(0)">退出</a></li>
				</ul>
			</div>
		</div>
	</div>
	<!-- 页面头  end-->
	<!-- 页面左侧导航条 start -->
	<div class="container_left">
		<div class="leftsidebar_box">
			<div class="line"></div>
			<dl class="system_log">
				<dt>系统管理<img src="baifu/image/leftMenu/select_xl01.png"></dt>
				<dd class="first_dd"><a href="#tab_baseData" data-toggle="tab">基础数据</a></dd>
				<dd><a id="articleType" href="#tab_articleType" data-toggle="tab">文章分类</a></dd>
			</dl>
			<dl class="custom">
				<dt>用户管理<img src="baifu/image/leftMenu/select_xl01.png"></dt>
				<dd class="first_dd"><a id="registeredUsers" href="#tab_registeredUsers" data-toggle="tab">注册用户</a></dd>
				<dd><a href="#tab_updateUserPW" data-toggle="tab">修改用户密码</a></dd>
			</dl>
			<!-- <dl class="channel">
				<dt>渠道管理<img src="baifu/image/leftMenu/select_xl01.png"></dt>
				<dd class="first_dd"><a href="#">渠道主页</a></dd>
				<dd><a href="#" data-toggle="tab">渠道标准管理</a></dd>
				<dd><a href="#" data-toggle="tab">系统通知</a></dd>
				<dd><a href="#" data-toggle="tab">渠道商管理</a></dd>
				<dd><a href="#" data-toggle="tab">渠道商链接</a></dd>
			</dl>
			<dl class="app">
				<dt>APP管理<img src="baifu/image/leftMenu/select_xl01.png"></dt>
				<dd class="first_dd"><a href="#">App运营商管理</a></dd>
				<dd><a href="#" data-toggle="tab">开放接口管理</a></dd>
				<dd><a href="#" data-toggle="tab">接口类型管理</a></dd>
			</dl>
			<dl class="cloud">
				<dt>大数据云平台<img src="baifu/image/leftMenu/select_xl01.png"></dt>
				<dd class="first_dd"><a href="#" data-toggle="tab">平台运营商管理</a></dd>
			</dl> -->
			<!-- <dl class="syetem_management">
				<dt>系统管理<img src="baifu/image/leftMenu/select_xl01.png"></dt>
				<dd class="first_dd"><a href="#" data-toggle="tab">后台用户管理</a></dd>
				<dd><a href="#" data-toggle="tab">角色管理</a></dd>
				<dd><a href="#" data-toggle="tab">客户类型管理</a></dd>
				<dd><a href="#" data-toggle="tab">栏目管理</a></dd>
				<dd><a href="#" data-toggle="tab">微官网模板组管理</a></dd>
				<dd><a href="#" data-toggle="tab">商城模板管理</a></dd>
				<dd><a href="#" data-toggle="tab">微功能管理</a></dd>
				<dd><a href="#" data-toggle="tab">修改用户密码</a></dd>
			</dl> -->
			<dl class="source">
				<dt>素材库管理<img src="baifu/image/leftMenu/select_xl01.png"></dt>
				<dd class="first_dd"><a href="#tab_imageLiarbry" data-toggle="tab">图片库</a></dd>
				<dd><a href="#tab_linkbase" data-toggle="tab">链接库</a></dd>
				<!-- <dd><a href="#" data-toggle="tab">推广管理</a></dd> -->
			</dl>
			<dl class="statistics">
				<dt>统计分析<img src="baifu/image/leftMenu/select_xl01.png"></dt>
				<dd class="first_dd"><a href="#tab_userStatistics" data-toggle="tab">用户统计</a></dd>
				<dd><a href="#tab_articleStatistics" data-toggle="tab">文章统计</a></dd>
			</dl>
		</div>
	</div>
	<!-- 页面左侧导航条 end -->
	<!-- 页面主体 start -->
	<div class="adminPage">
		<div>
			<ol class="breadcrumb" id="breadcrumb">
				<li><a href="#">控制台</a></li>
				<!-- <li><a href="#">Home</a></li>
				<li class="active">十一月</li> -->
			</ol>
		</div>
			<div id="myTabContent" class="tab-content">
				<div class="tab-pane fade in" id="tab_baseData">
					基础数据
				</div>
				<div class="tab-pane fade in" id="tab_articleType">
					<table class="table table-hover" id="articleTypeTable1">
						<caption>知识库类别</caption>
						<thead>
							<tr>
								<th>名称</th>
								<th>编号</th>
								<th>描述</th>
								<th>操作</th>
							</tr>
						</thead>
						<tbody>
							
						</tbody>
					</table>
					<table class="table table-hover"  id="articleTypeTable2">
						<caption>文章类别</caption>
						<thead>
							<tr>
								<th>名称</th>
								<th>编号</th>
								<th>所属知识库</th>
								<th>描述</th>
								<th>操作</th>
							</tr>
						</thead>
						<tbody>
							
						</tbody>
					</table>
				</div>
				<div class="tab-pane fade in" id="tab_registeredUsers">
					<table class="table table-hover" id="registeredUsersTable">
						<caption>注册用户</caption>
						<thead>
							<tr>
								<th>用户名</th>
								<th>用户类型</th>
								<th>注册时间</th>
								<th>详细信息</th>
								<th>备注</th>
								<th>操作</th>
							</tr>
						</thead>
						<tbody>
							
						</tbody>
					</table>
				</div>
				<div class="tab-pane fade in" id="tab_updateUserPW">修改用户密码</div>
				<div class="tab-pane fade in" id="tab_imageLiarbry">图片库</div>
				<div class="tab-pane fade in" id="tab_linkbase">链接库</div>
				<div class="tab-pane fade in" id="tab_userStatistics">
					<div id="userStatisticsCharts" style="width: 700px;height:400px;"></div>
				</div>
				<div class="tab-pane fade in" id="tab_articleStatistics">文章统计</div>
			</div>
		</div>
</div>	
<!-- <div style="float: left;position: absolute;margin-left: 30%;margin-top: 150px;width: 600px;height: 400px;background-color: gray;">
sdxgfsdfghsdf
</div> -->

<!-- 模态框（Modal） -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×
				</button>
				<h4 class="modal-title" id="myModalLabel">
					修改类别信息
				</h4>
			</div>
			<div class="modal-body">
				<div class="form-group">
					<label for="inputPassword" class="col-sm-2 control-label">
						编码 </label>
					<div class="col-sm-10">
						<input class="form-control" type="text" disabled><br>
					</div>
				</div><br>
				<div class="form-group">
					<label class="col-sm-2 control-label">名称</label>
					<div class="col-sm-10">
						<input class="form-control" type="text" ><br>
					</div>
				</div><br>
				<div class="form-group">
					<label class="col-sm-2 control-label">所属知识库</label>
					<div class="col-sm-10">
						<select class="form-control">
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>
						<br>
					</div>
				</div><br>
				<div class="form-group">
					<label class="col-sm-2 control-label">描述</label>
					<div class="col-sm-10">
						<input class="form-control" type="text"><br>
					</div>
				</div>
			</div>
			<div class="modal-footer-admin">
				<button type="button" class="btn btn-default" data-dismiss="modal">
					关闭
				</button>
				<button id="submitButton" type="button" class="btn btn-primary">
					提交更改
				</button>
			</div>
		</div><!-- /.modal-content -->
	</div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<!-- 页面主体 end -->
<script type="text/javascript" src="baifu/js/leftMenu.js"></script>	
<script type="text/javascript" src="baifu/js/admin.js"></script>
<script type="text/javascript" src="baifu/js/adminCharts.js"></script>
</body>
</html>