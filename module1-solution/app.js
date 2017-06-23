(function(){
'use strict';

    angular.module('LunchCheck', [])
           .controller('LunchCheckController', function($scope){
              $scope.foodItems="";
              $scope.foodMessage="";
              $scope.messageStyle="message";

              $scope.displayMessage=function(){
                  $scope.msgDetails= checkIfTooMuch($scope.foodItems);
              };


              function checkIfTooMuch(foodItemList){
                var msgStr,msgStyle,txtStyle="";
                if(foodItemList==""){
                  msgStr= "Please enter data first" ;
                   msgStyle="message";
                }else {
                  var foodArray=foodItemList.split(',');
                  var noOfFoods=foodArray.length;
                  if(noOfFoods > 3){
                   msgStr="Too much!";
                   msgStyle="message2";
                   txtStyle="textbox2";
                  }else{
                   msgStr="Enjoy!";
                   msgStyle="message1";
                   txtStyle="textbox1";
                  }
               }
                return { msgStr:msgStr,
                         msgStyle: msgStyle,
                         txtStyle : txtStyle } ;
              }
            });
})();
