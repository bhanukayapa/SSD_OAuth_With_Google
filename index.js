'use strict';

/**
 * Injecting dependencies
 */
//Injecting the hosting engine
const express = require('express');

//Injecting cache blocker - avoid
const no_cache = require('nocache');

//Injecting body parser - Pick body of post requests
const body_parser = require('body-parser');

//Injecting cors to avoid cross origin blocking for the front-end
const cors = require('cors');

//Injecting opn library to start the browser
var opn = require('opn');

/**
 * Initializing
 */

//Initializing the express engine
const app = express();

//Initializing the port
var PORT = process.env.PORT || 8085;

/**
 * Applying middleware
 */
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());
app.use(no_cache());
app.use(cors());
app.use(express.static(__dirname + '/public'));

/**
 * Firing up the server
 */
app.listen(PORT,function (err) {
   if(err){
       console.error(err);
   }else {
       console.log('Starting SSD OAuth Application on port ' + PORT);
   }
});

/**
 * Defining main route for the app
 */
app.get('/', (req, res) => {
    res.sendFile('public/index.html',{root:'.'});
});

/**
 * Opening up the browser
 */
opn('http://localhost:' + PORT);
