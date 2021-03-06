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
		//数组排序
		sortNumber : function(a, b) {
			return a - b;
		},
		//字符串长度
		getLength : function (str) {
	        ///<summary>获得字符串实际长度，中文2，英文1</summary>
	        ///<param name="str">要获得长度的字符串</param>
	        var realLength = 0, len = str.length, charCode = -1;
	        for (var i = 0; i < len; i++) {
	            charCode = str.charCodeAt(i);
	            if (charCode >= 0 && charCode <= 128) realLength += 1;
	            else realLength += 2;
	        }
	        return realLength;
	    },
};
//重写alert
/*window.alert=function(e){
	$('#alertMessage').load('baifu/page/common/alert_message.html',function(){
		$('#error_info').text(' '+e);
		$('.opacity_bg').show();
	});
};*/
 