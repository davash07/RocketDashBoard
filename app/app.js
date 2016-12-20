'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
    'ngRoute',
    'angular-carousel',
    'ngMaterial',
    'app.view',
    'app.version'
]).
    config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    }])
