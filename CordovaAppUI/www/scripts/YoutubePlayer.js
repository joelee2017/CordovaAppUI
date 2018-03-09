// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('App', ['ionic','youtube-embed'])//叫用index的 body ng-app="App"

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

app.controller('HomeCtrl', function ($scope, $http) {
    $scope.playerVars = {
        rel: 0,
        showinfo: 0,
        modestbranding: 0,
    };
     //搜尋方法
    $scope.searchYouTube = function () {
        $scope.videos = []; //建立空陣列
        $scope.youtubeParams = {
            key: 'AIzaSyAnAi9xKNqI_xNGDKHtFZrInz5l_QkMqNs',
            type: 'video',
            maxResults: '10',
            part: 'id,snippet', //要讀取的東西
            q: $scope.searchkeyword?$scope.searchkeyword:"Cordova+Hybrid",
            order: 'date',
        };

        $http.get(
            'https://www.googleapis.com/youtube/v3/search',
            { params: $scope.youtubeParams }).success(
            function (response) {
                $scope.videos = response.items;
            });
    };
   //初次執行結果
    $scope.searchYouTube();
});