var ascendancyApp = angular.module("ascendancyApp", [
  'ngRoute',
  'ascendancyControllers'
]);

ascendancyApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/race-selector', {
        templateUrl: 'partials/race-selector.html',
        controller: 'RaceListCtrl'
      }).
      when('/race/:raceName', {
        templateUrl: 'partials/race-detail.html',
        controller: 'RaceListCtrl'
      }).
      otherwise({
        redirectTo: '/race-selector'
      });
  }]);
