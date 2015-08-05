var ascendancyApp = angular.module("ascendancyApp", []);

ascendancyApp.controller("RaceListCtrl", function ($scope) {
  $scope.races = [
    {"name": "Arbryl",
     "desc": "The Arbryls are tree-like aliens."},
    {"name": "Baliflid",
     "desc": "The Baliflids are small rodent-like organisms."},
    {"name": "Capelon",
     "desc": "The Capelons are masses of flowing fibers who possess the ability to alter their shape."}
  ];
});
