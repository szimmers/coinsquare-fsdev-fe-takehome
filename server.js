const express = require('express');
const request = require('request');

const app = express();

const port = process.env.PORT || 3001;

/**
 * base url for API for Bitfinex.
 * c.f. https://docs.bitfinex.com/docs/public-endpoints
 * @type {string}
 */
const BASE_BTX_URL = "https://api.bitfinex.com/v1";

// for debugging, let's see each request we get
/*
app.use('/', function(req, res, next) {
	console.log('req url:', req.url);
	next();
});
*/

/**
 * gets the last trade price for BTC/USD
 */
app.get('/api/ticker/btcusd', function(req, res) {

	request.get(BASE_BTX_URL + '/pubticker/btcusd', function(error, response, body) {
		if (error) {
			let msg = `Could not fetch ticker info: ${error}`;
			console.error(msg);
			res.status(500).send({error: msg});
		}
		else {
			const result = JSON.parse(body);

			res.json({
				lastPrice: result.last_price
			});
		}
	});

});

/**
 * for the provided USD amount, gets the last trade price for BTC/USD and provides a quote
 * for how much BTC that would buy
 */
app.get('/api/quote/btcusd/:amount', function(req, res) {
	// try to convert the value we got into a number
	let amount = parseFloat(req.params.amount);

	// if that fails, we're done
	if (isNaN(amount)) {
		let msg = `Amount must be a number, got: ${req.params.amount}`;
		console.error(msg);
		return res.status(400).send({error: msg});
	}

	// need to ensure said amount is > 0
	if (amount <= 0) {
		let msg = `Amount must be positive, got: ${amount}`;
		console.error(msg);
		return res.status(400).send({error: msg});
	}

	// great, let's grab the last traded price and return a quote
	request.get(BASE_BTX_URL + '/pubticker/btcusd', function(error, response, body) {
		if (error) {
			let msg = `Could not fetch ticker info: ${error}`;
			console.error(msg);
			res.status(500).send({error: msg});
		}
		else {
			const result = JSON.parse(body);
			let lastPrice = result.last_price;
			let quote = amount / lastPrice;

			res.json({
				quote: quote
			});
		}
	});

});

app.listen(port, () => console.log(`Listening on port ${port}`));

