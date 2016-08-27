$(document).ready(function () {
	if(common.getURLParams("type") != ""){
		//汉字需要用decodeURI()解码
		$("#allShareTitle").text(decodeURI(common.getURLParams("type")));
		allShareObj.findShareNote.findShareNoteFunction(decodeURI(common.getURLParams("type")),allShareObj.begin,allShareObj.pageSize,"");
	}
});
//分享模块
var allShareObj = {
		beginForDate : 0,//最新推荐开始页
		beginForTimes : 0,//最热推荐开始页
		begin : 0,//默认起始页
		pageSize : 8,
		findShareNote : {},
		loadMore : {}
};

//查询分享的文章      noteType:文章类型，loadType：加载类型（日期or访问数量）
allShareObj.findShareNote.findShareNoteFunction = function(noteType,begin,pageSize,loadType){
	$.post(
			basePath+"/findShareNote/findShareNoteFunction.do",
			{"noteType":noteType,"begin":begin,"pageSize":pageSize,"loadType":loadType},
			 //ajax默认把Controller的返回值封装到request中，所以，request会访问到session
			 //data、success属性
			function(result){
				console.log(result);
				 if(result.success){
					 var list = result.data;
					 for(var i=0;i<list.length;i++){
						 //判断是否有数据，若没有则已加载完毕
						 if(list[0].length == 0){
							 if(loadType == "date"){
								 $("#loadForHotShareByDate").removeAttr("href");
								 $("#loadForHotShareByDate").text("已加载完毕");
							 }
							 if(loadType == "times"){
								 $("#loadForHotShareByTimes").removeAttr("href");
								 $("#loadForHotShareByTimes").text("已加载完毕");
							 }
							 return;
						 }
						 $(list[i]).each(function(){
								var num = Math.floor(Math.random()*30+1);
								var li = '<li><a target="_blank" href="articleContents.jsp?noteId='+this.cn_note_id+'">'+
								'	<div class="caseThum">'+
								'		<img width="300" height="180" align="SVG水纹波动的按钮特效"'+
								'			src="baifu/image/jquery-'+num+'.jpg">'+
								'	</div>'+
								'	<div class="caseBottom">'+
								'		<div class="caseName">'+this.cn_note_title+'</div>'+
								'		<div class="caseInfo">'+
								'			<div class="caseIcon ll">'+this.cn_note_times+'</div>'+
								'			<div class="caseTime">'+this.cn_note_last_modify_time+'</div>'+
								'		</div>'+
								'	</div>'+
								'</a></li>';
								//如果loadType为空，则默认加载最新推荐和最热推荐的前八条
								if(loadType==""){
									if(i==0){
										$("#hotShareByDate").append(li);
										//更新初始查询开始条数
										allShareObj.beginForDate = begin + pageSize;
									}
									if(i==1){
										$("#hotShareByTimes").append(li);
										//更新初始查询开始条数
										allShareObj.beginForTimes = begin + pageSize;
									}
									//如果loadType不为空，则加载各自的数据	
								}else if(loadType=="date"){
									$("#hotShareByDate").append(li);
									//更新初始查询开始条数
									allShareObj.beginForDate = begin + pageSize;
								}else if(loadType=="times"){
									$("#hotShareByTimes").append(li);
									//更新初始查询开始条数
									allShareObj.beginForTimes = begin + pageSize;
								}
							 });
					 };
				 }else{
					 // 代码执行失败
					 alert(result.message);
				 };
			}
	);
	
};

//加载更多
allShareObj.loadMore.loadMoreForAllShare = function (loadType){
	var begin = 0;
	if(loadType=="date"){
		begin = allShareObj.beginForDate;
	}
	if(loadType=="times"){
		begin = allShareObj.beginForTimes;
	}
	
	var pageSize = allShareObj.pageSize;
	console.log(begin);
	console.log(pageSize);
	
	allShareObj.findShareNote.findShareNoteFunction(common.getURLParams("type"),begin,pageSize,loadType);
};