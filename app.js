const express = require('express');
const app = express();

// route untuk halamam home
app.get('/', (req,res) => {
	res.send('welcome To Home');
});

app.get('/about', (req,res) => {
	res.end('This is a About Page');
});

app.listen(8080, () => {
	console.log('server on running at port 8080');
});