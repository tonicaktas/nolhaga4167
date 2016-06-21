app.config(function($stateProvider,$urlRouterProvider) {

  $stateProvider.state("start", {
    url: "/",
    templateUrl: "templates/home.html"
  });

  $stateProvider.state("infoblad", {
    url: "/infoblad",
    templateUrl: "templates/infoblad.html"
  });


  $stateProvider.state("styrelse", {
    url: "/styrelse",
    templateUrl: "templates/styrelse.html"
  });

  $stateProvider.state("garage", {
    url: "/garage",
    templateUrl: "templates/garage.html"
  });

  $stateProvider.state("hyr", {
    url: "/hyr",
    templateUrl: "templates/hyr.html"
  });

  $stateProvider.state("contact", {
    url: "/contact",
    templateUrl: "templates/kontakt.html"
  });

  $stateProvider.state("planer", {
    url: "/planer",
    templateUrl: "templates/planer.html"
  });

  $stateProvider.state("helgus", {
    url: "/helgus",
    templateUrl: "templates/helgus.html"
  });

  $stateProvider.state("vader", {
    url: "/vader",
    templateUrl: "templates/vader.html"
  });

  $urlRouterProvider.otherwise("/");

});
