const {CustomApiError} = require("../errors/customError")

const customeErrorHandler = (err, req, res, next)=>{
   if(err instanceof CustomApiError){
    return res.status(err.statusCode).json({msg:err.message})
   }
   res.status(500).json({msg:`Something went wrong, please try again`})
}


module.exports = customeErrorHandler