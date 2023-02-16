const mogoose = require('mongoose')

const { DB_CON_STRING } = process.env

module.exports = () => {
    // mogoose.connect("mongodb://localhost/ecommerce")
    mogoose.connect("mongodb+srv://venom21:12345@cluster0.wjf3hkt.mongodb.net/test")
        .then(() => console.log('DB Connection Successfull'))
        .catch(err => console.log(err.message))
}