const express = require('express')
const app = express()
const cors = require('cors')
const clicksRouter = require('./controllers/clicks')

app.use(cors())
app.use(express.static('build'))
app.use('/api/clicks', clicksRouter)

module.exports = app