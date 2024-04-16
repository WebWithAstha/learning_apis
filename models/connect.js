const mongoose = require('mongoose');

exports.mongoConnection = async ()=>{

    try {
       await mongoose.connect(process.env.MONGOURL)
       console.log("connection established!")
    } catch (error) {
        console.log(error.messsage)
    }
}