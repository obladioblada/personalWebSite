
// declare a module
myAppModule.controller('RightCtrl',function ($scope,$rootScope,$state,$window) {
        $scope.storage = firebase.storage();
        $scope.storageRef = $scope.storage.ref();
        $scope.fotoRef = $scope.storageRef.child('foto');

        $scope.goToCV=function () {
            console.log("dentro gotoCV" );
            console.log($scope.storageRef );
            $scope.storageRef.child('cv/CurriculumVitae_BSLGPL92P12D423R.pdf').getDownloadURL().then(function(url) {
                $window.open(url);
            }).catch(function(error) {
                console.log(error);
            });
        };

        $scope.loadFoto=function () {
            $scope.listafoto=[];
            $scope.fotocaricate=false;
            console.log("fotocaricate before" + $scope.fotocaricate);
                firebase.database().ref('/foto/').once('value').then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    $scope.foto=childSnapshot.val();
                    $scope.listafoto.push($scope.foto)
                });
                   console.log($scope.listafoto);
                    $scope.fotocaricate=true;
                    $rootScope.$apply();
                    console.log("fotocaricate" + $scope.fotocaricate);
                });
        };

    $scope.loadFoto();


    $scope.openfoto=function(url){
        $("#myModal").modal();
    }

    $scope.setfotoselected=function (foto) {
        console.log(foto.url);
        $scope.fotoselectedurl=foto;
    };

    }
);