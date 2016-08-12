angular.module('todoApp').controller('ItemsController', ItemsCtrl);
 
ItemsCtrl.$inject = ['$scope'];
function ItemsCtrl($scope) {
	$scope.comments = [];
	$scope.active = 0;
	$scope.saved = localStorage.getItem('items');
	$scope.items = (localStorage.getItem('items')!==null) ? JSON.parse($scope.saved) : [];
	localStorage.setItem('items', JSON.stringify($scope.items));
	$scope.addItem = function() {
		if($scope.itemText!==undefined && $scope.itemText!==''){
			$scope.items.push({
				text: $scope.itemText,
				comments: [],
				done: false
			});
			$scope.itemText = '';
			localStorage.setItem('items', JSON.stringify($scope.items));
		}
	};

	$scope.removeItem = function (index) {
		$scope.items.splice(index, 1);
		localStorage.setItem('items', JSON.stringify($scope.items));
	};

	$scope.select= function(index) {
       $scope.active = index;
    };

    $scope.addComment = function(index) {
    	if($scope.comments[index]!==undefined && $scope.comments[index].value!==''){
			$scope.items[index].comments.push({
				text: $scope.comments[index].value,
				userpic: $scope.pic
			});
			$scope.comments[index].value = '';
			localStorage.setItem('items', JSON.stringify($scope.items));
		}
	};

}