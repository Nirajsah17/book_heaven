const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
  "User-ID": {
    type: Number,
    required: true
  },
  "Location": {
    type: String,
    required: true
  },
  "Age": {
    type: Number,
    required:true
  }
})
const User = mongoose.model("User", UserSchema);
module.exports = User;