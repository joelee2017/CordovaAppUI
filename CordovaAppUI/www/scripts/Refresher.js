// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('App', ['ionic'])//¥s¥Îindexªº body ng-app="App"

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.controller('HomeCtrl', function ($scope, $timeout) {
    $scope.items = ['Item 1', 'Item 2', 'Item 3',];
    $scope.doRefresh = function () {
        console.log('Refreshing!');
        $timeout(function () {
            $scope.items.push('New Item ' +
                Math.floor(Math.random() * 1000) + 4);
            $scope.$broadcast('scroll.refreshComplete');
        }, 1000);
    };
});
