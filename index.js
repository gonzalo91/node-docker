const express = require('express');
const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('./config/config');


const app = express();

const port = process.env.PORT || 3000;

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
mongoose.connect(mongoURL ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
})
.then(() =>{
    console.log('Succesfully connected to the DB')
}, err => {
    console.error('Failed while trying to connected to the DB')
})


app.get('/', (req, res) => {
    res.send('<h2>Hello world !!!!!!</h2>')
})

app.listen(port, ()=>{
    console.log('listening on port: ' + port)
})