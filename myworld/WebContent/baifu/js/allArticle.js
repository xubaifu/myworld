$(document).ready(function(){
	//查询文章类型
	allArticleObj.articleTypeFun.loadArticleType();
	//获取文章信息
	allArticleObj.findAllShareNote.findShareNoteFunction(allArticleObj.begin,allArticleObj.pageSize,"","TITLE");
});

//定义所有文章查询及展示模块
var allArticleObj = {
		beginForDate : 0,//最新发表开始页
		beginForTimes : 0,//最热访问开始页
		begin : 0,//默认的起始页
		pageSize : 10,
		findAllShareNote : {},
		loadMore : {},
		articleTypeFun : {},
		//搜索函数  flag参数为true代表了该方法是搜索方法
		search : function(searchType,flag){
			//将搜索类型添加到隐藏域
			$("#searchType").val(searchType);
			if(flag){
				//清空上次加载的内容
				$("#seachForDate").children().remove();
				$("#seachForTimes").children().remove();
			}
			//执行查询方法
			allArticleObj.findAllShareNote.findShareNoteFunction(allArticleObj.begin,allArticleObj.pageSize,"",searchType);
		},
		//文章类型改变是执行该方法
		onchangeFun : function(){
			//清空上次加载的内容
			$("#seachForDate").children().remove();
			$("#seachForTimes").children().remove();
			//执行查询方法
			allArticleObj.findAllShareNote.findShareNoteFunction(allArticleObj.begin,allArticleObj.pageSize,"","");
		}
};

//按条件查询所有文章
//loadType:查询类型——按日期查询（data），按访问量查询（times）
//searchType ： 搜索类型--按标题搜索（TITLE），按标签搜索（TAG），按内容搜索（CONTENT）
allArticleObj.findAllShareNote.findShareNoteFunction = function(begin,pageSize,loadType,searchType){
	//获取查询条件
	var searchContent = $("#searchContent").val();
	var articleType = $("#articleType").val();
	if(searchType ==""){
		searchType = "TITLE";
	}
	$.post(
			basePath+"/allArticleObj/findAllArticle.do",
			{"articleType":articleType,"begin":begin,"pageSize":pageSize,"loadType":loadType,"searchContent":searchContent,"searchType":searchType},
			 //ajax默认把Controller的返回值封装到request中，所以，request会访问到session
			 //data、success属性
			function(result){
				console.log(result);
				 if(result.success){
					// alert("成功");
					 var list = result.data;
					 for(var i=0;i<list.length;i++){
						//判断是否有数据，若没有则已加载完毕
						 if(list[0].length == 0){
							 //alert("已加载所有文章");
							 var li1 = '<li class="finishLoad" style="margin-left: auto; margin-right: auto;text-align:center"><span>已加载所有文章<span></li>';
							 //var li2 = '<li style="margin-left: auto; margin-right: auto;text-align:center"><span>暂未找到任何满足搜索条件的文章<span></li>';
							 //默认情况下（非搜索）文章加载完
							 if(loadType == "date"){
								 $("#seachForDate .finishLoad").remove();
								 $("#seachForDate").append(li1);
							 }
							 if(loadType == "times"){
								 $("#seachForTimes .finishLoad").remove();
								 $("#seachForTimes").append(li1);
							 }
							 if(loadType == ""){
								 $(".finishLoad").remove();
								 $("#seachForTimes").append(li1);
								 $("#seachForDate").append(li1);
							 }
							 
							 return;
						 }
						 $(list[i]).each(function(index){
							 //对汉字进行编码
							 var articleType = title = encodeURI(encodeURI(this.cn_notebook_name));
							var li = 
							'<li class="clearfix">'+
							'<div class="ahover clearfix">'+
							'	<a target="_blank" class="firstdiv firstc19" href="allSharePage.jsp?type='+articleType+'"> '+
							'		<span class="glyphicon glyphicon-gift" style="color: rgb(193, 114, 242); font-size: 15px;">'+
							'			'+this.cn_notebook_name+''+
							'		</span>'+
							'	</a> '+
							'	<span class="twodiv">'+
							'		<div data-mod="popu_224_lib_19" class="csdn-tracking-statistics">'+
							'			<a target="_blank" title="'+this.cn_note_title+'" class="title" href="articleContents.jsp?noteId='+this.cn_note_id+'" contentid="38986">'+
							'				'+this.cn_note_title+''+
							'				&nbsp;&nbsp;&nbsp; '+
							'			</a>'+
							'		</div> '+
							'		<span class="infors clearfix"> '+
							'			<span class="inforleft">访问&nbsp;&nbsp;'+
							'				<em class="r">'+
							'					'+this.cn_note_times+''+
							'					&nbsp;&nbsp;'+
							'				</em>次'+
							'			</span> '+
							'			<span class="inforright">'+
							'					'+this.cn_note_last_modify_time+'&nbsp;&nbsp;由&nbsp;&nbsp;'+
							'					<em class="r">'+this.cn_user_name+'&nbsp;&nbsp;</em>'+
							'					发表到&nbsp;&nbsp;'+
							'					<a target="_blank" href="allSharePage.jsp?type='+articleType+'">'+this.cn_notebook_name+'</a>'+
							'			</span>'+
							'		</span>'+
							'	</span>'+
							'</div>'+
							'</li>';
							//如果loadType为空，则默认加载最新推荐和最热推荐的前八条
							if(loadType==""){
								if(i==0){
									$("#seachForDate").append(li);
									//更新初始查询开始条数
									allArticleObj.beginForDate = begin + pageSize;
								}
								if(i==1){
									$("#seachForTimes").append(li);
									//更新初始查询开始条数
									allArticleObj.beginForTimes = begin + pageSize;
								}
								//如果loadType不为空，则加载各自的数据	
							}else if(loadType=="date"){
								$("#seachForDate").append(li);
								//更新初始查询开始条数
								allArticleObj.beginForDate = begin + pageSize;
							}else if(loadType=="times"){
								$("#seachForTimes").append(li);
								//更新初始查询开始条数
								allArticleObj.beginForTimes = begin + pageSize;
							}
						 });
					 }
						
					 
				 }else{
					 alert("失败");
				 }
			});
};

//查询文章类型
allArticleObj.articleTypeFun.loadArticleType = function(){
	$.ajax({
        type: "POST",
        url: basePath+"/allArticleObj/loadArticleType.do",
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
//加载更多
allArticleObj.loadMore.loadMoreForAllShare = function (loadType){
	var begin = 0;
	if(loadType=="date"){
		begin = allArticleObj.beginForDate;
	}
	if(loadType=="times"){
		begin = allArticleObj.beginForTimes;
	}
	
	var pageSize = allArticleObj.pageSize;
	
	var searchType = $("#searchType").val();
	console.log(begin);
	console.log(pageSize);
	
	allArticleObj.findAllShareNote.findShareNoteFunction(begin,pageSize,loadType,searchType);
};