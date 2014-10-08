'use strict'

angular.module('otttoApp')
  .controller 'ModulesController', ($scope, Modules) ->

    $scope.init = ->
      do fetch


    $scope.activate = (active) ->
      $scope.module = active


    $scope.blank = ->
      $scope.module = new Modules


    $scope.save = ->
      $scope.module.$save().then fetch


    $scope.cancel = ->
      delete $scope.module


    $scope.delete = ->
      $scope.module.$destroy().then fetch
      delete $scope.module


    fetch = ->
      Modules.fetchAll().then (modules) -> $scope.modules = modules


    do $scope.init