const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('config'); //we load the db location from the JSON files
const routes = require('./routes/routes');

//db options
let options = { 
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } 
}; 

//db connection      
mongoose.createConnection(config.DBURL, options);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'database connection error:'));

//don't show the log when it is test
if(config.util.getEnv('NODE_ENV') !== 'test') {
    //use morgan to log at command line
    app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}

//parse application/json and look for raw text                                        
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  

routes(app);

app.listen(config.PORT || 8080);
console.log("Listening on port " + (config.PORT || 8080));

// for testing
if(config.util.getEnv('NODE_ENV') === 'test') {
    module.exports = app; 
}
