require("dotenv").config()
const express = require("express")
const app = express()
const mySecret = process.env['data']


app.use("/places", require("./controllers/places"))

app.get('/',(req,res) => {
  res.send("Hello World!")
})

app.listen(process.env.mySecret)

app.get("/",(req,res) => {
  res.send("Hello World")
})

app.get("*",(req,res) => {
  res.status(404).send("<h1> 404 Page </h1>")

})

app.listen(mySecret)