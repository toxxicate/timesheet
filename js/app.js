angular.module('timesheetApp', [
  'timesheetApp.controllers',
  'ui.router',
  'ui.bootstrap',
  'ngMaterial'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("timesheetView");

	$stateProvider.
		state('personaliaState', {
			url: "/",
			views: {
				"personaliaView": {templateUrl: "partials/personalia.html"}	
			}
		}).
		state('timesheetState', {
			url: "/",
			views: {
				"timesheetView": {templateUrl: "partials/timesheet.html"}	
			}
		}).
		state('projectState', {
			url: "/",
			views: {
				"projectView": {templateUrl: "partials/project.html"}	
			}
		});
}]);
