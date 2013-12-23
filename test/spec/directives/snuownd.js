'use strict';

describe('Directive: snuownd', function () {
  beforeEach(module('achan.snuownd'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<snuownd>hello</snuownd>');
    element = $compile(element)(scope);
    expect(element.text().trim()).toBe('hello');
  }));
});
