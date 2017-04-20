
// declare a module
myAppModule.controller('RightCtrl',function ($scope,$rootScope,$state,$window) {
        $scope.storage = firebase.storage();
        $scope.storageRef = $scope.storage.ref();
        $scope.fotoRef = $scope.storageRef.child('foto');
        $scope.currentIndex=0;
        $scope.galleryIsOpen=false;


    /****************facebook********************/

    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');




    /**************** *******************/


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
        };

        $scope.setfotoselected=function (foto,index) {
            $scope.currentIndex=index;
            console.log(foto.url);
            console.log("index " + index) ;
            $scope.fotoselectedurl=foto;
            $scope.galleryIsOpen=true;


        };

    $scope.closegallery=function() {
        $scope.galleryIsOpen=false;

    };


    $scope.forwardphoto=function() {
        if($scope.currentIndex<$scope.listafoto.length-1)
        {
            $scope.currentIndex= $scope.currentIndex+1;
            $scope.fotoselectedurl=$scope.listafoto[$scope.currentIndex];
        }

        else{
            $scope.currentIndex=0;
            $scope.fotoselectedurl=$scope.listafoto[$scope.currentIndex];
        }
    };

     var i = null;
    $("#photocontainer").mousemove(function() {
        clearTimeout(i);
        $("#lowAction").show();
        $("#phototitle").show();
        $("#fullscreenphoto").attr("style", "cursor: initial;");

        i = setTimeout(function () {
            $("#fullscreenphoto").attr("style", "cursor: none;");
            $("#lowAction").hide();
            $("#phototitle").hide();

        }, 2000);
    }).mouseleave(function() {
        clearTimeout(i);
    });

    document.body.onkeydown = function(e){
        console.log("la galleria è aperta?" + $scope.galleryIsOpen);
       console.log(+e.keyCode);
        if($scope.galleryIsOpen){
            if(e.keyCode==39){
                $scope.forwardphoto();
                console.log("vai avanti" + "index " + $scope.currentIndex);
                $scope.$apply();

            }
            if(e.keyCode==37){
                $scope.backwardphoto();
                console.log("vai indietro" + "index " + $scope.currentIndex);
                $scope.$apply();

            }
            if(e.keyCode==27){
                if( $('#myModal'))
                $('#myModal').modal('hide');
            }

        }
    };


    $scope.shareOnfacebook=function(){

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log("facebookuser" + user);
            console.log("token" + token);
        }).catch(function(error) {

            console.log(error);
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });

        FB.ui({
            method: 'share',
            display: 'popup',
            href: 'https://developers.facebook.com/docs/',
        }, function(response){});
    }


    $scope.backwardphoto=function(index) {
        if($scope.currentIndex>0)
        {   $scope.currentIndex= $scope.currentIndex-1;
            $scope.fotoselectedurl=$scope.listafoto[$scope.currentIndex];
        }

        else{
            $scope.currentIndex=$scope.listafoto.length-1;
            $scope.fotoselectedurl=$scope.listafoto[$scope.currentIndex];
        }

    };

    }
);