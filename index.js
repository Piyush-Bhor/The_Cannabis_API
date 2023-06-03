// import dependencies
const express = require('express');
const path = require('path');
require("dotenv").config();
const mongoose = require('mongoose');
const session = require('express-session');
const request = require('request');

// routers
const indexRouter = require('./routes/index');
const strainRoutes = require('./routes/strains');

// models
const Strain = require('./models/strainModel');

app = express();

// paths, ejs, and url setup
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended:false}));

// database connection
mongoose.set("strictQuery", false);

const url = process.env.CONNECTIONSTRING;
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(url);
  console.log('Connected to MongoDB');
}

// routes
app.use('/', indexRouter); 
app.use('/strains', strainRoutes);

// server
app.listen(8080);
console.log('Server running at http://localhost:8080');