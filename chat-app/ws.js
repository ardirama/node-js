var websocket = require('ws').Server;
var wss = new websocket({port:3000});

wss.on("connection", function(ws){
		ws.on("message", function(message){
				if (message == 'exit') {
						ws.close();
				}else{
					wss.clients.forEach(function(client){
							client.send(message);
					});
				}		

		});

		ws.send("Welcome To Hell");
});
