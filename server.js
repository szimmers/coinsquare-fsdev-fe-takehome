const express = require('express');

const app = express();

const port = process.env.PORT || 3001;

// custom middleware
app.use('/', function(req, res, next) {
	console.log('req url:', req.url);
	next();
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

