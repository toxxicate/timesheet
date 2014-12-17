var myControllers = angular.module( 'timesheetApp.controllers', [] );

myControllers.controller("mainController", function($scope, $state) { 

$scope.data = {
	selectedIndex : 1
	};

$scope.tabs = [
	{ heading: "Personalia", view:"personaliaView", stateUrl: "personaliaState" , active:false },
	{ heading: "Timesheets", view:"timesheetView", stateUrl: "timesheetState" , active:true },
	{ heading: "Projects", view:"projectView", stateUrl: "projectState" , active:false },
]
});

myControllers.controller("personaliaController", function($scope) {
		$scope.user = {
				firstname: "Kevin",
				lastname: "Devis",
				telephone: "02 / 687 43 77",
				cellphone: "0478/23 88 26",
				email: "kevin.devis@assign.be",
				adress : { street: "Klipgaardestraat",
					   number: "26",
					   areaCode: "3473",
					   city: "Waanrode",
					   country: "België"
					}
			};
});

myControllers.controller("datepickerController", function($scope) {
	$scope.today = function() {
    		$scope.dt = new Date();
  	};
  	
	$scope.today();

	$scope.clear = function () {
		$scope.dt = null;
	};

	// Disable weekend selection
	$scope.disabled = function(date, mode) {
		return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
	};

	$scope.toggleMin = function() {
		$scope.minDate = $scope.minDate ? null : new Date();
	};
	
	$scope.toggleMin();

	$scope.open = function($event) {
		$event.preventDefault();
		$event.stopPropagation();

		$scope.opened = true;
	};

	$scope.dateOptions = {
		formatYear: 'yy',
		startingDay: 1
	};

	$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	$scope.format = $scope.formats[0];
});


