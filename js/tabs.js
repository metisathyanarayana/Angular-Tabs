angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('TabsDemoCtrl', function($scope, $window) {
    $scope.tabs = [{
        title: 'Angular Core',
        content: 'Angular Content',
        className: 'fa fa-database'
    }, {
        title: 'Github Data',
        content: 'Github Content',
        className: 'fa fa-user'
    }, {
        title: 'Custom Data',
        content: 'Custom Content',
        className: 'fa fa-th-large'
    }, {
        title: 'Settings',
        content: 'Settings Content',
        className: 'fa fa-cog'
    }];

});
