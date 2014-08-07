App.controller('TrendingCtrl', function($scope, $http) {
  $scope.data = [];
  $http.get('http://infinigag.eu01.aws.af.cm/trending/all').success(function(data){
     console.log("success");
      return $scope.data = data;
    });
});