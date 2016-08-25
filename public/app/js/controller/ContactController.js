
// declare a module
     myAppModule.controller('ContactCtrl', function ($scope,$state,$window) {

         $scope.facebookURL="https://www.facebook.com/basgia1992";
         $scope.twitterURL="";
         $scope.googleplusURL="https://plus.google.com/+GianpaoloBasilicò";
         $scope.linkedinURL="https://www.linkedin.com/in/gianpaolo-basilic%C3%B2-12233a104?trk=nav_responsive_tab_profile";

         $scope.goTofacebook=function () {
             $window.open( $scope.facebookURL );
         };

         $scope.goTotwitter=function () {

             $window.open($scope.twitterURL);
         };

         $scope.goTogoogleplus=function () {

             $window.open($scope.googleplusURL);
         };

         $scope.goTolinkedin=function () {
             $window.open($scope.linkedinURL);
         };
         
      }
    );