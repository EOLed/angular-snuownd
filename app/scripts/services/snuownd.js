'use strict';

/* global SnuOwnd: true */
angular.module('achan.snuownd').service('snuownd', function () {
  var snuownd = SnuOwnd.getParser();
  function render(markdown) {
    return snuownd.render(markdown);
  }

  return {
    render: render
  };
});
