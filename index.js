'use strict';

var ejs = require('ejs');
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

var names = ["Mike", "Jimmy", "Roy", "Tara", "Steven"];
var random = Math.floor(Math.random() * 5);
var greeting = "Trains are approaching... be on your toes.";
var counter = [];
for (var i = 0; i < names.length; i++) {
  counter.push({name: names[i], survived: 0, died: 0});
}
app.get('/', function(req, res) {
  res.render('index.ejs', {action: 'begin', counter: counter});
});

app.get('/go', function(req, res) {
  var random = Math.floor(Math.random() * 5);
  var ninjaName = names[random];
  var liveOrDie = Math.floor(Math.random() * 2);
  console.log(liveOrDie);
  if (liveOrDie % 2 === 0) {
    counter[names.indexOf(ninjaName)].died++;
    res.render('index.ejs', {action: 'dead', counter: counter});
    //dead
  }
  else {
    counter[names.indexOf(ninjaName)].survived++;
    res.render('index.ejs', {action: 'alive', counter: counter});
    //alive
  }
});

app.listen(3000, function() {
  console.log("Listening on 3000...");
})
