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

app.controller('HomeCtrl', function ($scope, $ionicModal) {
    $scope.contacts = [{ name: 'joe 101' }, { name: 'ken 102' }, { name: 'kay 103' }];
    $scope.showModal = function () {
        $scope.newContact = null;
        $ionicModal.fromTemplateUrl('templates/Contact.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
            modal.show();
        });
    }
    $scope.hideModal = function () {
        $scope.modal.hide();
    }
    $scope.createContact = function (newContact) {
        $scope.contacts.push({ name: newContact.LastName + ' ' + newContact.FirstName });
        $scope.modal.hide();
    };
});