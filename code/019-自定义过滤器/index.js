angular.module('myapp',[],function($filterProvider,$provide,$controllerProvider){
	$provide.service('Data',function(){
		return[
			{
				name : 'zhangsan',
				age: '20',
				city:'shanghai'
			},{
				name: 'zhuzhu',
				age:'30',
				city:'beijing'
			}
		]
	});

	//传入每个元素
	$filterProvider.register('myfilter',function(){
		//必须这种写法
		return function(obj){
			//返回过滤后的对象
			var newObj = [];
			angular.forEach(obj,function(o){
				if(o.age > 20){
					newObj.push(o);
				}
			});
			return newObj;
		}
	});

	//注册控制器
	$controllerProvider.register('myController',function($scope,Data){
		$scope.data = Data;
	});
})
//过滤器简易写法
.filter('filterCity',function(){
	return function(obj){
		var newObj = [];
		angular.forEach(obj,function(o){
			if(o.city==='shanghai'){
				newObj.push(o);
			}
		});
		return newObj;
	}
});