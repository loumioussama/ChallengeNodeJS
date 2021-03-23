  
const express = require('express');
const bodyParser = require('body-parser');

// connect to database
const connect = require('./dataBase/connect');
// import routes

const todoApi = require('./routes/todoApi');
const userApi = require('./routes/userApi');
// Create express App
const app = express();
const port = 3000;
// Common Configurations

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes sections
// Home Route
app.get('/', async(req,res) => {
    res.json({message: 'Welcome to my REST API.'});
});

//////////*******todoApi */
app.use('/todo', todoApi);
app.use('/user', userApi);


// End route section

app.listen(process.env.port || port, function () {
    console.log(`Backend server start on port ${port}`);
});