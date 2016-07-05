angular.module('CardsAgainstAssembly')
  .directive('wdiCard', wdiCard);

function wdiCard(){
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