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
	<script type="text/javascript">
		var loginName = "<%=session.getAttribute("userName") %>";
	</script>
</head>
	<body>
	<jsp:include page="header.html"></jsp:include>
	<!-- 登录 -->
	<div class="box" id="dl">
		<div class="login-box">
			<div class="login-title text-center">
				<h1>
					<small>登录</small>
				</h1>
			</div>
			<div class="login-content ">
				<div class="form">
					<!-- <form method="post" action="#"> -->
						<div class="form-group">
							<div class="col-xs-12  ">
								<div class="input-group">
									<span class="input-group-addon">
										<span class="glyphicon glyphicon-user"></span>
									</span> 
									<input type="text" placeholder="用户名" class="form-control" name="loginUserName" id="loginUserName">
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-12  ">
								<div class="input-group">
									<span class="input-group-addon">
										<span class="glyphicon glyphicon-lock">
										</span>
									</span> 
									<input type="password" placeholder="密码" class="form-control" name="loginPassword" id="loginPassword">
								</div>
							</div>
						</div>
						<div class="form-group form-actions">
							<div class="col-xs-4 col-xs-offset-4 ">
								<button class="btn btn-sm btn-info" type="button" id="login">
									<span class="glyphicon glyphicon-off"></span> 登录
								</button>
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-6 link">
								<p class="text-center remove-margin">
									<small>忘记密码？</small> <a href="javascript:void(0)"><small id="findPassword">找回</small></a>
								</p>
							</div>
							<div class="col-xs-6 link">
								<p class="text-center remove-margin">
									<small>还没注册?</small> <a href="javascript:void(0)" id="toRegister"><small>注册</small></a>
								</p>
							</div>
						</div>
					<!-- </form> -->
				</div>
			</div>
		</div>
	</div>
	<!-- 注册 -->
	<div class="box" id="zc" style="display: none;">
		<div class="login-box">
			<div class="login-title text-center">
				<h1>
					<small>注册</small>
				</h1>
			</div>
			<div class="register-content ">
				<div class="form">
					<!-- <form method="post" action="#"> -->
						<div class="form-group">
							<div class="col-xs-12  ">
								<div class="input-group">
									<span class="input-group-addon">
										<span class="glyphicon glyphicon-user"> </span>
									</span> 
									<input type="text" placeholder="用户名" class="form-control" name="registerUserName" id="registerUserName">
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-12  ">
								<div class="input-group">
									<span class="input-group-addon">
										<span class="glyphicon glyphicon-lock"></span>
									</span> 
									<input type="password" placeholder="密码" class="form-control" name="registerPassword" id="registerPassword">
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-12  ">
								<div class="input-group">
									<span class="input-group-addon">
										<span class="glyphicon glyphicon-lock"></span>
									</span> 
									<input type="password" placeholder="确认密码" class="form-control" name="confirmPassword" id="confirmPassword">
								</div>
							</div>
						</div>
						<div class="form-group form-actions">
							<div class="col-xs-4 col-xs-offset-4 btn-register">
								<button class="btn btn-sm btn-info" type="button" id="register"> 
									<span class="glyphicon glyphicon-off"></span> 注册
								</button>
								<button class="btn btn-sm btn-info" type="button" id="back">
									<span class="glyphicon glyphicon-off"></span> 返回
								</button>
							</div>
						</div>
					<!-- </form> -->
				</div>
			</div>
		</div>
	</div>
	<!-- 修改密码 -->
	<div class="box" id="xgmm" style="display: none;">
		<div class="login-box">
			<div class="login-title text-center">
				<h1>
					<small>修改密码</small>
				</h1>
			</div>
			<div class="register-content ">
				<div class="form">
						<div class="form-group">
							<div class="col-xs-12  ">
								<div class="input-group">
									<span class="input-group-addon">
										<span class="glyphicon glyphicon-user"></span>
									</span> 
									<input type="password" placeholder="原密码" class="form-control" name="oldPassword" id="oldPassword">
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-12  ">
								<div class="input-group">
									<span class="input-group-addon">
										<span class="glyphicon glyphicon-lock">
										</span>
									</span> 
									<input type="password" placeholder="新密码" class="form-control" name="newPassword" id="newPassword">
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-12  ">
								<div class="input-group">
									<span class="input-group-addon">
										<span class="glyphicon glyphicon-lock"></span>
									</span> 
									<input type="password" placeholder="确认密码" class="form-control" name="finalPassword" id="finalPassword">
								</div>
							</div>
						</div>
						<div class="form-group form-actions">
							<div class="col-xs-4 col-xs-offset-4 ">
								<button class="btn btn-sm btn-info" type="button" id="changePassword">
									<span class="glyphicon glyphicon-off"></span> 确认
								</button>
							</div>
						</div>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="baifu/js/login.js"></script>
	</body>
</html>