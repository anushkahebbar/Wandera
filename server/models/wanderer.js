const mongoose = require('mongoose');
const { stringify } = require('querystring');
const FollowUnfollowSchema = require('./follow-unfollow-user');

// Creating the 'user' schema
const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    followers:[{type:FollowUnfollowSchema}],//users who follow you
    following:[{type:FollowUnfollowSchema}]//users you follow
})

//Export the model so that data of userSchema type are saved in WandererCollection
const User = mongoose.model("WandererCollection", userSchema);
module.exports = User;