const User = require("./models/user");
const Book = require("./models/book");

function findAllBooks(){
    return new Promise((resolve, reject) => {
        try{
            resolve(Book.find({}).lean().exec());
        } catch (err){
            reject(new Error(err))
        }
    })
}

module.exports = {
    findAllBooks
}