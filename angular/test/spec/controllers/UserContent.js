'use strict';

describe('Controller: UsercontentCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var UsercontentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsercontentCtrl = $controller('UsercontentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});