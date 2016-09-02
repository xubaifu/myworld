$(document).ready(function(){
	if(common.getURLParams("type") != ""){
		//判断页面类型（所有文章，分享，收藏），使页面定位到某个tab页
		$("#myTab li").removeClass("active");
		$("#myTab li a").attr("aria-expanded","false");
		$("#myAllArticles").removeClass("in active");
		$("#myShare").removeClass("in active");
		$("#myCollection").removeClass("in active");
		if(common.getURLParams("type") == "all"){
			$("#allArticlesTab").addClass("active");
			$("#allArticlesTab a").attr("aria-expanded","true");
			$("#myAllArticles").addClass("in active");
		}
		if(common.getURLParams("type") == "share"){
			$("#myShareTab").addClass("active");
			$("#myShareTab a").attr("aria-expanded","true");
			$("#myShare").addClass("in active");
		}
		if(common.getURLParams("type") == "collect"){
			$("#myCollectTab").addClass("active");
			$("#myCollectTab a").attr("aria-expanded","true");
			$("#myCollection").addClass("in active");
		}
	}
	//查询文章类型
	myAllArticleObj.articleTypeFun.loadArticleType();
	//获取文章信息
	myAllArticleObj.findAllMyArticles.findMyArticlesFunction(myAllArticleObj.begin,myAllArticleObj.pageSize,"","TITLE");
});

//定义所有文章查询及展示模块
var myAllArticleObj = {
		beginForAll : 0,//所有文章开始页
		beginForSahre : 0,//我的分享开始页
		beginForCollect : 0,//我的收藏开始页
		begin : 0,//默认的起始页
		pageSize : 10,
		findAllMyArticles : {},
		loadMore : {},
		articleTypeFun : {},
		//搜索函数  flag参数为true代表了该方法是搜索方法
		search : function(searchType,flag){
			//将搜索类型添加到隐藏域
			$("#searchType").val(searchType);
			if(flag){
				//清空上次加载的内容
				$("#seachForAllArticles").children().remove();
				$("#seachForMyShare").children().remove();
				$("#seachForMyCollection").children().remove();
			}
			//执行查询方法
			myAllArticleObj.findAllMyArticles.findMyArticlesFunction(myAllArticleObj.begin,myAllArticleObj.pageSize,"",searchType);
		},
		//文章类型改变是执行该方法
		onchangeFun : function(){
			//清空上次加载的内容
			$("#seachForAllArticles").children().remove();
			$("#seachForMyShare").children().remove();
			$("#seachForMyCollection").children().remove();
			//执行查询方法
			myAllArticleObj.findAllMyArticles.findMyArticlesFunction(myAllArticleObj.begin,myAllArticleObj.pageSize,"","");
		}
};

//按条件查询所有文章
//loadType:查询类型——所有文章（all），分享（share），收藏（collect）
//searchType ： 搜索类型--按标题搜索（TITLE），按标签搜索（TAG），按内容搜索（CONTENT）
myAllArticleObj.findAllMyArticles.findMyArticlesFunction = function(begin,pageSize,loadType,searchType){
	if(userId == "null" || userId == "" || userId == null){
		alert("请先登录");
		return;
	}
	//获取查询条件
	var searchContent = $("#searchContent").val();
	var articleType = $("#articleType").val();
	if(searchType ==""){
		searchType = "TITLE";
	}
	$.post(
			basePath+"/myAllArticleObj/findAllArticle.do",
			{"userId":userId,"articleType":articleType,"begin":begin,"pageSize":pageSize,"loadType":loadType,"searchContent":searchContent,"searchType":searchType},
			 //ajax默认把Controller的返回值封装到request中，所以，request会访问到session
			 //data、success属性
			function(result){
				console.log(result);
				 if(result.success){
					 var list = result.data;
					 console.log(list)
					 for(var i=0;i<list.length;i++){
						//判断是否有数据，若没有则已加载完毕
						 if(list[i].length == 0){
							 var li1 = '<li class="finishLoad" style="margin-left: auto; margin-right: auto;text-align:center"><span>已加载所有文章<span></li>';
							 //默认情况下（非搜索）文章加载完
							 if(loadType == "all"){
								 $("#seachForAllArticles .finishLoad").remove();
								 $("#seachForAllArticles").append(li1);
							 }
							 if(loadType == "share"){
								 $("#seachForMyShare .finishLoad").remove();
								 $("#seachForMyShare").append(li1);
							 }
							 if(loadType == "collect"){
								 $("#seachForMyCollection .finishLoad").remove();
								 $("#seachForMyCollection").append(li1);
							 }
							 if(loadType == ""){
								 $(".finishLoad").remove();
								 $("#seachForAllArticles").append(li1);
								 $("#seachForMyShare").append(li1);
								 $("#seachForMyCollection").append(li1);
							 }
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
							//如果loadType为空，则默认加载最新推荐和最热推荐的前10条
							if(loadType==""){
								if(i==0){
									$("#seachForAllArticles .finishLoad").remove();
									$("#seachForAllArticles").append(li);
									//更新初始查询开始条数
									myAllArticleObj.beginForAll = begin + pageSize;
								}
								if(i==1){
									$("#seachForMyShare .finishLoad").remove();
									$("#seachForMyShare").append(li);
									//更新初始查询开始条数
									myAllArticleObj.beginForShare = begin + pageSize;
								}
								if(i==2){
									$("#seachForMyCollection .finishLoad").remove();
									$("#seachForMyCollection").append(li);
									//更新初始查询开始条数
									myAllArticleObj.beginForCollect = begin + pageSize;
								}
								//如果loadType不为空，则加载各自的数据	
							}else if(loadType=="all"){
								$("#seachForAllArticles").append(li);
								//更新初始查询开始条数
								myAllArticleObj.beginForAll = begin + pageSize;
							}else if(loadType=="share"){
								$("#seachForMyShare").append(li);
								//更新初始查询开始条数
								myAllArticleObj.beginForShare = begin + pageSize;
							}
							else if(loadType=="collect"){
								$("#seachForMyCollection").append(li);
								//更新初始查询开始条数
								myAllArticleObj.beginForCollect = begin + pageSize;
							}
						 });
					 }
				 }else{
					 alert("失败");
				 }
			});
};

//查询文章类型
myAllArticleObj.articleTypeFun.loadArticleType = function(){
	$.ajax({
        type: "POST",
        url: basePath+"/myAllArticleObj/loadArticleType.do",
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
myAllArticleObj.loadMore.loadMoreForAllShare = function (loadType){
	var begin = 0;
	if(loadType=="all"){
		begin = myAllArticleObj.beginForAll;
	}
	if(loadType=="share"){
		begin = myAllArticleObj.beginForShare;
	}
	if(loadType=="collect"){
		begin = myAllArticleObj.beginForCollect;
	}
	var pageSize = myAllArticleObj.pageSize;
	
	var searchType = $("#searchType").val();
	console.log(begin);
	console.log(pageSize);
	
	myAllArticleObj.findAllMyArticles.findMyArticlesFunction(begin,pageSize,loadType,searchType);
};