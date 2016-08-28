$(document).ready(function(){
	articleContentsObj.selectContentsFun();
	articleContentsObj.commentObj.getComment();
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
		        	//console.log(result);
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
		},
		//评论
		commentObj : {
			
		},
		
};



//添加评论
articleContentsObj.commentObj.addComment = function(){
	
};
//查询评论
articleContentsObj.commentObj.getComment = function(){
	var noteId = common.getURLParams("noteId");
	$.ajax({
        type: "POST",
        url: basePath+"/comment/getComment.do",
        data: {"noteId":noteId},
        async: true,
        dataType: "json",
        success: function(result){
        	console.log(result);
        	if(result.success){
        		//程序执行正确
        		var list=result.data;
        		if(list == null || list == "null"){
        			alert("获取留言失败");
        		}
        		if(list.length ==0){
        			$("#commentItems").append("暂无评论")
        		}
        		var arrComment = [];
        		$(list).each(function(i){
        			/*arrComment[i] = list[i];*/
        			//第一层评论
        			if(this.cn_parent_comment_id == 0){
        				$("#commentItems").append(
        						'<div class="comment">'+
        						'	<a class="avatar"> <img src="baifu/common/comment/images/foot.png">'+
	        					'	</a>'+
	        					'	<div class="content-1 topStyle" id="'+this.cn_comment_id+'">'+
	        					'		<a class="author"> '+this.cn_user_name+' </a>'+
	        					'		<div class="metadata">'+
	        					'			<span class="date"> '+this.cn_comment_date+' </span>'+
	        					'		</div>'+
	        					'		<div class="text">'+this.cn_content+' </div>'+
	        					'		<div class="actions" >'+
	        					'			<a selfid="1" href="javascript:void(0)" class="reply">回复</a>'+
	        					'			<a href="javascript:void(0)" class="cancel" style="display: none;">取消回复</a>'+
	        					'		</div>'+
	        					'	</div>'+
	        					'</div>');
        				
        				arrComment[i] = this.cn_comment_id;
        				if(i==0){
        					list.shift();
        				}else{
        					list.splice(i-1,1);
        				}
        			}
        			
        		});
        		
        		articleContentsObj.commentObj.appendComment(list,arrComment);
        		/*console.log(JSON.stringify(arrComment));*/
			}else{
				//程序执行失败
				alert("获取留言失败");
			}
        }
	});
};
//递归调用
//评论盖楼
articleContentsObj.commentObj.appendComment =  function(list,arrComment){
	var arrComment1 = [];
	k = 0;
	for(var j=0;j<arrComment.length;j++){
		$(list).each(function(i){
			//alert(arrComment[i])
			if(this.cn_parent_comment_id == arrComment[j]){
				$("#"+this.cn_parent_comment_id).after(
						'<div class="comments"> '+
						'	<div class="comment">'+
						'		<a class="avatar"> <img src="baifu/common/comment/images/foot.png">'+
    					'		</a>'+
    					'		<div class="comments topStyle" id="'+this.cn_comment_id+'">'+
    					'			<a class="author"> '+this.cn_user_name+' </a>'+
    					'			<div class="metadata">'+
    					'				<span class="date"> '+this.cn_comment_date+' </span>'+
    					'			</div>'+
    					'			<div class="text">'+this.cn_content+' </div>'+
    					'			<div class="actions" >'+
    					'				<a selfid="1" href="javascript:void(0)" class="reply">回复</a>'+
    					'				<a href="javascript:void(0)" class="cancel" style="display: none;">取消回复</a>'+
    					'			</div>'+
    					'		</div>'+
    					'	</div>'+
    					'</div>');
				arrComment1[k] = this.cn_comment_id;
				k++;
				if(i==0){
					list.shift();
				}else{
					list.splice(i-1,1);
				}
				
			}
		});
		
	}
	if(list.length == 0){
		return;
	}
	console.log(JSON.stringify(list));
	articleContentsObj.commentObj.appendComment(list,arrComment1);
};