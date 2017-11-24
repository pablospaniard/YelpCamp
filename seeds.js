var mongoose = require('mongoose');
var Campground = require('./models/campground'),
    Comment    = require('./models/comment');

var data = [
    {
        name: "Salmon Creek",
        image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
        name: "Granite Hill",
        image: "https://farm9.staticflickr.com/8577/16263386718_c019b13f77.jpg",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
        name: "Mountain Goat's Rest",
        image: "https://farm7.staticflickr.com/6085/6037590541_19248d41f0.jpg",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    }
]

function seedDB() {
    Campground.remove({}, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log('removed campgrounds!');
        }
        data.forEach(function(seed) {
            Campground.create(seed, function(err, campground) {
                if(err) {
                    console.log(err);
                } else {
                    console.log('campground added!');
                    Comment.create(
                        {
                            text: "This place is Great!",
                            author: "Homer"
                        }, function(err, comment) {
                            if(err) {
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log('Comment created!')
                            }

                        });
                }
            });
        });
    });


}

module.exports = seedDB;

