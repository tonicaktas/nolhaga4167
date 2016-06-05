var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.controller('AppCtrl',['$scope','$http',function($scope, $http){
  console.log("addInfo(1)")
  $scope.addInfo = function(){
    $http.post('/ionic-lab/',$scope.infoblad).success(function(response){
      console.log("addInfo(2)")
    });
  }

}])

app.controller('left',function($scope, $ionicSideMenuDelegate, $ionicPopup){
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft()
  }
  $scope.toggleRight = function() {
    $ionicSideMenuDelegate.toggleRight()
  }
  $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Don\'t eat that!',
     template: 'It might taste good'
   });
 };
})

app.controller('vader', function($scope, $http){
  $scope.datas = ['empty list'];
  $scope.timeseries = [];
  $scope.loadData = function(){
    $http({
      method: 'GET',
      url:'http://opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/1/geopoint/lat/57.75/lon/12.94/data.json'
    }).then(function sucessCallback(response){
      console.log(response.data);
      console.log(response.data.timeseries[6].t);
      var ned = response.data.timeseries[6].pcat;
      var mol = response.data.timeseries[6].tcc;
      console.log(ned);
        console.log(1);

      $scope.bild = function(){

           if(ned == 0 && mol == 0)
        return "soligt";
      else if(ned == 0 && mol > 2)
      return "molnigt"
     else if(ned == 1)
        return "sno";
      else if(ned == 2)
        return "snoandrain";
      else if (ned == 3)
        return "regn";
      else if (ned == 4)
        return "drizzle";
      else if (ned == 5)
        return "isregn";
      else if (ned == 6)
        return "isregndrizzle";

      };

      $scope.timeseries = response.data;
    },function errorCallback(response) {
        $scope.datas = response.data || "Request failed";
      });
    }


    $scope.visa1 = true;
    $scope.v1 = function(){
      $scope.visa1 = true;
      $scope.visa2 = false;
      $scope.visa3 = false;
      $scope.visa4 = false;
    };
    $scope.visa2 = false;
    $scope.v2 = function(){
      $scope.visa2 = true;
      $scope.visa1 = false;
      $scope.visa3 = false;
      $scope.visa4 = false;
    };
    $scope.visa3 = false;
    $scope.v3 = function(){
      $scope.visa3 = true;
      $scope.visa2 = false;
      $scope.visa1 = false;
      $scope.visa4 = false;
    };
    $scope.visa4 = false;
    $scope.v4 = function(){
      $scope.visa4 = true;
      $scope.visa3 = false;
      $scope.visa2 = false;
      $scope.visa1 = false;
    };

});

app.controller('infoblad',function($scope,$ionicSlideBoxDelegate){
  $scope.nextSlide = function(){
    $ionicSlideBoxDelegate.next();
  }
  $scope.goBack = function(){
    $ionicSlideBoxDelegate.previous();
  };
})



app.config(function($stateProvider,$urlRouterProvider) {

  $stateProvider.state("start", {
    url: "/",
    templateUrl: "start.html"
  });

  $stateProvider.state("infoblad", {
    url: "/infoblad",
    templateUrl: "infoblad.html"
  });


  $stateProvider.state("styrelse", {
    url: "/styrelse",
    templateUrl: "styrelse.html"
  });

  $stateProvider.state("garage", {
    url: "/garage",
    templateUrl: "garage.html"
  });

  $stateProvider.state("hyr", {
    url: "/hyr",
    templateUrl: "hyr.html"
  });

  $stateProvider.state("contact", {
    url: "/contact",
    templateUrl: "contact.html"
  });

  $stateProvider.state("planer", {
    url: "/planer",
    templateUrl: "planer.html"
  });

  $stateProvider.state("helgus", {
    url: "/helgus",
    templateUrl: "helgus.html"
  });

  $stateProvider.state("vader", {
    url: "/vader",
    templateUrl: "vader.html"
  });

  $urlRouterProvider.otherwise("/");

});
app.controller('aboutController',function($scope){
    $scope.actors = [
            "Scarlett Johansson",
            "Paul Bettany",
            "Emily VanCamp",
            "Paul Rudd",
            "Chris Evans",
            "Robert Downey Jr.",
            "Elizabeth Olsen",
            "Anthony Mackie",
            "Don Cheadle",
            "Jeremy Renner"
    ];
});
