// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('App', ['ionic'])//叫用index的 body ng-app="App"

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
//$http Ajax呼叫 Angular 提供
app.controller('HomeCtrl', function ($scope, $http) {
    //先宣告一個空陣列
    $scope.hotspots = []; 
    //取得網頁內容 ,如果沒有值回傳 null 
    $http.get('http://data.ntpc.gov.tw/NTPC/od/data/api/IMC123/?$format=json', null)
    //then完成後叫用function//如果成功
    .then(function (response) {
    //回應得到的data 給前面
        $scope.hotspots = response.data;
    
     //如果失敗
    },function (error) {
     //警報錯誤
        alert(error);
    });
});