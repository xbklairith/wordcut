var jsonBody = require("body/json");
var wordcut = require("./lib/wordcut");

var express = require('express');
var app = express();
wordcut.init();


app.set('port', process.env.PORT || 8882);

app.post('/segment', function (req, res) {

  jsonBody(req, res, function(err, body) {
	    var line = body['line'];
	    res.write(wordcut.cut(line, "|"));
	    res.end();
	});
});

app.listen(app.get('port'), function () {
  console.log(`Wordcut segmentor app listening on ${app.get('port')}`);
});

