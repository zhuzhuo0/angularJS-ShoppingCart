var firstController = function($scope){
	$scope.name = 'zhuonan';
	$scope.count = 0;
	$scope.$watch('name',function(newValue,oldValue){
		++$scope.count;
		if($scope.count >= 10){
			$scope.name = '已经改变10次了！';
		}
	});
}