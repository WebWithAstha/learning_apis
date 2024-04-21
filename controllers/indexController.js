const userModel = require('../models/userModel.js')


exports.home = function (req, res, next) {
    res.send('Hello World')
}
exports.register= async function (req, res, next) {
    try {
        const user = new userModel(req.body)
        await user.save()
        res.status(202).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
exports.allusers= async function (req, res, next) {
    try {
        const users = await userModel.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error.message)
    }
}