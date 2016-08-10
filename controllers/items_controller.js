angular.module('empeekApp').controller('ItemsController', ItemsCtrl);
 
ItemsCtrl.$inject = ['$scope'];
function ItemsCtrl($scope) {


	$scope.saved = localStorage.getItem('items');
	$scope.items = (localStorage.getItem('items')!==null) ? JSON.parse($scope.saved) : [];
	localStorage.setItem('items', JSON.stringify($scope.items));
	
	$scope.addItem = function() {
		$scope.items.push({
			text: $scope.itemText,
			comments: [],
			done: false
		});
		$scope.itemText = ''; //clear the input after adding
		localStorage.setItem('items', JSON.stringify($scope.items));
	};

	$scope.removeItem = function (index) {
		var item_to_delete = $scope.items[index];
		$scope.items.splice(index, 1);
		localStorage.setItem('items', JSON.stringify($scope.items));
	};
	$scope.active = 0;
	$scope.select= function(index) {
       $scope.active = index;
    };
	$scope.comments = function(){
		var count = 0;
		angular.forEach($scope.items.comments, function(item){
			count+= 1;
		});
		return count;
		console.log(count);
	}
}