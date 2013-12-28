'use strict';

describe('Service: snuowndService', function () {

  // load the service's module
  beforeEach(module('achan.snuownd'));

  // instantiate service
  var snuowndService;
  beforeEach(inject(function (_snuowndService_) {
    snuowndService = _snuowndService_;
  }));

  it('should do something', function () {
    expect(snuowndService.render('**hello**').trim()).toEqual('<p><strong>hello</strong></p>');
  });
});
