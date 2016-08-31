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
	<script type="text/javascript" charset="utf-8" src="baifu/common/ueditor1_4_3_3-utf8-jsp/utf8-jsp/ueditor.config.js"></script>
    <script type="text/javascript" charset="utf-8" src="baifu/common/ueditor1_4_3_3-utf8-jsp/utf8-jsp/ueditor.all.min.js"> </script>
    <!--这里加载的语言文件会覆盖你在配置项目里添加的语言类型，比如你在配置项目里配置的是英文，这里加载的中文，那最后就是中文-->
    <script type="text/javascript" src="baifu/common/ueditor1_4_3_3-utf8-jsp/utf8-jsp/lang/zh-cn/zh-cn.js"></script>

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
	
	<div class="editerDiv">
		<div class="form-group">
			<h3><small>文章分类</small></h3>
			<select class="form-control" id="articleType">
				<option value="">--请选择--</option>
			</select>
		</div>
		<div class="form-group">
			<h3><small>文章标题</small></h3>
			<input type="text" placeholder="标题" id="articleTitle" class="form-control">
		</div>
		<h3><small>文章内容</small></h3>
	   	<div>
	   		<script id="editor" type="text/plain" style="width:830px;height:500px;"></script>
	   	</div>
	   	<div class="form-group">
			<h3><small>文章标签（添加Tag，分享之后你的内容能被更多人看到）</small></h3>
			<input type="text" placeholder="多个标签之间用“,”分隔" id="articleTag" class="form-control">
		</div>
		<div><span>注：公开发表您的文章将被所有人看到，私密发表您的文章只能自己访问。</span></div>
	   	<div class="saveBtn">
	   		<button type="button" class="btn btn-primary" onclick="editObj.addArticleFun.addArticle('Y')">公开发表</button>
	   		<button type="button" class="btn btn-primary" onclick="editObj.addArticleFun.addArticle('N')">私密发表</button>
	   		<button type="button" class="btn btn-primary" onclick="javascript:editObj.giveUpFun()">放弃</button>
	   	</div>
	   	 
	</div>
	
	
	<!-- <br><br><br><br><br> -->
	<!-- <div id="btns">
	    <div>
	        <button onclick="getAllHtml()">获得整个html的内容</button>
	        <button onclick="getContent()">获得内容</button>
	        <button onclick="setContent()">写入内容</button>
	        <button onclick="setContent(true)">追加内容</button>
	        <button onclick="getContentTxt()">获得纯文本</button>
	        <button onclick="getPlainTxt()">获得带格式的纯文本</button>
	        <button onclick="hasContent()">判断是否有内容</button>
	        <button onclick="setFocus()">使编辑器获得焦点</button>
	        <button onmousedown="isFocus(event)">编辑器是否获得焦点</button>
	        <button onmousedown="setblur(event)" >编辑器失去焦点</button>
	
	    </div>
	    <div>
	        <button onclick="getText()">获得当前选中的文本</button>
	        <button onclick="insertHtml()">插入给定的内容</button>
	        <button id="enable" onclick="setEnabled()">可以编辑</button>
	        <button onclick="setDisabled()">不可编辑</button>
	        <button onclick=" UE.getEditor('editor').setHide()">隐藏编辑器</button>
	        <button onclick=" UE.getEditor('editor').setShow()">显示编辑器</button>
	        <button onclick=" UE.getEditor('editor').setHeight(300)">设置高度为300默认关闭了自动长高</button>
	    </div>
	
	    <div>
	        <button onclick="getLocalData()" >获取草稿箱内容</button>
	        <button onclick="clearLocalData()" >清空草稿箱</button>
	    </div>
	
	</div>
	<div>
	    <button onclick="createEditor()">
	    创建编辑器</button>
	    <button onclick="deleteEditor()">
	    删除编辑器</button>
	</div> -->
<jsp:include page="fotter.html"></jsp:include>
</div>
<script type="text/javascript" src="baifu/js/edit.js"></script>
</body>
</html>