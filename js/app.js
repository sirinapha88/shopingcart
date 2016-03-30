var app = angular.module("shoppingApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
        templateUrl:"../views/main.html",
        controller:"MainController"
    }).when('/order', {
        templateUrl:"views/order.html",
        controller:"OrderController"
    }).when('/completeOrder', {
    	templateUrl:"views/completeOrder.html",
    	controller:"OrderController"
    }).otherwise({
        redirectTo: "/"
    });
});












