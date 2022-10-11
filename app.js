var express = require('express');
var app = express();
const path=require('./routes/mailer_routes');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());

//Products routes
app.use("/",path);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

