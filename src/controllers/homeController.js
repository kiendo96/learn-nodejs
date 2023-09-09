const connection = require('../config/db')

const getHomePage = (req, res) => {
    res.render('sample')
}

const testPage = (req, res) => {
    let users = []
    connection.query(
        'SELECT * FROM Users',
        function (err, results, fields) {
            users = results
            //   console.log("results =",results); // results contains rows returned by server
            // console.log("check result= ", users)
            res.send(JSON.stringify(users)) //Convert array users to string
        }
    )

}

module.exports = {
    getHomePage,
    testPage
}