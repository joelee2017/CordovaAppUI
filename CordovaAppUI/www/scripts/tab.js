// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('App', ['ionic'])//叫用index的 body ng-app="App"

app.config(function ($stateProvider, $urlRouterProvider) {
    //狀態點擊後執行
    $stateProvider.state('tabs', {
        url: "/tab",
        abstract: true,
        templateUrl:"templates/tabs.html"
    })
    .state('tabs.home', {
        url: "/home", views: {
            'home-tab': {
                templateUrl:"templates/home.html"
            }
        }
    })
    .state('tabs.settings', {
        url: "/settings", views: {
            'settings-tab': {
                templateUrl: "templates/settings.html"
            }
        }
    })
    .state('tabs.about', {
        url: "/about", views: {
            'about-tab': {
                templateUrl: "templates/about.html"
            }
        }
    })
});

app.run(function($ionicPlatform, $location, $rootScope) {
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
      //初始化
    $location.path("/tab/home");
    $rootScope.$apply();
  });
})
