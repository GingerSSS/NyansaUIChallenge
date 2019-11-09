angular.module('dashboard', ['resources.devices', 'filters.formatting'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'app/dashboard/dashboard.tpl.html',
    controller: 'DashboardCtrl',
    resolve:{
      devices: ['Devices', function (Devices) {
        return Devices.all();
      }]
    }
  });
}])
    //  create reusable components -> https://adrianmejia.com/creating-custom-angularjs-directives-for-beginners/
    .directive('topFive', function() {
      return {
        restrict: 'EA',
        templateUrl: 'app/dashboard/topfive.tpl.html',
        scope: true,
        link: function(scope, element, attrs) {
          scope.category = attrs.category;
          scope.key = attrs.key;
          scope.devices = mysort(scope.devices, scope.key);
        }
      };
    })
    // angular content editable -> https://fdietz.github.io/recipes-with-angular-js/common-user-interface-patterns/editing-text-in-place-using-html5-content-editable.html
    .directive("contenteditable", function () {
      return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {
          function read() {
            ngModel.$setViewValue(element.html());
          }
          ngModel.$render = function() {
            element.html(ngModel.$viewValue || "");
          };
          element.bind("blur keyup change", function() {
            scope.$apply(read);
          })
        }
      }
    })

.controller('DashboardCtrl', ['$scope', '$location', 'devices', function ($scope, $location, devices) {
  $scope.devices = devices;
}]);

// angular mongodb -> https://adrianmejia.com/creating-a-restful-api-tutorial-with-nodejs-and-mongodb/
