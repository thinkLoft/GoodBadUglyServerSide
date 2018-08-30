var http = require('http');

var GOOD = 7000;
var BAD = 7500;

function handleRequest(request, response) {
  response.end('Hello Bad World');
}
var server1 = http.createServer(function(req, res) {
  res.end('hello Good world');
});
var server2 = http.createServer(handleRequest);

server1.listen(GOOD, function() {
  console.log('Server is listening on PORT ' + GOOD);
});

server2.listen(BAD, function() {
  console.log('Server is listening on PORT ' + BAD);
});
