'use strict'

###*
 # @ngdoc function
 # @name otttoApp.controller:MainCtrl
 # @description
 # # MainCtrl
 # Controller of the otttoApp
###
angular.module('otttoApp')
  .controller 'MainCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
