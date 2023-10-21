const express = require('express')
const mongoose = require('mongoose')
const personsRouter = require('./routes/persons')
const infoRouter = require('./routes/info')

require('dotenv').config()

const { MONGODB_URI, PORT } = process.env
mongoose.connect(MONGODB_URI)

const app = express()

app.use(express.json())

app.use('/api/persons', personsRouter)
app.use(infoRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})