angular.module('myapp',[])
.factory('Data',function(){
	return {
		age:20
	}
})
.controller('firstController',function($scope,Data){
	$scope.data = {
		name:'zhuzhuo0'
	};
	$scope.Data = Data;
	console.log($scope);
})
.controller('secondController',function($scope,Data){
	$scope.data = $scope.$$prevSibling.data;
	$scope.Data = Data;
	console.log($scope);
})