const express = require('express')
const router = express.Router()
const { getHomePage, createUser, createPage, getUpdatePage, updateUser } = require('../controllers/homeController')

//khai bao route
router.get('/', getHomePage)
router.get('/create-user', createPage)
router.post('/create-user', createUser)
router.get('/update/:id', getUpdatePage)
// router.get('/test', testPage)
router.post('/update-user', updateUser)

module.exports = router