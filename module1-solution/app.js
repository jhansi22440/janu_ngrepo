(function(){
'use strict';

    angular.module('LunchCheck', [])
           .controller('LunchCheckController', function($scope){
              $scope.foodItems="";
              $scope.foodMessage="";

              $scope.displayMessage=function(){
                $scope.foodMessage= checkIfTooMuch($scope.foodItems);
              };


              function checkIfTooMuch(foodItemList){

                var msg="";
                if(foodItemList==""){
                  msg= "Please enter data first" ;
                }else {
                  var foodArray=foodItemList.split(',');
                  var noOfFoods=foodArray.length;
                  if(noOfFoods > 3){
                   msg="Too much!";
                  }else{
                   msg="Enjoy!";
                  }
               }
                return msg;
              }
            });
})();
