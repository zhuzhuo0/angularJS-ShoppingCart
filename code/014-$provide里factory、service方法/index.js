var myapp = angular.module('myapp',[],function($provide){

	//自定义服务
	$provide.provider('Obj',function(){
		this.$get = function(){
			return {
				name:'zhuzhu'
			}
		}
	});

	// 自定义工厂(可以返回任意类型)
	$provide.factory('ObjFactory',function(){
		return [1,2,3,4,5];
	});
	// 自定义服务(只能返回对象)
	$provide.service('ObjService',function(){
		return ['zhuzhu','haha','hoho'];
	});
});

// myapp.service();
// myapp.factory();

myapp.controller('firstController',function($scope,Obj,ObjFactory,ObjService){
	$scope.name = 'zhuzhu';
	console.log(Obj);
	console.log(ObjFactory);
	console.log(ObjService);
});