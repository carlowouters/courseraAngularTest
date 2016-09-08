(function () {
  'use strict';
  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ["$scope"];

function LunchCheckController($scope){

  $scope.lunch_menu = "";
  $scope.lunch_message = "";
  $scope.CheckLunch = function(){
    var amount_items = 0;
    $scope.lunch_menu = $scope.lunch_menu.trim();

    if ($scope.lunch_menu.length > 0)
    {
      amount_items = $scope.lunch_menu.split(',').length;
    };

    switch (amount_items) {
      case 0:
        $scope.lunch_message = "Please enter data first";
        break;
      case 1: case 2 : case 3:
        $scope.lunch_message = "Enjoy";
        break;
      default:
        $scope.lunch_message = "Too much";
    }
  };
};

})();
