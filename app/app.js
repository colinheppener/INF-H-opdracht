'use strict';

// Define the `pizzacatApp` module
var pizzacatApp = angular.module('pizzacatApp', []);

// Define the `PizzaListController` controller on the `pizzacatApp` module
pizzacatApp.controller('PizzaListController', function PizzaListController($scope) {
  $scope.pizzas = [
    {
      name: 'Pepperoni',
      snippet: 'Pepperoni on pizza'
    }, {
      name: 'Hawaii',
      snippet: 'pineaple on pizza'
    }, {
      name: 'salami',
      snippet: 'salami on pizza'
    }
  ];
});

