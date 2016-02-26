
'use strict';

angular.module('events').config(['$stateProvider', function($stateProvider){
		$stateProvider.state('event', {
			url: '/events',
			templateUrl: '/modules/events/views/events.client.view.html'
		});
	}
]);

