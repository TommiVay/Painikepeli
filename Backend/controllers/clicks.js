const clicksRouter = require('express').Router()

let clicks = 0;

clicksRouter.get('/add', async (request, response, next) => {
  clicks++
  console.log(clicks)
  response.json(clicks)
})
module.exports = clicksRouter