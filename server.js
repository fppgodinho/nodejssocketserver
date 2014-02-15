var net     = require('net');
var server  = net.createServer(function(connection)                             {
    console.log('server connected');
    connection.on('end', function() {
        console.log('server disconnected');
    });
    connection.write('hello\r\n');
    connection.pipe(connection);
});

server.listen(4000, function()                                                  {
  console.log('server bound');
});