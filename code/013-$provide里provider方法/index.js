var myapp = angular.module('myapp',[],function($provide){

	//自定义服务
	$provide.provider('Obj',function(){
		this.$get = function(){
			return {
				name:'zhuzhu'
			}
		}
	});
});

myapp.controller('firstController',function($scope,Obj){
	$scope.name = 'zhuzhu';
	console.log(Obj);
});