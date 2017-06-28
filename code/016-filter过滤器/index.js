// angular过滤器的作用
// 	1.数据的格式化
// 	2.筛选
// 格式：{{expression|filter|..}}
angular.module('myapp',[])
.controller('myController',function($scope){
	$scope.today = new Date();
})