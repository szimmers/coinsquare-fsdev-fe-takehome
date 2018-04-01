const express = require('express');
const request = require('request');

const app = express();

const port = process.env.PORT || 3001;

const BASE_URL = "https://api.bitfinex.com/v1";

// custom middleware
app.use('/', function (req, res, next) {
    console.log('req url:', req.url);
    next();
});

app.get('/api/foo', function (req, res) {

    request.get(BASE_URL + '/pubticker/btcusd', function (error, response, body) {
        if (error) {
            console.error(error)
        }
        else {
            console.log(body);
            console.log(body.last_price);

            res.json({
                lastPrice: body.last_price
            });
        }
    });

});

// e.g. http://localhost:3000/item/77x?foo=bar
app.get('/item/:id', function (req, res) {
    res.json({
        id: req.params.id,
        foo: req.query.foo
    });
});

app.get('/api', function (req, res) {
    res.json({
        brick: 'chair'
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

