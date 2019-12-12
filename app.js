require('dotenv').config()

const cors = require('cors');
const express = require('express')
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const HomePage = require('./src/routes/homePage')
app.get('/', HomePage)

module.exports = app