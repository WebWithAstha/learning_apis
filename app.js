require('dotenv').config({path:'./.env'})
const express = require('express');
const app = express();


// db connection
require('./models/connect.js').mongoConnection()


const indexRouter = require('./routes/indexRouter.js')

// setting logger
app.use(require('morgan')("tiny"))
// bodyparser
app.use(express.json())
app.use(express.urlencoded({extended:false}))


// router setup must be at bottom before server
app.use('/api/user',indexRouter)

app.all("*",(req, res) =>{
    res.status(404).json({
        url:req.url,
        message: "Page not found"
    })
})

// creating sever should be at bottom
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})