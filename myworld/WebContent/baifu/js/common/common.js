var common = {
		//获取url参数
		getURLParams : function(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			var r = window.location.search.substr(1).match(reg);
			if (r != null){
				return unescape(r[2]);
			}
			return null;
		},
};
//重写alert
/*window.alert=function(e){
	$('#alertMessage').load('baifu/page/common/alert_message.html',function(){
		$('#error_info').text(' '+e);
		$('.opacity_bg').show();
	});
};*/
