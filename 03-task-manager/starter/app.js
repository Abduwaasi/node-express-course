const express = require("express")
require("dotenv").config()
const ConnectDb = require("./db/connect")
const app = express()
const taskRouter = require("./routes/task")
const notFoundError = require("./middleware/not-found")
const customeErrorHandler = require("./middleware/errorHandler")
const port = 8000

// Medileware
app.use(express.json())

app.use("/api/v1/tasks", taskRouter)
app.use(notFoundError)
app.use(customeErrorHandler)



const start = async()=>{
  try {
    await ConnectDb(process.env.MONGO_DB_URI)
    app.listen(port, ()=>{
        console.log(`App currently listen on port ${port}`)
    })
  } catch (error) {
    console.log({Error:error})
  }
}

start()
