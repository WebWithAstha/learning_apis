require('dotenv').config({path:'./.env'})
const express = require('express');
const app = express();


// db connection
require('./models/connect.js').mongoConnection()



const indexRouter = require('./routes/indexRouter.js')

// setting logger
app.use(require('morgan')("tiny"))




// router setup must be at bottom before server
app.use('/api/user',indexRouter)



// creating sever should be at bottom
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})