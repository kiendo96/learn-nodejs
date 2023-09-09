const express = require('express')
const router = express.Router()
const { getHomePage, testPage } = require('../controllers/homeController')

//khai bao route
router.get('/', getHomePage)
router.get('/test', testPage)

module.exports = router