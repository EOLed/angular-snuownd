'use strict';

describe('Service: Snuownd', function () {

  // load the service's module
  beforeEach(module('achan.snuownd'));

  // instantiate service
  var snuownd;
  beforeEach(inject(function (_snuownd_) {
    snuownd = _snuownd_;
  }));

  it('renders html from text provided', function () {
    expect(snuownd.render('**hello**').trim()).toBe('<p><strong>hello</strong></p>');
  });
});
