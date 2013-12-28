/* global SnuOwnd: true */
'use strict';

angular.module('achan.snuownd', []).
  directive('snuownd', function () {
    var snuownd = SnuOwnd.getParser();
    return {
      restrict: 'AE',
      scope: {
        'snuownd': '='
      },
      link: function (scope, element) {
        scope.$watch('snuownd', function (newVal) {
          element.html(snuownd.render(newVal));
        });

        if (element.text().trim() !== '') {
          var html = snuownd.render(element.text());
          element.html(html);
        }
      }
    };
  }
);
