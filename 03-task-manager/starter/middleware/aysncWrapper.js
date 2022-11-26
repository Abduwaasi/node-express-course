const asyncWrapper =(callback)=>{
  return async(req, res, next)=>{
    try {
       await callback(req,res,next) 
    } catch (error) {
        res.send(error)
    }
  }
}

module.exports = asyncWrapper