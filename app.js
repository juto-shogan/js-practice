require('dotenv').config();

// server.js
// This file sets up the Express server
const express = require('express');
const expressLayout = require('express-ejs-layouts');

// Connects to the MongoDB database.
const connectDB = require('./server/config/db');

// Starting app
const app = express();
const port = 5000 || process.env.PORT;

// Connect to MongoDB
connectDB();

app.use(express.static('public'));

// Template engine setup
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});