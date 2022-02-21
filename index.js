const express = require('express');
const app = express();
const {PORT} = require('./config');
const productRoute = require('./routes/product');

const port = process.env.PORT || 3000;

app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(port, ()=> {
    console.log(`App listening on port ${port}`)
})
