/* global SnuOwnd: true */
'use strict';

angular.module('achan.snuownd').service('snuowndService', function () {
  var snuownd = SnuOwnd.getParser();

  function render(markdown) {
    return snuownd.render(markdown);
  }

  return {
    render: render
  };
});
