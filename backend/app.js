const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const itemRouter = require('./routers/item')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://will:will@cluster0-y7ewq.mongodb.net/test?retryWrites=true&w=majority', 
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                })
         .then(() => console.log('Connexion à MongoDB réussie !'))       
         .catch(() => console.log('Echéc à la connexion à MongoDB'))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json())  
app.use('/api/todo', itemRouter)

module.exports = app








