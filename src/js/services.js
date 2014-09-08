var app = angular.module('greenBoard', ['ngResource']);

/*params: { low: rangeLow,
                       high: rangeHigh }
*/

app.factory('View', ['$resource',
  function($resource){
    return $resource('src/index.html', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);
