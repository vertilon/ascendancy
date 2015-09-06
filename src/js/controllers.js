var ascendancyControllers = angular.module('ascendancyControllers', []);

ascendancyControllers.controller("RaceListCtrl", ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    $scope.currentRace = $routeParams.raceName;
    $scope.currentScroll = 1;
    $scope.scrollUp = function ($scope) {
      if ($scope.currentScroll!=1 ) {
        $scope.currentScroll--;
      } else {
        $scope.currentScroll = 1;
      }
    }
    $scope.scrollDown = function ($scope) {
      if ($scope.currentScroll != 19) {
        $scope.currentScroll++;
      } else {
        $scopt.currentScroll = 19;
      }
    }  
    $scope.races = [
      {"name": "Arbryl",
       "desc": "The Arbryls are tree-like aliens."},
      {"name": "Baliflid",
       "desc": "The Baliflids are small rodent-like organisms."},
      {"name": "Capelon",
       "desc": "The Capelons are masses of flowing fibers who possess the ability to alter their shape."},
      {"name": "Chamachies",
       "desc": "The Chamachies are a reptilian species who love gadgets and technology."},
      {"name": "Chronomyst",
       "desc": "The Chronomyst are a deeply religious and philosophical race who spend much of their time in a deep meditative state in which they commune with their god."},
      {"name": "Dubtaks",
       "desc": "Anybody who played Ascendancy will know that the Dubtaks are not to be trusted."},
      {"name": "Fludentri",
       "desc": "The Fludentri evolved on an ocean planet. Their bodies are composed of polymerized liquid."},
      {"name": "Frutmaka",
       "desc": "The Frutmaka evolved on a planet near a black hole, which they worship as a god (named Graveesha)."},
      {"name": "Govorom",
       "desc": "The Govorom are ecologists. They evolved on a desert world with few resources and sparse life."},
      {"name": "Hanshaks",
       "desc": "The Hanshaks are an ancient race of toroidal mind-bodies."},
      {"name": "Kambuchka",
       "desc": "The Kambuchka evolved in the dense atmosphere of a gas giant."},
      {"name": "Marmosians",
       "desc": "The Marmosians are aggressive, insect-like aliens from an incredibly hot world."},
      {"name": "Mebes",
       "desc": "The Mebes are large single-celled organisms that evolved on a pleasant, temperate world."},
      {"name": "Minions",
       "desc": "The Minions are a race of artificial lifeforms, created to serve a mysterious extra-galactic master race."},
      {"name": "Nimbuloids",
       "desc": "The Nimbuloids make their homes in the thick atmospheres of gas giants, where they perceive the differing densities of gasses in the same way as we perceive solids objects."},
      {"name": "Oculons",
       "desc": "The Oculons may be def and dumb, but they have extremely good vision thanks to their enormous eye."},
      {"name": "Orfa",
       "desc": "The Orfa are grazing animals that evolved on an extremely hostile world."},
      {"name": "Shevar",
       "desc": "Very little is known about the Shevar."},
      {"name": "Snovemdomas",
       "desc": "The Snovemdomas evolved as pack-hunting predators on a world with unusually high-gravity."},
      {"name": "Swaparamans",
       "desc": "The Swaparamans evolved on the first planet of a binary starsystem (consisting of a normal star and the black hole Graveesha)."},
      {"name": "Ungooma",
       "desc": "The Ungooma are a species of bizarre, microscopic organisms."}
    ];
  }]);

ascendancyControllers.controller('RaceDetailCtrl', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    $scope.raceName = $routeParams.raceName;
  }]);
