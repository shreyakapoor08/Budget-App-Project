//BUDGET CONTROLLER
var budgetController = (function() {


})();


//UI CONTROLLER
var UIController = (function() {


})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

   var ctrlAddItem = function() {

       //1, get the filed input data

       //2. add the item to the budget controller

       //3. add the item to the UI

       //4. calculate the budget

       //5. Display the budget on the UI
       console.log('heellooo');
   }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

   document.addEventListener('keypress', function(event) {
       if(event.which === 13) { ///keycode for enter is 13
           ctrlAddItem();
       }
   });

})(budgetController, UIController);