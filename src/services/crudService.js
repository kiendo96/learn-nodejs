const connection = require('../config/db')

const getAllUser = async () => {
    const [results, fields] = await connection.query('select * from Users')
    return results
}
// const createNewUSer = async (email, name, city) => {
//     console.log(nam)
//     let [results, fields] = await connection.query(`INSERT INTO Users(email, name, city) VALUES (?, ?, ?)`,[email, name, city])
// }
module.exports = {
    getAllUser
}