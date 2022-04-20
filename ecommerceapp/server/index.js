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

const indexRouter = require('./routes/index');

app.use('/', indexRouter);


async function startServer() {
    loaders(app);

    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    }) 
}

startServer(); 
