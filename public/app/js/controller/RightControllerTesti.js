
// declare a module
myAppModule.controller('RightCtrlTesti',function ($scope,$rootScope,$state,$window,$sce) {
        $scope.storage = firebase.storage();
        $scope.storageRef = $scope.storage.ref();
        $scope.fotoRef = $scope.storageRef.child('poesie');
        $scope.testicaricati=false;

        $scope.goToLeft=function () {
            $state.transitionTo('leftbrain');
        };


        $scope.goToRightFoto=function () {
            console.log($state.current.name);
            $state.transitionTo('rightbrain');
        };

        $scope.goToRightTesti=function () {
            console.log($state.current.name);
            $state.transitionTo('rightbraintesti');
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

    $scope.deliberatelyTrustDangerousSnippet = function(testo) {
        return $sce.trustAsHtml(testo);
    };

        $scope.loadTesti=function () {
            $scope.listatesti=[];
            $scope.testicaricati=false;
            console.log("testi before" + $scope.testicaricati);
                firebase.database().ref('/poesie/').once('value').then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    $scope.testo=childSnapshot.val();
                    $scope.testo.testoNObr=$scope.testo.testo.replace( /<br>/g, "\n" );
                    console.log( $scope.testo.testoNObr);
                    $scope.listatesti.push($scope.testo);

                });
                    $scope.testicaricati=true;
                    $rootScope.$apply();

                });
            console.log($scope.listatesti);
            console.log("testicaricati" + $scope.testicaricati);
        };

    $scope.loadTesti();


    $scope.openfoto=function(url){
        $("#myModal").modal();
    }

    $scope.setfotoselected=function (testo) {
        console.log(testo.titolo);
        $scope.testoselected=testo;
    };





    }
);