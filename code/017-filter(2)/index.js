// angular过滤器的作用
// 	1.数据的格式化
// 	2.筛选
// 格式：{{expression|filter|..}}
angular.module('myapp',[])
.factory('Data',function(){
	return {
		name:'zhuzhu',
		nameBig:'ZHUZHU',
		citys:[
			{
				cityname:'上海',
				py:'shanghai'
			},{
				cityname:'广州',
				py:'guangzhou'
			},{
				cityname:'北京',
				py:'beijing'
			}
		]
	}
})
.controller('myController',function($scope,Data,$filter){
	$scope.Data = Data;
	//过滤器
	var number = $filter('number')(3000);
	console.log(number);
	// json
	var jsonString = $filter('json')($scope.Data);
	console.log(jsonString);
	// 自定义过滤
	$scope.checkName = function(obj){
		if(obj.py.indexOf('h')==-1){
			return false;
		}
		console.log(obj);
		return true;
	}
})