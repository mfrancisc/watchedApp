
angular.module('watchedApp.factories', ['ionic'])
.constant('watchedApiEndPoint', {
  url: '/watchedApi'
})
//NOTE: We are including the constant `watchedApiEndpoint` to be used here.
.factory('tvApi', function($http, watchedApiEndPoint) {

  var getPopularTv = function() {
    return $http.get('/watchedApi/tv/popular')
      .then(function(data) {
        return data;
      });
  };

  return {
    getPopularTv: getPopularTv
  };
});
