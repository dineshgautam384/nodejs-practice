// const mongoose = require('mongoose');

// const mongoURL = 'mongodb://localhost:27017/hotels';

// mongoose.connect(mongoURL);

// const db = mongoose.connection;

// db.on('connected', ()=>{
//     console.log("Connected to mongoDB Server")
// })

// db.on('error', (err)=>{
//     console.error("mongoDB Connection Error: "+err)
// })

// db.on('disconnected', ()=>{
//     console.log("mongoDB Server Disconnected")
// })



// module.exports = db;






















const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = 'mongodb://localhost:27017/hotels';

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log("MongoDB Server Connected");
})

db.on('error', (err)=>{
    console.log("Error hs occured" + err);
})

db.on('disconnected', ()=>{
    console.log("MongoDB Server Disconnected");
})

module.exports = db;



