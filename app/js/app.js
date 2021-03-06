'use strict';

// Declare app level module which depends on views, and components
angular.module('weatherApp', [
    'ngRoute',
    'forecastService',
    'ngResource',
    'angularMoment',
    'highcharts-ng',
    'ngAutocomplete'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/'});
}]);
