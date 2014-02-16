var WebSocketServer = require('ws').Server;
console.log('Start');
var wss             = new WebSocketServer({port: 4000});
wss.on('connection', function(ws)                                               {
    ws.on('message', function(message)                                          {
        console.log('received: %s', message);
    });
    ws.send('something');
});