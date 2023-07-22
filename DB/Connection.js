//import moongoose

const mongoose = require('mongoose');


const DB = process.env.DATABASE

mongoose.connect(DB).then(()=>{
  console.log('DataBase connection established ...');
})

.catch((err)=>{
  console.log(err);
})