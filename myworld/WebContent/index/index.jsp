<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>hello world</title>
<script type="text/javascript">
	var username = "<%=session.getAttribute("username")%>";
	var id = "<%=session.getId()%>";
</script>
</head>
<body>
	<div>
		<h1>欢迎进入主页</h1>
		<span id="username"><%=session.getAttribute("username")%></span>
		<form action="../Servlet" method="post">
			<input type="submit" value="退出"/>
		</form>
	</div>
</body>
<script type="text/javascript" src="../baifu/js/common/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="../baifu/js/index.js"></script>
</html>