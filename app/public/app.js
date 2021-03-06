(function () {
  'use strict';
  angular
    .module('cornHole', [
      'ngRoute',
      'underscore',
      'moment',
      'leagues',
      'team',
      'competitions',
      'ui.bootstrap'
    ])
    .config(function ($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/stepone', {
        templateUrl: 'views/stepOne.html',
        controller: 'MainController'
      })
      .when('/steptwo', {
        templateUrl: 'views/stepTwo.html',
        controller: 'MainController'
      })
        .when('/404', {
          template: '<h2>Sorry, page not found</h2>'
        })
        .otherwise({
          redirectTo: '/404'
        });
    });
    angular
      .module('underscore', [])
      .factory('_', function ($window) {
        return $window._;
      });
    angular
      .module('moment', [])
      .factory('moment', function ($window) {
        return $window.moment;
      });
})();
