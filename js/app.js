angular.module('timesheetApp', [
  'timesheetApp.controllers',
  'ngRoute',
  'ngMaterial'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/personaliaTab", {templateUrl: "partials/personalia.html" , controller: 'mainController'}).
	when("/timesheetTab", {templateUrl: "partials/timesheet.html", controller: 'mainController'}).
	when("/projectTab", {templateUrl: "partials/project.html", controller: 'mainController'}).
	otherwise({redirectTo: '/'});
}]);