const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./utils/config')
const Count = require('./models/count')

const countRouter = require('./controllers/count')
const userRouter = require('./controllers/users')

app.use(cors())
app.use(bodyParser.json())

app.use('/', express.static('./frontend/build'))

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true }).catch(error => {
  console.log('error connection to MongoDB:', error.message)
})

Count.findOne({}).then(countExists => {
  if (!countExists) {
    console.log('Creating new count')
    const newCount = new Count({
      count: 0
    })
    newCount.save()
  }
})

app.use('/api/count', countRouter)
app.use('/api/users', userRouter)

module.exports = app
