$(document).ready(function () {
	
	myWorldObj.findNote.findNoteByUser(userId);
	/*myWorldObj.findNote.findNoteByUser(1002,userId);
	myWorldObj.findNote.findNoteByUser(1004,userId);
	myWorldObj.findNote.findNoteByUser(1004,"");*/
});

//我的空间模块
var myWorldObj = {
		findNote : {}
};

//根据用户查询文章
myWorldObj.findNote.findNoteByUser = function(userId){
	$.post(
			basePath+"/myworld/findNoteByUser.do",
			{"userId":userId},
			 //ajax默认把Controller的返回值封装到request中，所以，request会访问到session
			 //data、success属性
			function(result){
				console.log(result);
				 if(result.success){
					 var list = result.data;
					 for(var i=0;i<list.length;i++){
						 //如果该项没有内容
						 
						 if(list[i].length == 0){
							 if(i==0){
								 	var toLoad = '<div class="loadMore"><a href="edit.jsp">您还没有私密文章，去发表 →</a></div>';
									$("#myNote").append(toLoad);
								} else if(i==1){
									var toLoad = '<div class="loadMore"><a href="allArticle.jsp">您还没有收藏，去收藏文章 →</a></div>';
									$("#myCollection").append(toLoad);
								} else if(i==2){
									var toLoad = '<div class="loadMore"><a href="#">您还没有分享，去分享文章 →</a></div>';
									$("#myShare").append(toLoad);
								}
						 }
						 $(list[i]).each(function(){
								var num = Math.floor(Math.random()*62+1);
								var li = '<li><a target="_blank" href="articleContents.jsp?noteId='+this.cn_note_id+'">'+
								'	<div class="caseThum">'+
								'		<img width="300" height="180" align="'+this.cn_note_title+'"'+
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
								if(i==0){
									$("#myNote").append(li);
								} else if(i==1){
									$("#myCollection").append(li);
								} else if(i==2){
									$("#myShare").append(li);
								} else if(i==3){
									$("#hotShareByDate").append(li);
								} else if(i==4){
									$("#hotShareByTimes").append(li);
								}
							 });
					 }
				 }else{
					 // 代码执行失败
					 alert(result.message);
				 }
				
			}
	);
};