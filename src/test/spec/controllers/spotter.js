'use strict';

describe('Controller: SpotterCtrl', function () {

  // load the controller's module
  beforeEach(module('arma3SpotterApp'));

  var SpotterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpotterCtrl = $controller('SpotterCtrl', {
      $scope: scope
    });
  }));

  //it('should attach a list of awesomeThings to the scope', function () {
  //  expect(scope.awesomeThings.length).toBe(3);
  //});
});
