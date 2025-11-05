// import du packet express
const express = require('express');
// const json = require('express-json');
const cors = require('cors');
// const morgan = require('morgan');

// crée l'application express
const app = express();

app.use(cors());
// app.use(morgan());
// app.use(json());

app.get('/test', (req, res)=>{
    console.log('route test ok');
    res.send('test de la route ok');
})

// export app
module.exports = app;