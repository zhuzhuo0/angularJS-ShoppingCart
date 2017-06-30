angular.module('myapp',[])

.service('productData',function(){

	return [
		{
			id:10001,
			name:'iphone5',
			price:3000
		},{
			id:10002,
			name:'ipad air',
			price:3500
		},{
			id:10003,
			name:'imac',
			price:10500
		},{
			id:10004,
			name:'iphone6',
			price:4000
		},{
			id:10005,
			name:'macbook',
			price:8000
		}
	]

})

.controller('productController',function($scope,productData){
	$scope.productData = productData;
	$scope.orderItem = 'id';
	$scope.orderType = '-';
	$scope.changeOrder = function(type){
		$scope.orderItem = type;
		if($scope.orderType==''){
			$scope.orderType='-';
		}else{
			$scope.orderType='';
		}
	}
	
});