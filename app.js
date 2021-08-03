const express = require('express');
const logger = require('morgan');

const wikiRounter = require('./routes/wiki');

const app = express();
const port = 3000; 


app.use(logger('dev'));
app.use(express.static('public'));


// Routers
app.use('/wiki', wikiRounter);




app.get('/', function(req, res) {
	res.send('hello world!');
});



app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('Something broke!');
});



app.listen(port, () => {
	console.log(`Server is listening at ${port}...`)
});


