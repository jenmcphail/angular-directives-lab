angular.module('CardsAgainstAssembly')
  .directive('wdiCard', cardDirective);

function cardDirective(){
  var directive = {
    restrict: 'E',
    replace: true,
    scope: {
      question: '@'
    },
    templateUrl: "templates/cardDirective.html"
  };
  return directive;
}