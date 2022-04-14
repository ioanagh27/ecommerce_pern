const express = require('express');
const app = express();

const path = require('path');
//require('dotenv').config({ path: path.resolve(__dirname + '/.env') }) 
require('dotenv').config({path:'./.env'});

const loaders = require('./loaders');
const config = require('./config');
//console.log(config, __dirname);
//console.log(loaders, __dirname);

const port = process.env.PORT || 4000;

async function startServer() {
    loaders(app);
    //console.log(loaders);

    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    }) 
}

startServer(); 
