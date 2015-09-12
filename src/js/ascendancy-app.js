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
      when('/new-game/:currentRace', {
        templateUrl: 'partials/new-game.html',
        controller: 'NewGameCtrl'
      }).
      otherwise({
        redirectTo: '/race-selector'
      });
  }]);
