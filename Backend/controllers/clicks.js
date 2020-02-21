const clicksRouter = require('express').Router()

//Count of total clicks
let clicks = 0;

//Checks how many points the click has won
//every 10. click = 5pts
//every 100. click = 40pts
//every 500. click = 250pts 
//otherwise 0pts
const CheckWinAmount = () => {
  if (clicks % 500 == 0) {
    return 250
  } else if (clicks % 100 == 0) {
    return 40
  } else if (clicks % 10 == 0) {
    return 5
  } else {
    return 0
  }
}

//Calculates how many clicks until next win
const nextWinIn = () => 10 - (clicks % 10)

clicksRouter.get('/add', async (request, response, next) => {
  clicks++
  const win = CheckWinAmount()
  const clicksToWin = nextWinIn()
  response
    .status(200)
    .send({
      win: win,
      clicksToWin: clicksToWin
    })
})
module.exports = clicksRouter