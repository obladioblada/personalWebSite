
// declare a module
var myAppModule = angular.module('myApp',["firebase",'ui.router'])
    .constant("FBURL","https://gianpaolobasilico-6c7c8.firebaseio.com/")
    .constant("POESIEURL","https://gianpaolobasilico-6c7c8.firebaseio.com/poesie/")
    .constant("FOTOURL","https://gianpaolobasilico-6c7c8.firebaseio.com/foto/")
    .controller('MainCtrl', function ($scope,$state) {

        $scope.stateworks='closed';
        $scope.statearts='closed';
        $scope.artsopened = false;
        $scope.worksopened = false;
        $scope.enterarts='enterartclosed';
        $scope.enterworks='enterworkclosed';
        $scope.righwordexp='explenationworld';
        $scope.leftwordexp='explenationworld';
        $scope.left='closed';
        $scope.right='closed';

        $scope.openworks=function () {
            $scope.worksopened = !$scope.worksopened;
            $scope.stateworks = $scope.worksopened ? 'opened' : 'closed';
            $scope.left = $scope.worksopened ? 'opened' : 'closed';
            $scope.enterworks=$scope.worksopened ? 'enterworkopened' : 'enterworkclosed';
            $scope.leftwordexp = $scope.worksopened ? 'explenationworldopend' : 'explenationworld';
            if($scope.artsopened)
            {   $scope.statearts='closed';
                $scope.right='closed';
                $scope.enterarts='enterartclosed';
                $scope.artsopened = false;
                $scope.righwordexp='explenationworld';

            }
        };
        $scope.openarts=function () {
            $scope.artsopened = !$scope.artsopened;
            $scope.statearts = $scope.artsopened ? 'opened' : 'closed';
            $scope.right = $scope.artsopened ? 'opened' : 'closed';
            $scope.enterarts = $scope.artsopened ? 'enterartopened' : 'enterartclosed';
            $scope.righwordexp = $scope.artsopened ? 'explenationworldopend' : 'explenationworld';
            if($scope.worksopened)
            {   $scope.stateworks='closed';
                $scope.left='closed';
                $scope.enterworks='enterworkclosed';
                $scope.worksopened = false;
                $scope.leftwordexp='explenationworld';
            }
        };

        /**
         *
         * change state
         */
     $scope.goToLeft=function () {
            $state.transitionTo('leftbrain');
        };
        $scope.goToRight=function () {
            $state.transitionTo('rightbrain');
        };



      })
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/brain");

        $stateProvider.state('brain',{
            url:'/brain',
            templateUrl:'template/brain.html',
            controller:'MainCtrl'
        })
        $stateProvider.state('leftbrain',{
            url:'/leftbrain',
            templateUrl:'template/leftbrain.html',
            controller:'LeftCtrl'
        })
        $stateProvider.state('rightbrain',{
            url:'/rightbrain',
            templateUrl:'template/rightbrain.html',
            controller:'RightCtrl'
        })
        $stateProvider.state('curriculumvitae',{
            templateUrl:'https://firebasestorage.googleapis.com/v0/b/gianpaolobasilico-6c7c8.appspot.com/o/cv%2FCurriculumVitae_BSLGPL92P12D423R.pdf?alt=media&token=3114b228-4202-4398-89ef-7fc1263c2d7a',
            url:'https://firebasestorage.googleapis.com/v0/b/gianpaolobasilico-6c7c8.appspot.com/o/cv%2FCurriculumVitae_BSLGPL92P12D423R.pdf?alt=media&token=3114b228-4202-4398-89ef-7fc1263c2d7a'
        });

    });