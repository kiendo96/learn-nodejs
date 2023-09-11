const connection = require('../config/db')
const { getAllUser } = require('../services/crudService')

const getHomePage = async (req, res) => {
    let results = await getAllUser()
    return res.render('home', { listUser: results})
}
const createPage  =  (req, res) => {
    res.render('createNewUser')
}
const createUser = async (req, res) => {
    let {email, name, city} = req.body
    let [results, fields] = await connection.query(`INSERT INTO Users(email, name, city) VALUES (?, ?, ?)`,[email, name, city])
    return res.send('Create new user successuflly!!!')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id
    let [results, fields] = await connection.query('select * from Users where id = ?', [userId])
    let user = results && results.length > 0 ? results[0] : {}
    return res.render('edit', {user: user})
}
const updateUser = async (req, res) => {
    let {email, name, city, id} = req.body
    let [results, fields] = await connection.query(`UPDATE Users
    SET email = ?, name = ?, city = ?
    WHERE id = ?;`,[email, name, city, id])
    return res.redirect('/')    //Chuyen huong trang ve route
}

module.exports = {
    getHomePage,
    createUser,
    createPage,
    getUpdatePage,
    updateUser
}