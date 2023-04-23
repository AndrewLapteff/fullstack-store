const ApiError = require('../error/error')
class UserController {
  async registration(req, res, next){
    const {id} = req.query
    if(!id){
      return next(ApiError.badRequest("ID isn't found"))
    }
    res.send(id)
  }
  async login(req, res){

  }
  async check(req, res, id){

  }
}

module.exports = new UserController()