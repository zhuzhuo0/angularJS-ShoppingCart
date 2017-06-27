var cartController = function($scope){
	//购物车内的数据
	$scope.data = [
		{
			id:'10001',
			name:'iphone4',
			price:'2000',
			count:10
		},{
			id:'10002',
			name:'iphone4s',
			price:'2500',
			count:5
		},{
			id:'10003',
			name:'iphone5',
			price:'3000',
			count:15
		},{
			id:'10004',
			name:'iphone5s',
			price:'3500',
			count:20
		},{
			id:'10005',
			name:'iphone6',
			price:'4000',
			count:5
		}
	]
	// 计算总价格
	$scope.totalPrice = function(){
		var price = 0;
		angular.forEach($scope.data,function(obj){
			price += parseInt(obj.count)*obj.price;
		});
		return price;
	}
	// 计算总数量
	$scope.totalCount = function(){
		var count = 0;
		angular.forEach($scope.data,function(obj){
			count += obj.count;
		});
		return count;
	}
	// 获取对象index
	var getIndex = function(id){
		var index = -1;
		angular.forEach($scope.data,function(obj,key){
			if(obj.id == id){
				index = key;
				return index;
			}
		});
		return index;
	}
	// 删除信息
	$scope.remove = function(id){
		var index = getIndex(id);
		if(index != -1){
			$scope.data.splice(index,1);
		}
	}
	// 删除全部
	$scope.removeAll = function(){
		$scope.data = '';
	}
	// 添加
	$scope.add = function(id){
		var index = getIndex(id);
		if(index != -1){
			++$scope.data[index].count;
		}
	}
	// 删除
	$scope.reduce = function(id){
		var index = getIndex(id);
		if(index != -1){
			if($scope.data[index].count > 1){
				--$scope.data[index].count;
			}else{
				var flag = confirm('确定取消该商品吗？');
				if(flag){
					$scope.data.splice(index,1);
				}else{
					return;
				}
			}
		}
	}
	// 监听数据
	$scope.$watch('data',function(newValue,oldValue){
		angular.forEach(newValue,function(obj,key){
			if(obj.count < 1){
				var flag = confirm('确定取消该商品吗？');
				if(flag){
					$scope.remove(obj.id);
				}else{
					obj.count = oldValue[key].count;
				}
			}
		});
	},true);
}