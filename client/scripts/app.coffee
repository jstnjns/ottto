'use strict'

angular
  .module('OtttoApp', [
    'ngResource'
    'ngRoute'
    'ActiveRecord',
    'frapontillo.bootstrap-switch'
  ])


  .config ($routeProvider, $locationProvider) ->
    $routeProvider
      .when '/',
        templateUrl: 'views/main.html'
        controller: 'MainController'
      .when '/modules',
        templateUrl: 'views/modules.html'
        controller: 'ModulesController'
      .when '/modules/:id',
        templateUrl: 'views/modules.html'
        controller: 'ModulesController'
      .when '/moduletypes',
        templateUrl: 'views/moduletypes.html'
        controller: 'ModuleTypesController'
      .when '/modulegroups',
        templateUrl: 'views/modulegroups.html'
        controller: 'ModuleGroupsController'
      .when '/rules',
        templateUrl: 'views/rules.html'
        controller: 'RulesController'
      .when '/rules/:id',
        templateUrl: 'views/rules/rule.html'
        controller: 'RuleController'
      .when '/rules/new',
        templateUrl: 'views/rules/rule.html'
        controller: 'RuleController'

      .otherwise
        redirectTo: '/'

    # $locationProvider.html5Mode yes
