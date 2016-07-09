'use strict';

var ejs = require('ejs');
var express = require('express');
var app = express();

var names = ["Mike", "Jimmy", "Roy", "Tara", "Steven"];
var random = Math.floor(Math.random() * 5);
var greeting = "Trains are approaching... be on your toes.";
var counter = [];
for (var i = 0; i < names.length; i++) {
  counter.push({name: names[i], survived: 0, died: 0});
}
app.get('/', function(req, res) {
  res.render('index.ejs');
});

app.get('/go', function(req, res) {
  var random = Math.floor(Math.random() * 5);
  var ninjaName = names[random];
  var liveOrDie = Math.floor(Math.random * 2);
  if (liveOrDie % 2) {
    counter[names.indexOf(ninjaName)].died++;

    //dead
  }
  else {
    counter[names.indexOf(ninjaName)].survived++;
    //alive
  }
});

app.get('/restart', function(req, res) {

});

app.listen(3000, function() {
  console.log("Listening on 3000...");
})
