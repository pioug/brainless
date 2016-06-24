var express = require('express');
var app = express();

app.use(express.static('.'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/index.html');
});

var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
