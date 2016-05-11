(function() {
  'use strict';

  angular.module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['clientData'];

  function MainController(clientData) {
    var vm = this;

    vm.clients = clientData.clients;
    vm.cities = clientData.cities;
    vm.cities.unshift("")
    vm.selectedCity = "";
    vm.sortBy = ""
    vm.descending = true

    vm.sort = sort
    vm.trimSize = trimSize

    function sort(field) {
      vm.sortBy = field
      vm.descending = !vm.descending
    }

    function trimSize(bio) {
      return bio.length/2
    }

  }

})();
