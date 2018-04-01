const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
const jsonParser = bodyParser.json();

const port = process.env.PORT || 3001;

const BASE_URL = "https://api.bitfinex.com/v1";

// custom middleware
app.use('/', function(req, res, next) {
	console.log('req url:', req.url);
	next();
});

app.get('/api/quote/btcusd', function(req, res) {

	request.get(BASE_URL + '/pubticker/btcusd', function(error, response, body) {
		if (error) {
			console.error(error)
		}
		else {
			const result = JSON.parse(body);

			res.json({
				lastPrice: result.last_price
			});
		}
	});

});

// e.g. http://localhost:3000/item/77x?foo=bar
app.get('/item/:id', function(req, res) {
	res.json({
		id: req.params.id,
		foo: req.query.foo
	});
});

app.get('/api', function(req, res) {
	res.json({
		brick: 'chair'
	});
});

app.listen(port, () => console.log(`Listening on port ${port}`));

