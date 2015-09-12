var ascendancyControllers = angular.module('ascendancyControllers', []);

ascendancyControllers.controller("RaceListCtrl", ['$scope', '$http',
  function ($scope, $http) {
    const numberOfRacesInView = 3;
    $http.get('data/races.json').
      then(function(response) {
        $scope.racesData = response.data;
        $scope.races = new races(0);
      }, function(response) {
        console.log(response);
      });
    $scope.currentRace = "";
    $scope.currentScroll = 0;
    $scope.scrollUp = function () {
      if ($scope.currentScroll > 0 ) {
        $scope.currentScroll--;
      } else {
        $scope.currentScroll = 0;
      }
      $scope.races = new races($scope.currentScroll);
    }
    $scope.scrollDown = function () {
      if ($scope.currentScroll < $scope.racesData.length - numberOfRacesInView) {
        $scope.currentScroll++;
      } else {
        $scope.currentScroll = $scope.racesData.length - numberOfRacesInView;
      }
      $scope.races = new races($scope.currentScroll);
    } 
    function race (id) {
      this.id = id;
      this.name = $scope.racesData[id].name;
      this.desc = $scope.racesData[id].desc;
    }
    function races (id) {
      for (var i=0; i < numberOfRacesInView; i++) {
        this[i] = new race(id+i);
      }
    } 
  }]);

ascendancyControllers.controller('RaceDetailCtrl', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    $scope.raceName = $routeParams.raceName;
  }]);
