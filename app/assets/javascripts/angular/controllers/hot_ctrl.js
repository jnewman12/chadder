/*App.controller('HotCtrl', [
  '$scope', 'Chadder', function($scope, Chadder) {
    return $scope.chadder = Chadder.query();
  }
]);


App.controller('HotCtrl',['$scope', '$http', function($scope,$http){
  $scope.data = [];
  $http.get('http://infinigag.eu01.aws.af.cm/trending/0').success(function(data){
  	 console.log("success");
      return $scope.data = data;
    });
}]);

*/
App.controller('HotCtrl', function($scope, $http) {
  $scope.data = [];
  $http.get('http://infinigag.eu01.aws.af.cm/trending/all').success(function(data){
     console.log("success");
      return $scope.data = data;
    });
});