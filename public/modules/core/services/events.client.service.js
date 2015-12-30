/* jslint indent: false */
/* jshint -W099: false */

'use strict';


angular.module('events').factory('Events', ['$http',
  // value service --> if month.now/1/year.now
  // value service --> if month.now+2/31/year.now
  function($http) {
	// Events service logic
	// ...
	// Public API
	return {

	  // https://seatgeek.com/concert-tickets/hip-hop
	  // https://seatgeek.com/concert-tickets/pop
	  // https://seatgeek.com/concert-tickets/rap
	  // https://seatgeek.com/tba/festivals/music-festivals/

	   ParsePopularFests: function(){
		var url = 'https://api.seatgeek.com/2/events?datetime_local.gte=2015-12-01&datetime_local.lte=2015-12-31';
		var request = $http.get(url).success(function(data){
		  console.log('success');
		  return data;
		}).error(function(err){
		  console.log('Error');
		  console.log(err);
		});
		return request;
	    },
	    GiveMeImmEvents: function(){
		
		var url = 'http://api.seatgeek.com/2/events?q=hip-hop&sort=datetime_local.asc&sort=score.desc&taxonomies.name=concert&taxonomies.name=music_festival&datetime_local.gte=2015-12-01&datetime_local.lte=2016-01-31&geoip=true&range=100mi';
		var url2 = 'http://api.seatgeek.com/2/events?q=techno&sort=datetime_local.asc&sort=score.desc&taxonomies.name=concert&taxonomies.name=music_festival&datetime_local.gte=2015-12-01&datetime_local.lte=2016-01-31&geoip=true&range=100mi';
		var url3 = 'http://api.seatgeek.com/2/events?q=rap&sort=datetime_local.asc&sort=score.desc&taxonomies.name=concert&taxonomies.name=music_festival&datetime_local.gte=2015-12-01&datetime_local.lte=2016-01-31&geoip=true&range=100mi';
		
		var request = $http.get(url).success(function(data){
		  
	 	console.log('Success');
	 	// var cdn = false;
	 	// [] = new Array();
	 	var n = 1;
		function RideThru(){
			var data = _.filter(data, function(info){
				for (var s in info.events){
					for(var i in s.performers){
						var name = i.name;
						while (n < s.performers.length){
						  	if (name === s.performers[n].name){
								s.performers.splice(s.performers.indexOf(name, n), 1);
								n++;
							}
							else{
								n++;
							}
						}
						n++;
					}
			  	}
			});
		}
		return data;
		}).error(function(err){
		  console.log('error');
		  console.log(err);
		});

		return request;
	  },
	  SuggEvents: function(){
		var url = 'https://seatgeek.com/concert-tickets/pop';

		var request = $http.get(url).success(function(data){
		  console.log('success');
		  console.log(data);
		}).error(function(err){
		  console.log('error');
		  console.log(err);
		});
		return request;
	  },
	  getHipHop: function(){
		var url = 'https://seatgeek.com/concert-tickets/hip-hop';

		var request = $http.get(url).success(function(data){
		  console.log('success');
		  console.log(data);
		}).error(function(err){
		  console.log('error');
		  console.log(err);
		});
	  },
	  getRap: function(){
		var url = 'https://seatgeek.com/concert-tickets/rap';

		
		var request = $http.jsonp(url);

		request.success(function(data, status, headers, config){
		  console.log('success');
		  console.log(data);
		});

		request.error(function(data, status, header, config){
		  console.log('error');
		  console.log(data);
		});

		return request;

	  },
	  getListofMusicEvents: function() {
		var url = 'https://seatgeek.com/tba/festivals/music-festivals/';
		var request = $http.jsonp(url);

		request.success(function(data, status, headers, config){
		  console.log('Success');
		  console.log(data);
		});
		request.error(function(data, status, header, config){
		  console.log('error');
		  console.log(data);
		});

		return request;
	  }
	};
  }
]);