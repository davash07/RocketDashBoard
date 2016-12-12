var token ='';
var app = angular.module('app', []);
app.controller('calendarCntrl', ['$scope','$timeout', function($scope, $timeout) {
    $scope.cards = [];
    $scope.boards = [];
    $scope.quadroDefault= "q65dArv6";

    Trello.authorize({
      name: "API-Test",
      type: "popup",
      interactive: true,
      expiration: "never",
      success: load,
      scope: { write: true, read: true },
    });
    token = 'Trello.token()';
    $scope.$watch(function () {
        return Trello.authorized();
    }, function (val) {
        $scope.isLoggedIn = val;
        $scope.tok = token;
    });

    function load() {
      loadBoards();
      loadCards();
    }

    function loadBoards() {
      $scope.loadingBoards = true;
      Trello.get("members/me/boards", function (boards){
        angular.extend($scope.boards, boards);
        $scope.loadingBoards = false;
        $scope.poll();
      });
    }

    function loadCards() {
      $scope.loadingCards = true;
      Trello.get("boards/"+$scope.quadroDefault+"/cards/", function (cards){
        angular.extend($scope.cards, cards);
        $scope.loadingCards = false;
        $scope.poll();
      });
    }

    $scope.fresh = function(){
        load();
    };
    $scope.poll = function() {
      $timeout(function() {
        console.log('poll');
      }, 100);
    };

  //
}]);