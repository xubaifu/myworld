<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>hello world</title>
</head>
<script type="text/javascript">
	var id = "<%=session.getId()%>";
</script>
<body>
	<div>
		<form action="../Servlet" method="post">
			用户名：<input name="username" type="text"/>
			密码：<input name="password" type="password"/>
			<input name="type" type="text" value="LOGIN" hidden="true">
			<input type="submit" value="登录"/>
		</form>
	</div>
</body>
<script type="text/javascript" src="../baifu/js/common/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="../baifu/js/index.js"></script>
</html>