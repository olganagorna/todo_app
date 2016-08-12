angular
    .module("todoApp")
    .config(config);
function config($routeProvider) {
    $routeProvider
        .when('/views/comments', {
	        templateUrl: 'views/comments.html',
	        controller: 'CommentsController',
	    })
	    
	    .when('/items', {
	        controller: 'ItemsController',
	        controllerAs: 'ItemsCtrl',
	        templateUrl: 'views/items.html',
	    })
        .otherwise({ redirectTo: "/" });
};
