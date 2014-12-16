
angular.module( 'timesheetApp.controllers', [] )	
	.controller("mainController", function($scope, $route) { 
	
	$scope.data = {
		selectedIndex : 1
		};
	
	$scope.tabs = [
        { heading: "Personalia", route:"personaliaTab", active:false, content:/partials/personalia.html },
        { heading: "Timesheets", route:"timesheetTab", active:true },
        { heading: "Projects", route:"projectTab", active:false },
    ];
 
     go = function(route){
        $route.go(route);
    };
 
    $scope.active = function(route){
        return $route.is(route);
    };
 
    $scope.$on("$stateChangeSuccess", function() {
        $scope.tabs.forEach(function(tab) {
            tab.active = $scope.active(tab.route);
        });
    });
});

