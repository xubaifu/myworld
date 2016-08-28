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
//根据id值判断该评论的父评论，如果id为空，则该评论为文章的根评论
articleContentsObj.commentObj.addComment = function(id){
	var noteId = common.getURLParams("noteId");
	//如果用户未登录。直接返回
	if(userId == "" || userId == null || userId == "null"){
		alert("请先登录");
		return;
	}
	var content= "";
	//根据id判断需要取哪个评论框中的值
	if(id==""){
		content = $("#commentFrom #commentContent").val();
	}else{
		content = $("#replyComment #commentContent").val();
	}
	$.ajax({
        type: "POST",
        url: basePath+"/comment/addComment.do",
        data: {"cn_note_id":noteId,"cn_user_name":loginName,"cn_content":content,"cn_parent_comment_id":id,"cn_user_id":userId},
        async: true,
        dataType: "json",
        success: function(result){
        	console.log(result);
        	if(result.success){
        		var map=result.data;
				if(map.flag==0){
					//重新加载评论
					$("#commentItems").children().remove();
					articleContentsObj.commentObj.getComment();
					$("#commentFrom").show();
					$("#commentFrom #commentContent").val("")
				}else{
					alert("留言失败");
				}
        	}else{
        		alert("留言失败");
        	}
        		
        }
	});
};
//查询评论
articleContentsObj.commentObj.getComment = function(){
	//首先获取文章id
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
        			$("#commentItems").append("暂无评论");
        		}
        		var arrComment = [];
        		//先获取所有的根评论（第一层评论）
        		var k = 0;
        		var list1 = list;
        		$(list).each(function(i){
        			//alert(i)
        			/*arrComment[i] = list[i];*/
        			//第一层评论（父评论id为空的）
        			//alert(this.cn_parent_comment_id)
        			if(this.cn_parent_comment_id == ""){
        				//alert(0)
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
	        					'			<a selfid="1" href="javascript:articleContentsObj.commentObj.replyComment(\''+this.cn_comment_id+'\')" class="reply">回复</a>'+
	        					'			<a href="javascript:articleContentsObj.commentObj.cancelReplyComment(\''+this.cn_comment_id+'\')" class="cancel" style="display: none;">取消回复</a>'+
	        					'		</div>'+
	        					'	</div>'+
	        					'</div>');
        				//将该评论的id值取出，存到arrComment数组中
        				arrComment[k] = this.cn_comment_id;
        				k++;
        				//在list中删掉已经加载的评论
        				console.log(JSON.stringify(list));
        				if(i==0){
        					list1.shift();
        				}else{
        					list1.splice(i-1,1);
        				}
        			}
        			
        		});
        		/*console.log(arrComment);
        		console.log(JSON.stringify(list1));*/
        		//后面的每一层评论都需要递归调用该方法。不断的向下加载，知道所有的评论加载完成
        		articleContentsObj.commentObj.appendComment(list1,arrComment);
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
	debugger;
	//用于存放当前评论的id值
	var arrComment1 = [];
	var list1 = list;
	//arrComment1的自增下标
	k = 0;
	//遍历list中的cn_parent_comment_id是否在arrComment，若在，则将该评论拼接到上一条评论的下面
	for(var j=0;j<arrComment.length;j++){
		$(list1).each(function(i){
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
  					'				<a selfid="1" href="javascript:articleContentsObj.commentObj.replyComment(\''+this.cn_comment_id+'\')" class="reply">回复</a>'+
  					'				<a href="javascript:articleContentsObj.commentObj.cancelReplyComment(\''+this.cn_comment_id+'\')" class="cancel" style="display: none;">取消回复</a>'+
  					'			</div>'+
  					'		</div>'+
  					'	</div>'+
  					'</div>');
				//将当前评论的id存到数组中
				arrComment1[k] = this.cn_comment_id;
				//数组下标增一
				k++;
				//在list中删除该评论
				if(i==0){
					list1.shift();
				}else{
					list1.splice(i-1,1);
				}
				
			}
		});
		
	}
	//递归结束条件，所有评论加载完成后调用停止
	
	if(list1.length == 0){
		return;
	}else if(arrComment1.length == 0){
		console.log(JSON.stringify(list1));
	}
	//递归
	/*console.log(arrComment1);
	console.log(JSON.stringify(list1));*/
	articleContentsObj.commentObj.appendComment(list1,arrComment1);
};
//回复评论
articleContentsObj.commentObj.replyComment = function(id){
	//显示评论框
	$("#replyComment").remove();
	$("#"+id+" .cancel").show();
	$("#commentFrom").hide();
	$("#"+id).append(
			'<div id="replyComment">'+
			'	<form class="ui reply form" id="replyBoxAri">'+
			'		<div class="ui large form ">'+
			'			<div class="contentField field">'+
			'				<textarea id="commentContent"></textarea>'+
			'			</div>'+
			'			<div >'+
			'				<button type="button" class="btn btn-primary" onclick="articleContentsObj.commentObj.addComment(\''+id+'\')">提交评论</button>'+
			'			</div>'+
			'		</div>'+
			'	</form>'+
			'</div>');
};
//取消回复评论
articleContentsObj.commentObj.cancelReplyComment = function(id){
	//隐藏评论框
	$("#commentFrom").show();
	$("#"+id+" .cancel").hide();
	$("#replyComment").remove();
};
