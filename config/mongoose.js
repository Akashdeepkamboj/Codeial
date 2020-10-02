const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development');

const db = mongoose.connection;

//db.on('error', console.error.bind(console,'error while connecting to mongo db'));
db.on('error', console.error.bind(console,"Error connecting to DB"));


db.once('open',function(){
    console.log("connected to database :: MongoDB");
})

module.exports = db;