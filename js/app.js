angular.module('Demo', []);

angular.module('Demo').directive('sampleModal', function() {
  return {
    restrict: 'E',

    transclude: true,

    templateUrl: 'templates/sample-modal.html',

    scope: {
        title: '@'
    },
  };
});
