angular.module('empeekApp').controller('ItemsController', ItemsCtrl);
 
ItemsCtrl.$inject = ['$filter', '$scope', '$http', '$rootScope'];
function ItemsCtrl($filter, $scope, $http, $rootScope) {

	$scope.itemsData = [];
	($scope.getData = function() {
        $http.get('items.json')
            .then(successHandler)
            .catch(errorHandler);
        function successHandler(data) {
            $scope.itemsData = data.data;
            $scope.getData();
        }
        function errorHandler(data) {
            console.log("Can't reload list!");
        }
    })();

    $scope.getData = function(){
    	$scope.saved = localStorage.getItem('items');
		//$scope.items = (localStorage.getItem('items')!==null) ? JSON.parse($scope.saved) : $scope.itemsData;
		$scope.items = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [ {text: 'Learn AngularJS', done: false}, {text: 'Build an Angular app', done: false} ];
		localStorage.setItem('items', JSON.stringify($scope.items));
		$scope.items = $scope.itemsData;
		console.log($scope.items);
    };

	
	$scope.addItem = function() {
		alert('add');
		$scope.items.push({
			text: $scope.itemText,
			done: false
		});
		$scope.itemText = ''; //clear the input after adding
		localStorage.setItem('items', JSON.stringify($scope.items));
	};

	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.items, function(item){
			count+= item.done ? 0 : 1;
		});
		return count;
	};

	$scope.removeItem = function() {
		alert(1);
		var olditems = $scope.items;
		$scope.items = [];
		angular.forEach(olditems, function(item){
			if (!item.done)
				$scope.items.push(item);
		});
		localStorage.setItem('items', JSON.stringify($scope.items));
	};
}