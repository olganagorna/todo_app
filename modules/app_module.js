// Creates a new module
angular.module('todoApp', ['ngRoute']);



// load the app
angular.element(document).ready(function() {
    angular.bootstrap(document, ['todoApp']);
});
