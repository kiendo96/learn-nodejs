//require dotenv
require('dotenv').config()
const express = require('express') //import express => commonjs
// import express from express; => //es modules tu ES6
const configViewEngine = require('./config/viewEngine')
const webRoute = require('./routes/web')
// const connection = require('./config/db')



//create express application
const app = express()
const port = process.env.PORT || 3001 //init port
const host = process.env.HOSTNAME || '127.0.0.1'

//fix expressjs error about body-parse
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true }))
//config template server
configViewEngine(app)
//route config
app.use('/', webRoute)

//run server trên port đã khởi tạo
//Nạp các thông tin khai báo ở trên rồi chạy
app.listen(port, host, () => {
  console.log(`Example app listening on address: "${host}:${port}"`)
})