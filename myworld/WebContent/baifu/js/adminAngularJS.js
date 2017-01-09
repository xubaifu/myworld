var app = angular.module('adminApp', ['ngAnimate','ngRoute']);
app.controller('adminController', function ($scope, $http) {
	//获取所有用户
	$scope.getAllUsers = function(){
		$http.post("admin/getUserFunction.do").success(
				function (response) {
				  	if(response.success == false){
					 	alert(response.message);
				  	}else{
					  	$scope.users = response.data;
				  	}
		});
	};
});

//设置路由
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/userManage', {
        	templateUrl: 'adminPage/userManage.html',
            controller: 'userManageController'
        }).when('/baseData', {
        	templateUrl: 'adminPage/baseData.html',
            controller: 'baseDataController'
        }).otherwise({
            redirectTo: '/baseData'
        });
}]);
//用户管理模块
app.controller('userManageController', function ($scope, $http) {
	$scope.firstMenu = "用户管理";
	$scope.secondMenu = "注册用户";
	//选择框
	$scope.sites = [
        {name:'管理员',value:'1'},
        {name:'普通用户',value:'0'},
    ];
	//$scope.selected='2';//id的值，区分类型
	//$scope.selected=$scope.sites[0].value; //如果想要第一个值
	//点击查看用户详细信息
	$scope.getUserDetail = function(x){
		$scope.cn_user_name = x.cn_user_name;
		$scope.cn_user_register_time = x.cn_user_register_time;
		$scope.cn_user_desc = x.cn_user_desc;
		//隐藏提交按钮
		$scope.hide = true;
		//输入框不可用
		$scope.disabled = true;
		//默认选择框数值
		$scope.selected=x.cn_user_token_code;
	};
	//点击管理用户
	$scope.updateUserDetail = function(x){
		$scope.cn_user_name = x.cn_user_name;
		$scope.cn_user_register_time = x.cn_user_register_time;
		$scope.cn_user_desc = x.cn_user_desc;
		//显示提交按钮
		$scope.hide = false;
		//输入框可用
		$scope.disabled = false;
		//默认选择框数值
		$scope.selected=x.cn_user_token_code;
	};
	//提交更改
	$scope.submitFun = function(userName,userToken,userDesc){
		$http({
	        method: 'POST',
	        url:'admin/updateUser.do',
	        data: $.param({'cn_user_name' : userName, 'cn_user_token' : userToken, 'cn_user_desc' : userDesc}),
	        headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
	    }).success(function(response){
	    	if(response.data.flag != 0){
	    		alert("修改失败");
	    	}else{
	    		$scope.getAllUsers();
	    	}
		}).error(function(){
		    alert("修改失败");
			});
		};
    });
   //基础数据模块
app.controller('baseDataController', function ($http, $scope) {
	$scope.firstMenu = "系统管理";
	$scope.secondMenu = "基础数据";
});