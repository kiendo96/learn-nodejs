const express = require('express') //import express => commonjs
// import express from express; => //es modules tu ES6
const path = require('path')  //require path

//require dotenv
require('dotenv').config()
//create express application
const app = express() 
const port = process.env.PORT || 3001 //init port
const host = process.env.HOSTNAME || '127.0.0.1'
//khai bao route
app.get('/', (req, res) => {
  res.render('sample')
})
app.get('/test', (req, res)=> {
  res.send('kiendt')
})
//khai bao view engine
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

//config static file
app.use(express.static(path.join(__dirname,'public')))

//run server trên port đã khởi tạo
//Nạp các thông tin khai báo ở trên rồi chạy
app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`)
})