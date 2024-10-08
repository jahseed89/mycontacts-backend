const express = require("express")
const dbConnection = require("./config/dbConnection")

const dotenv = require("dotenv").config()

dbConnection()
const app = express()

const port = process.env.PORT

app.use("/api/contacts", require('./routes/contactRoutes'))

app.use(express.json());


app.listen(port, () =>{
    console.log(`Your app is runing on port ${port}`)
})