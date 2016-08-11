
// declare a module
     myAppModule.controller('LeftCtrl', function ($scope,$state,$window,$rootScope) {
         
         $scope.goToRight=function () {
             $state.transitionTo('rightbrain');
         };

             var storage = firebase.storage();
             var storageRef = storage.ref();
         $scope.goToCV=function () {
             console.log("dentro gotoCV" );
             console.log();
             storageRef.child('/cv/CurriculumVitae_BSLGPL92P12D423R.pdf').getDownloadURL().then(function(url) {
                 // Get the download URL for 'images/stars.jpg'
                 // This can be inserted into an <img> tag
                 // This can also be downloaded directly
                 console.log(url);
                 $window.location.href = url;
             }).catch(function(error) {
                 // Handle any errors
                 console.log(error);
             });
             // $state.transitionTo('curriculumvitae');
         };
         
      }
    );