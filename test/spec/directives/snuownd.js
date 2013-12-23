'use strict';

describe('Directive: snuownd', function () {
  beforeEach(module('achan.snuownd'));

  var element, scope, compile;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    compile = $compile;
  }));

  it('should make hidden element visible', function () {
    element = angular.element('<snuownd>hello</snuownd>');
    element = compile(element)(scope);
    expect(element.html().trim()).toBe('<p>hello</p>');
  });

  it('renders text within snuownd tags as reddit markdown', function () {
    element = angular.element('<snuownd>**hello**</snuownd>');
    element = compile(element)(scope);
    expect(element.html().trim()).toBe('<p><strong>hello</strong></p>');
  });

  it('binds scope values via snuownd attribute', function () {
    scope.mytext = '**this is text**';
    element = angular.element('<div snuownd="mytext"></div>');
    element = compile(element)(scope);
    scope.$digest();
    expect(element.html().trim()).toBe('<p><strong>this is text</strong></p>');
  });
});
