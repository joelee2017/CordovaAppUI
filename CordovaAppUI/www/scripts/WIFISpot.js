// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('App', ['ionic'])//�s��index�� body ng-app="App"

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
//$http Ajax�I�s Angular ����
app.controller('HomeCtrl', function ($scope, $http) {
    //���ŧi�@�ӪŰ}�C
    $scope.hotspots = []; 
    //���o�������e ,�p�G�S���Ȧ^�� null 
    $http.get('http://data.ntpc.gov.tw/NTPC/od/data/api/IMC123/?$format=json', null)
    //then������s��function//�p�G���\
    .then(function (response) {
    //�^���o�쪺data ���e��
        $scope.hotspots = response.data;
    
     //�p�G����
    },function (error) {
     //ĵ�����~
        alert(error);
    });
});