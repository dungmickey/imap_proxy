var net = require("net");
var LOCAL_SERVER_PORT = 3737;
var clientListener = require('./client_listener');

var server = net.createServer(clientListener);

server.listen(LOCAL_SERVER_PORT, function() {
  return console.log("IMAP proxy is listening on port "+LOCAL_SERVER_PORT);
});