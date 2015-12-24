'use strict';

angular.module('events').controller('EventsController', ['$scope', 'Events', 'Menus',
	function($scope, Events, Menus) {
		// Events controller logic
		// ...
		$scope.menu = Menus.getMenu('topbar');

		$scope.Preferencestitle = 'What\'s Your Wave';
		
		$scope.YearsEventstitle = 'This Year\'s Events';
		

		$scope.preference = undefined;
		$scope.ListofEvents = undefined;


		Events.ParseCurrMonthFest().success(function(data){
			$scope.MonthFestivals = data;
		});
		
		Events.GiveMeImmEvents().success(function(data){
			
			$scope.ImmMonthFestivals = data;
			// if (ImmMonthFestivals.date_tbd == true) {}
		});
		Events.SuggEvents().success(function(data){
			$scope.SuggEvents = data;
		});

	}
]);