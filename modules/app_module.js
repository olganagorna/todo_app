// Creates a new module
angular.module('empeekApp', ['ngRoute']);



// load the app
angular.element(document).ready(function() {
    angular.bootstrap(document, ['empeekApp']);
});
