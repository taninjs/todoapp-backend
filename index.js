const express = require('express')
const bodyParser = require('body-parser')

const db = require('./models')

const app = express()

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

db.sequelize.sync().then(() => {
  // create your api
  
  app.listen(3030, () => {
    console.log("Server is running on http://localhost:3030/")
  })
})

