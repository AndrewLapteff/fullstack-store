const ApiError = require('../error/error')

module.exports = function (err, req, res, next){ // middleware
  if(err instanceof ApiError){
    return res.status(400).json({message: err.message})
    // next не визивається через те, що це послідній middleware
  }
  return res.status(500).json({message: err.message})
}