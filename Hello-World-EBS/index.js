//console.log('Hello World! https://vi-code.github.io')

const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello World! https://vi-code.github.io');
});

app.get('/about', (req, res) => {
	res.send('This is my experiment with aws and building my first web app');
});

//Starting server
if(module == require.main) {
	const srvr = app.listen(process.env.PORT || 8080, () => {
		const port = srvr.address().port;
		console.log('App listening on port #');
	});
}

module.exports = app;

