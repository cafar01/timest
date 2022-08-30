// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
    res.json({ greeting: 'hello API' });
});

app.get("/api", (req, res) => {
    const now = new Date();
    res.json({ unix: now.getTime(), utc: now.toUTCString() })
});

app.get("/api/:date", (req, res) => {
    const paramsDate = req.params.date;
    const invalidDate = "Invalid Date";
    const date = parseInt(paramsDate) < 10000
        ? new Date(paramsDate)
        : new Date(parseInt(paramsDate))

    date.toString() === invalidDate
        ? res.json({ error: invalidDate })
        : res.json({ unix: date.valueOf(), utc: date.toUTCString() });
});


/*
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
*/




// your first API endpoint... 
/*
let responseObject = {}
app.get("/api/timestamp:input", function (request, response) {
let input = request.params.input
if(input.includes('-')) {
responseObject['unix']	=  new Date(input).getTime()
responseObject['utc']	=  new Date(input).toUTCString()
}else {
 input = parseInt(input)	
 responseObject['unix']	=  new Date(input).getTime()
 responseObject['utc']	=  new Date().toUTCString()
}

if(!responseObject['unix'] || responseObject['utc']) {
   response.json({error: 'Invalid Date'})	
}	
 
response.json(responseObject)
});


app.get("/api/timestamp", function (request, response) {
responseObject['unix']	=  new Date().getTime()
responseObject['utc']	=  new Date().toUTCString()	


response.json(responseObject)
})


/*
app.get("/api/timestamp/", (req, res) => {

  res.json({ unix: Date.now(), utc: Date() });

});

 

app.get("/api/timestamp/:date?", (req, res) => {

 

  //utc date?

  let date = new Date(req.params.date)

  if (date != "Invalid Date") {

   res.json({unix: date.getTime(), utc: date.toUTCString()});

  }

 

  //unix timestamp?

  const dateInt = parseInt(req.params.date);

  date = new Date(dateInt).toUTCString();

  if (date != "Invalid Date") {

    res.json({unix: dateInt, utc: date});

  }

   

  //invalid input

  res.json({ error: date });

});

// your first API endpoint... 
//app.get("/api/hello", function (req, res) {
//  res.json({greeting: 'hello API'});
//});





*/

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

