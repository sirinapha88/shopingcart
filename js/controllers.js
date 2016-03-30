app.controller("MainController", function($scope, bagService, $location, $http){
	$scope.view = {};
    $scope.bag = [];
   	$scope.view.search = "";
   	   
    $http.get('data.json').success(function (data) {
        $scope.view.teas = data;
    });

    $scope.getBagSize = function() {
        return bagService.bag.length;
    };

    $scope.displayBag = function() {
        $location.path("/order");
    };

    $scope.addToBag = function(item,quantity){
        var quantityObj = {
            quantity: quantity,
            item: item
        }; 
        bagService.bag.push(quantityObj);         
    };        
});



app.controller("OrderController", function($scope, bagService, $location){
    $scope.getOrder = bagService.bag;
    $scope.editing = false;
    
    $scope.getSubTotal = function() {
        $scope.subTotal = 0;
        bagService.bag.forEach(function(tea) {
            $scope.subTotal += tea.quantity * tea.item.price;
        });
         return $scope.subTotal;
    };

    $scope.editItem = function(index) {
        $scope.editing = $scope.getOrder.indexOf(index);
    };

    $scope.removeItem = function(order){
       bagService.bag.splice(order,1);
        console.log(bagService.bag);
    };

    $scope.placeOrder = function(){
        bagService.bag.splice(0, bagService.bag.length);
        homePage();
    };

    function homePage(){
        $location.path("completeOrder");
    }   
});






