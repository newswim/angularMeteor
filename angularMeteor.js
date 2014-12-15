

if (Meteor.isClient) {
  Meteor.startup(function () {
    angular.module('taskMaster', ['angular-meteor', 'famous.angular'])
        .controller('mainController', ['$scope', function($scope){
            $scope.myGridLayoutOptions = {
                dimensions: [2,3]
            };
        }]);

    angular.bootstrap(document, ['taskMaster']);
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
