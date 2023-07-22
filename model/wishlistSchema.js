//import mongoose
 
const mongoose = require('mongoose');

//define schema for products collection to store data

const wishlistSchema = new mongoose.Schema({
  id:{
    type:Number,
    required:true,
    unique:true
  },
  title:{
    type:String,
    required:true,
  },
 price:{
    type:Number,
    rquired:true,
},
image:{
  type:String,
  required:true
},
  

})

//import a model to store product details

const wishlists = new mongoose.model('wishlists',wishlistSchema)


//export model

module.exports = wishlists