const mongoose = require("mongoose")


const TaskSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name is a required field"],
        maxlength:[30,"Name must not be greater than 30 characters"],
        trim: true
    },
    completed:{
        type:String,
        default:false
    }
})

module.exports = mongoose.model("Task",TaskSchema)