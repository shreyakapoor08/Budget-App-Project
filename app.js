var budgetController = (function() {

    var x = 23;

    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) { ///because of closure the inner function have got the access to the outer function even after the outer function has returned
            return add(b);
        }
    }
})(); ///IIFE allows us to create data privacy so the variable is safe and cannot be accessed by outside



var UIController = (function() {

    // some code
})();

var controller = (function(budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function() {
            console.log(z);
        }
    }

})(budgetController, UIController); ///modules can also receive arguments