var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var promise = mongoose.connect('mongodb://localhost/yelp_camp', {
    useMongoClient: true,
});
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
});

var Campground = mongoose.model('Campground', campgroundSchema);

// Campground.create(
//     {
//         name: "Salmon Creek",
//         image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg",
//         description: "This is a huge description of every campground which i have on database"
//     }, function(err, campground) {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log('Newly created Campground');
//             console.log(campground);
//         }
//     });


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

//INDEX
app.get('/campgrounds', function(req,res) {
    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds) {
       if(err) {
           console.log(err);
       } else {
           res.render('index', {campgrounds: allCampgrounds});
       }
    });
});

//CREATE
app.post('/campgrounds', function(req,res) {
   var name = req.body.name;
   var image = req.body.image;
   var desc = req.body.description;
   var newCampground = {name: name, image: image, description: desc};
   // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated) {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/campgrounds');
        }
    });
});

//NEW
app.get('/campgrounds/new', function(req,res) {
   res.render('new');
});

//SHOW
app.get('/campgrounds/:id', function(req,res) {
    Campground.findById(req.params.id, function(err, foundCampground) {
       if(err) {
           console.log(err);
       } else {
           res.render('show', {campground: foundCampground});
       }
    });
});

app.listen(3000, function() {
    console.log('Server has started!');
});
