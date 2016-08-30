$(document).ready(function(){
	editObj.articleTypeFun.loadArticleType();
});

var editObj = {
		//查询文章类型
		articleTypeFun : {},
		//添加文章
		addArticleFun : {},
		giveUpFun : function(){
			$("#articleType").val("");//文章类型
			$("#articleTitle").val("");//文章标题
			UE.getEditor('editor').setContent("", "");
			$("#articleTag").val("");//文章标签
		}
};
//查询文章类型
editObj.articleTypeFun.loadArticleType = function(){
	$.ajax({
        type: "POST",
        url: basePath+"/edit/loadArticleType.do",
        data: {},
        async: true,
        dataType: "json",
        success: function(result){
        	if(result.success){
				//程序执行成功
        		var list = result.data;
        		$(list).each(function(){
        			$("#articleType").append('<option value="'+this.cn_notebook_code+'">'+this.cn_notebook_name+'</option>');
        		});
			}else{
				//程序执行失败
				alert("获取文章类型失败");
			}
        }
	});
};
//添加文章
editObj.addArticleFun.addArticle = function(isShare){
	var articleType = $("#articleType").val();//文章类型
	var articleTitle = $("#articleTitle").val();//文章标题
	var articleContent = UE.getEditor('editor').getContent();//获得我文章内容
	var articleTag = $("#articleTag").val();//文章标签
	var url = "";
	if(articleType == ""){
		alert("请为文章分类");
		return;
	}
	if(articleTitle == ""){
		alert("请补充标题");
		return;
	}
	if(articleContent == ""){
		alert("请补充内容");
		return;
	}
	if(!confirm("确认发表？")){
		return;
	}
	if(isShare == "Y"){
		//分享发表文章
		url = basePath+"/edit/addArticleForShare.do";
	}else{
		//私密发表文章
		url = basePath+"/edit/addArticleForPrivate.do";
	}
	$.ajax({
        type: "POST",
        url: url,
        data: {"cn_user_id":userId,"cn_notebook_code":articleType,"cn_note_title":articleTitle,"cn_note_body":articleContent,"cn_note_tag":articleTag},
        async: true,
        dataType: "json",
        success: function(result){
        	if(result.success){
				//程序执行成功
        		if(result.data){
        			alert("发表成功");
        			$("#articleType").val("");//文章类型
        			$("#articleTitle").val("");//文章标题
        			UE.getEditor('editor').setContent("", "");
        			$("#articleTag").val("");//文章标签
        		}
			}else{
				//程序执行失败
				alert(result.message);
			}
        }
	});
};



//UE.getEditor('editor').setHide()">隐藏编辑器
//UE.getEditor('editor').setShow()">显示编辑器
//实例化编辑器
//建议使用工厂方法getEditor创建和引用编辑器实例，如果在某个闭包下引用该编辑器，直接调用UE.getEditor('editor')就能拿到相关的实例
var ue = UE.getEditor('editor');

//编辑器是否获得焦点
function isFocus(e){
    alert(UE.getEditor('editor').isFocus());
    UE.dom.domUtils.preventDefault(e);
}
//编辑器失去焦点
function setblur(e){
    UE.getEditor('editor').blur();
    UE.dom.domUtils.preventDefault(e);
}
//插入给定的内容
function insertHtml() {
    var value = prompt('插入html代码', '');
    UE.getEditor('editor').execCommand('insertHtml', value);
}
//创建编辑器
function createEditor() {
    enableBtn();
    UE.getEditor('editor');
}
//获得整个html的内容
function getAllHtml() {
    alert(UE.getEditor('editor').getAllHtml());
}
//获得内容
function getContent() {
    var arr = [];
    arr.push("使用editor.getContent()方法可以获得编辑器的内容");
    arr.push("内容为：");
    arr.push(UE.getEditor('editor').getContent());
    alert(arr.join("\n"));
}
//获得带格式的纯文本
function getPlainTxt() {
    var arr = [];
    arr.push("使用editor.getPlainTxt()方法可以获得编辑器的带格式的纯文本内容");
    arr.push("内容为：");
    arr.push(UE.getEditor('editor').getPlainTxt());
    alert(arr.join('\n'));
}
//写入内容
function setContent(isAppendTo) {
    var arr = [];
    arr.push("使用editor.setContent('欢迎使用ueditor')方法可以设置编辑器的内容");
    UE.getEditor('editor').setContent('欢迎使用ueditor', isAppendTo);
    alert(arr.join("\n"));
}
//不可编辑
function setDisabled() {
    UE.getEditor('editor').setDisabled('fullscreen');
    disableBtn("enable");
}
//可以编辑
function setEnabled() {
    UE.getEditor('editor').setEnabled();
    enableBtn();
}
//获得当前选中的文本
function getText() {
    //当你点击按钮时编辑区域已经失去了焦点，如果直接用getText将不会得到内容，所以要在选回来，然后取得内容
    var range = UE.getEditor('editor').selection.getRange();
    range.select();
    var txt = UE.getEditor('editor').selection.getText();
    alert(txt);
}
//获得纯文本
function getContentTxt() {
    var arr = [];
    arr.push("使用editor.getContentTxt()方法可以获得编辑器的纯文本内容");
    arr.push("编辑器的纯文本内容为：");
    arr.push(UE.getEditor('editor').getContentTxt());
    alert(arr.join("\n"));
}
//判断是否有内容
function hasContent() {
    var arr = [];
    arr.push("使用editor.hasContents()方法判断编辑器里是否有内容");
    arr.push("判断结果为：");
    arr.push(UE.getEditor('editor').hasContents());
    alert(arr.join("\n"));
}
//使编辑器获得焦点
function setFocus() {
    UE.getEditor('editor').focus();
}
//   删除编辑器
function deleteEditor() {
    disableBtn();
    UE.getEditor('editor').destroy();
}
//
function disableBtn(str) {
    var div = document.getElementById('btns');
    var btns = UE.dom.domUtils.getElementsByTagName(div, "button");
    for (var i = 0, btn; btn = btns[i++];) {
        if (btn.id == str) {
            UE.dom.domUtils.removeAttributes(btn, ["disabled"]);
        } else {
            btn.setAttribute("disabled", "true");
        }
    }
}
function enableBtn() {
    var div = document.getElementById('btns');
    var btns = UE.dom.domUtils.getElementsByTagName(div, "button");
    for (var i = 0, btn; btn = btns[i++];) {
        UE.dom.domUtils.removeAttributes(btn, ["disabled"]);
    }
}
//获取草稿箱内容
function getLocalData () {
    alert(UE.getEditor('editor').execCommand( "getlocaldata" ));
}
//清空草稿箱
function clearLocalData () {
    UE.getEditor('editor').execCommand( "clearlocaldata" );
    alert("已清空草稿箱");
}

