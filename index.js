const express = require('express')
const cors = require('cors')
const parser = require('body-parser')

require('dotenv').config()

const app = express()

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'hbs')

app.use(cors())

// app.use('/cars', cars)

app.listen(app.get('port'), () => {
    console.log('Hello world!')
})
