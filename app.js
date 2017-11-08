var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var campgrounds = [
    {name: "Salmon Creek", image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg"},
    {name: "Granite Hill", image: "https://farm9.staticflickr.com/8577/16263386718_c019b13f77.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6085/6037590541_19248d41f0.jpg"},
    {name: "Salmon Creek", image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg"},
    {name: "Granite Hill", image: "https://farm9.staticflickr.com/8577/16263386718_c019b13f77.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6085/6037590541_19248d41f0.jpg"},
    {name: "Salmon Creek", image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg"},
    {name: "Granite Hill", image: "https://farm9.staticflickr.com/8577/16263386718_c019b13f77.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6085/6037590541_19248d41f0.jpg"},
]

app.get('/', function(req,res) {
    res.render('landing');
});

app.get('/campgrounds', function(req,res) {
    res.render('campgrounds', {campgrounds: campgrounds});
});

app.post('/campgrounds', function(req,res) {
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name: name, image: image};
   campgrounds.push(newCampground);

   res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function(req,res) {
   res.render('new');
});

app.listen(3000, function() {
    console.log('Server has started!');
});
