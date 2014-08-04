/*var resource = 
$.ajax({
    url: "http://infinigag.eu01.aws.af.cm/trending/0",
 
    // the name of the callback parameter, as specified by the YQL service
    jsonp: "callback",
 
    // tell jQuery we're expecting JSONP
    dataType: "jsonp",
 
    // tell YQL what we want and that we want JSON
    data: {
        q: "select title,abstract,url from search.news where query=\"cat\"",
        format: "json"
    },
 
    // work with the response
    success: function( response ) {
        console.log( response ); // server response
    }
});


App.factory('Chadder', [
  '$resource', function($resource) {
    return $resource('http://infinigag.eu01.aws.af.cm/trending/0', []);
  }
]);

App.factory('Chadder', function(resource) {
	return $resource
})
*/