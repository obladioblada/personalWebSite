
// declare a module
     myAppModule.controller('LeftCtrl', function ($scope,$state,$window,$rootScope) {
         $scope.progetto={};
         $scope.storage = firebase.storage();
         $scope.storageRef = $scope.storage.ref();

         $scope.loadProjects=function () {
             $scope.listaprojects=[];
             $scope.projectsLoaded=false;
             console.log("progrects loaded before" + $scope.projectsLoaded);
             firebase.database().ref('/progetti/').once('value').then(function(snapshot) {
                 snapshot.forEach(function(childSnapshot) {
                     $scope.progetto=childSnapshot.val();
                     $scope.listaprojects.push($scope.progetto)
                 });
                 console.log($scope.listaprojects);
                 $scope.projectsLoaded=true;
                 $rootScope.$apply();
                 console.log("projectsloaded" + $scope.projectsLoaded);
             });
         };

         $scope.loadProjects();

         $scope.goTolink=function (link) {
                 $window.open(link);
             };

         
         $scope.goToRight=function () {
             $state.transitionTo('rightbrain');
         };

         $scope.goToCV=function () {
             console.log("dentro gotoCV" );
             console.log($scope.storageRef );
             $scope.storageRef.child('cv/CurriculumVitae_BSLGPL92P12D423R.pdf').getDownloadURL().then(function(url) {
                 $window.open(url);
             }).catch(function(error) {
                 console.log(error);
             });
         };

         $scope.goToDownload=function (link) {
             console.log(link);
             $window.open(link);
         };


      }
    );