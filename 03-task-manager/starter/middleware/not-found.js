const notFoundError = (req, res)=>{
  return res.status(404).json({msg:"Route does not exis"})
}

module.exports = notFoundError