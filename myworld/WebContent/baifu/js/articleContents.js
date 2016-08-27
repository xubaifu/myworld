$(document).ready(function(){
	articleContentsObj.selectContentsFun();
});
//定义查询文章内容模块
var articleContentsObj = {
		selectContentsFun : function(){
			var noteId = common.getURLParams("noteId");
			if(noteId == "" || noteId == null || noteId == "null"){
				alert("请求不合法！");
				return;
			}
			$.ajax({
		        type: "POST",
		        url: basePath+"/articleContent/selectContentsFun.do",
		        data: {"noteId":noteId},
		        async: true,
		        dataType: "json",
		        success: function(result){
		        	console.log(result);
		        	if(result.success){
						//程序执行成功
		        		var list = result.data;
		        		$(list).each(function(){
		        			$("#notebookType").text(this.cn_notebook_type_name+"--");
		        			$("#articleType").attr("href","allSharePage.jsp?type="+this.cn_notebook_name);
		        			$("#articleType").text(this.cn_notebook_name);
		        			$("#title").text(this.cn_note_title);
		        			$("#author").text(this.cn_user_name);
		        			$("#update").text(this.cn_note_last_modify_time);
		        			$("#times").text(this.cn_note_times);
		        			$("#contents").append(this.cn_note_body);
		        			if(this.cn_user_id == userId){
		        				$("#collection").remove();
								$("#myArticle").show();
								$("#collection").parent().attr("href","javascript:void(0);");
		        				return;
		        			}
		        		});
		        		//判断当前是否有用户登录或者当前登录用户是否已收藏该文章
		        		articleContentsObj.checkCollectionFun();
					}else{
						//程序执行失败
						alert("获取文章内容失败");
					}
		        }
			});
		},
		//收藏文章
		collectArticleFun : function(){
			var noteId = common.getURLParams("noteId");
			$.ajax({
		        type: "POST",
		        url: basePath+"/articleContent/collectArticleFun.do",
		        data: {"noteId":noteId,"userId":userId},
		        async: true,
		        dataType: "json",
		        success: function(result){
		        	if(result.success){
		        		//程序执行正确
						var map=result.data;
						if(map.flag==0){
							$("#collection").attr("style","color: red;");
							/*$("#collection").text(" 取消收藏");*/
							$("#collection").parent().attr("href","javascript:articleContentsObj.cancelCollectionFun();");
						}else{
							alert("收藏失败");
						}
					}else{
						//程序执行失败
						alert(result.message);
					}
		        }
			});
		},
		//判断某篇文章是否被用户收藏
		checkCollectionFun : function(){
			//如果用户未登录。直接返回
			if(userId == "" || userId == null || userId == "null"){
				return;
			}
			var noteId = common.getURLParams("noteId");
			$.ajax({
		        type: "POST",
		        url: basePath+"/articleContent/checkCollectionFun.do",
		        data: {"noteId":noteId,"userId":userId},
		        async: true,
		        dataType: "json",
		        success: function(result){
		        	if(result.success){
		        		//程序执行正确
						var count=result.data;
						if(count != 0){
							$("#collection").attr("style","color: red;");
							/*$("#collection").text(" 取消收藏");*/
							$("#collection").parent().attr("href","javascript:articleContentsObj.cancelCollectionFun();");
						}
					}else{
						//程序执行失败
						alert(result.message);
					}
		        }
			});
		},
		//取消收藏
		cancelCollectionFun : function(){
			var noteId = common.getURLParams("noteId");
			$.ajax({
		        type: "POST",
		        url: basePath+"/articleContent/cancelCollectionFun.do",
		        data: {"noteId":noteId,"userId":userId},
		        async: true,
		        dataType: "json",
		        success: function(result){
		        	if(result.success){
		        		//程序执行正确
		        		var map=result.data;
						if(map.flag==0){
							$("#collection").attr("style","color: gray;");
							/*$("#collection").text(" 收藏");*/
							$("#collection").parent().attr("href","javascript:articleContentsObj.collectArticleFun();");
						}else{
							alert("取消收藏失败");
						}
					}else{
						//程序执行失败
						alert(result.message);
					}
		        }
			});
		}
};