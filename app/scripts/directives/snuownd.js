/* global SnuOwnd: true */
'use strict';

angular.module('achan.snuownd', []).
  directive('snuownd', function () {
    var snuownd = SnuOwnd.getParser();
    return {
      restrict: 'AE',
      link: function (scope, element, attrs) {
        if (attrs.btfMarkdown) {
          scope.$watch(attrs.snuownd, function (newVal) {
            var html = newVal ? snuownd.render(newVal) : '';
            element.html(html);
          });
        } else {
          var html = snuownd.render(element.text());
          element.html(html);
        }
      }
    };
  }
);
