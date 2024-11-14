const mongoose = require("mongoose");

const RatingSchema = mongoose.Schema({

});

const Ratings = mongoose.model("Ratings", RatingSchema);
module.exports = Ratings;