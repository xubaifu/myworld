<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>ShareOne-知识共享管理控制台</title>
	<link rel="stylesheet" href="baifu/common/bootstrap-3.3.5-dist/css/bootstrap.min.css"/>
	<link rel="stylesheet" href="baifu/css/index.css"/>
	<script type="text/javascript" src="baifu/js/common/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="baifu/common/bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="baifu/js/common/basePath.js"></script>
	<script type="text/javascript" src="baifu/js/common/cookie.js"></script>
	<script type="text/javascript" src="baifu/js/common/common.js"></script>
</head>
<body>
<jsp:include page="manage_header.html"></jsp:include>
<div>
	<table class="table table-hover">
		
	</table>
</div>
	<div class="table table-hover">
	   <table class="table">
	      <caption>响应式表格布局</caption>
	      <thead>
	         <tr>
	            <th>产品</th>
	            <th>付款日期</th>
	            <th>状态</th>
	         </tr>
	      </thead>
	      <tbody>
	         <tr>
	            <td>产品1</td>
	            <td>23/11/2013</td>
	            <td>待发货</td>
	         </tr>
	         <tr>
	            <td>产品2</td>
	            <td>10/11/2013</td>
	            <td>发货中</td>
	         </tr>
	         <tr>
	            <td>产品3</td>
	            <td>20/10/2013</td>
	            <td>待确认</td>
	         </tr>
	         <tr>
	            <td>产品4</td>
	            <td>20/10/2013</td>
	            <td>已退货</td>
	         </tr>
	      </tbody>
	   </table>
	</div>  

</body>
</html>