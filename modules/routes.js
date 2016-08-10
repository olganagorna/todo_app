angular
    .module("empeekApp")
    .config(config);
function config($routeProvider) {
    $routeProvider
        .when('/views/comments', {
	        templateUrl: 'views/comments.html',
	        controller: 'CommentsController',
	    })
	    
	    .when('/views/items', {
	        controller: 'ItemsController',
	        controllerAs: 'ItemsCtrl',
	        templateUrl: 'views/items.html',
	    })
        .otherwise({ redirectTo: "/" });
};
