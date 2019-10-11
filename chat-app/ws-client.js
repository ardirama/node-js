var ws = websocket("ws://localhost:3000");

ws.onopen = function(){
	setTitle("Terhubung Dengan Chat");
}

ws.onclose = function(){
	setTitle("Batal ");

}

ws.onmessage = function(payload){
		printMessage(payload.data);
}

document.forms[0].onsubmit = function(){
	var input = document.getElementById('message');
	ws.send(input.value);
	input.value = '';
}

function setTitle(title){
		document.querySelector('h1').innerHTML = title;
}


function printMessage(message){
	var p = document.createElement('p');
	p.innerText = message;
	document.querySelector('div.message').appendChild('p');
}
