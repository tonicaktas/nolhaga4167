

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



app.controller('left',function($scope, $ionicSideMenuDelegate, $ionicPopup){
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft()
  }
  $scope.toggleRight = function() {
    $ionicSideMenuDelegate.toggleRight()
  }
  /*$scope.showAlert = function() {
   var alertPopup = $ionicPopup.show({
     title: 'Updatera Infoblad',
     template: '<input type = "text" placeholder="header1" ng-model ="info.header1"><br><textarea placeholder="infotext1" type="text" ng-model="info.infotext1">',
     buttons: [
            { text: 'Cancel' }, {
               text: '<b>Updatera</b>',
               type: 'button-positive',
                  onTap: function(e) {

                     if (!$scope.data.model) {
                        //don't allow the user to close unless he enters model...
                           e.preventDefault();
                     } else {
                        return $scope.data.model;
                     }
                  }
            }
         ]
   });
 };*/
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



      $scope.bild = function(){

           if(ned == 0 && mol == 0)
        return "soligt";
      else if(ned == 0 && mol > 2)
      return "molnigt";
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

app.controller('infoblad',function($scope, $http, $ionicSlideBoxDelegate){
  //här
  $http.get('http://localhost:8000/infoblad')
  .success(function(response){

    $scope.newInfo = response;
    console.log($scope.newInfo);

  })

  $scope.visa = false;
    $scope.openn = function() {
        $scope.visa = !$scope.visa;
};

var refresha = function() {	// kör en refresh page när man klickar på button så att input data hamnar på sidan
$http.get('http://localhost:8000/infoblad/').success(function(response){

	$scope.infoblad = response;
	$scope.info = "";
	});
};


$scope.edit = function(id){ // editera objekt med hjälp av id
  console.log(id)
	$http.get('http://localhost:8000/infoblad/' + id).success(function(response){
		$scope.info = response;	 // lägger in objekt i input boxar
    console.log($scope.info)
    console.log($scope.info.header)
	});
	};

  $scope.update = function() { // allt som är i input boxar skickas till server
	$http.put('http://localhost:8000/infoblad/' + $scope.info._id, $scope.info).success(function(response){
		});
    refresha();
	};




});
