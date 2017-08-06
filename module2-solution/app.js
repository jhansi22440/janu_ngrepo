(function(){
'use strict';

    angular.module('ShoppingListCheckOff', [])
          .controller('ToBuyController' , ToBuyController )
          .controller('AlreadyBoughtController' , AlreadyBoughtController)
          .service('ShoppingListCheckOffService' , ShoppingListCheckOffService);

          ToBuyController.$inject = ['ShoppingListCheckOffService'];
          function ToBuyController(ShoppingListCheckOffService){
              var toBuyList=this;
              toBuyList.items= ShoppingListCheckOffService.getBuyItems();

              toBuyList.alreadyBought= function (itemIndex){
                ShoppingListCheckOffService.alreadyBought(itemIndex);
              };
          }

          AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
          function AlreadyBoughtController(ShoppingListCheckOffService){
                  var boughtList=this;
                  boughtList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
          }

          function ShoppingListCheckOffService(){
            var service =this;

            var alreadyBoughtItems= [];
            var buyItems= [  {
                            itemName:'Cookie' ,
                            itemQuantity: '5'
                          },

                          {
                            itemName: 'Chocolates' ,
                            itemQuantity: '3'
                          },

                          {
                            itemName: 'Biscuits' ,
                            itemQuantity: '10'
                          },

                          {
                            itemName: 'Apples' ,
                            itemQuantity: '8'
                          },

                          {
                            itemName: 'Chips' ,
                            itemQuantity: '2'
                          }
                        ];

              service.getBuyItems= function (){
                return buyItems;
              };

              service.getAlreadyBoughtItems= function (){
                return alreadyBoughtItems;
              };

              service.alreadyBought =function(itemIndex ){
                var item =buyItems[itemIndex];
                alreadyBoughtItems.push(item);
                buyItems.splice(itemIndex ,1);
              }
          }
})();
