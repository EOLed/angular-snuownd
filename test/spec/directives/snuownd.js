'use strict';

describe('Directive: snuownd', function () {

  // load the directive's module
  beforeEach(module('angularSnuowndApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<snuownd></snuownd>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the snuownd directive');
  }));
});
