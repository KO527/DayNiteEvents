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


		Events.getPreferences().success(function(data){
			$scope.preference = data;
		});
		
		Events.getListofEvents().success(function(data){
			$scope.ListofEvents = data;
		});

	}
]);