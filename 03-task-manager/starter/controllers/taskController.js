const Task = require("../models/task")
const asyncWrapper = require("../middleware/aysncWrapper")

const {createCustomError} = require("../errors/customError")
const getAllTasks = asyncWrapper(async(req,res)=>{
  const tasks = await Task.find()
  res.status(200).json({success:true, message:tasks})
})
const createTask =async(req, res)=>{
const tasks = await Task.create(req.body)
res.status(201).json({success:true, tasks})
}
const getTask =async(req, res,next)=>{
 const {id:taskId} = req.params
 const task = await Task.findOne({_id:taskId})

 if(!task){
  return next(createCustomError(`Could not find the task with an Id: ${taskId}`,404))
  
}
res.status(200).json({success:true, task})
}
const updateTask =async(req, res,next)=>{

    const {id:taskId} = req.params
   const data = req.body
   const task = await Task.findOneAndUpdate({_id:taskId},data,{new:true,runValidator:true})
   if(!task){
 return next(createCustomError(`Could not find the task with an Id: ${taskId}`,404))
   }
   res.status(200).json({success:true,message:data})
}
const  deletetask = async(req, res,next)=>{

    const {id:taskId} = req.params
    const task = await Task.findOneAndDelete({_id:taskId})
    if(!task){
     return next(createCustomError(`Could not find the task with an Id: ${taskId}`,404))
    } 
    res.status(200).json({success:true, task})
}

module.exports = {
    getAllTasks, createTask,getTask,updateTask,deletetask
}