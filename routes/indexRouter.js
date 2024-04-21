const express = require('express');
const router = express()
const userModel = require('../models/userModel.js')
const {home,register,allusers} = require('../controllers/indexController.js')

router.get('/', home)
router.post('/register', register)
router.get('/allusers', allusers)




module.exports = router