// menggunakan path module
const path = require('path');
// menggunakan express module 
const express = require('express');
// menggunakan hbs view engine
const hbs = require('hbs');
const app = express();


// konfigurasi dynamic views file
app.set('views', path.join(__dirname, 'views'));
// konfigurasi view engine
app.set('view engine', 'hbs');
// konfigurasi folder publik menjadi statis folder untuk file statis
app.use(express.static('public'));
// route untuk halaman Home
app.get('/', (req,res) => {
	res.render('index');
});

// route untuk halaman about 
app.get('/about', (req,res) => {
	res.render('about');
});

app.listen(8080, () =>{
	console.log('server running on port 8080');
});
