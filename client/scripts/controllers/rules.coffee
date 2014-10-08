'use strict'

###*
 # @ngdoc function
 # @name otttoApp.controller:RulesCtrl
 # @description
 # # RulesCtrl
 # Controller of the otttoApp
###
angular.module('otttoApp')
  .controller 'RulesController', ($scope, Rules) ->

    $scope.init = ->
      do fetch


    $scope.activate = (active) ->
      $scope.rule = active


    $scope.new = ->
      $scope.rule = new Rules


    fetch = ->
      Rules.fetchAll().then (rules) -> $scope.rules = rules


    do $scope.init
