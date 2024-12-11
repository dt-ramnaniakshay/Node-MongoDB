// this file will be responsible to do a crud operation
const User = require('../models/userModel')
const getUsers = async(req,res) => {
    //api to get all users
    try {
        
        const output = await User.find();
        res.status(200).json(output)

    } catch (error) {
        res.status(500).send({'msg': 'getting error'+error.message })
    }
}

const createUser = async(req,res) => {
    //api to create a new user
    try {

        const {name,email,age} = req.body

        const user = new User({ name,email,age })
        const output = await user.save()
        res.status(201).json(`record added ${output}`)
        
    } catch (error) {
        res.status(500).send({'msg': 'getting error'+error.message })
    }

}

const getUserById = async(req,res) => {
    //api to get a single user
    //console.log("inside function")
    try {

        const user = await User.findById(req.params.id);
        res.status(200).json(user)
        
    } catch (error) {
        res.status(404).send({'msg': 'User not found'+error.message })
    }

}

//combination of get user by id and create user

const updateUser = async(req,res) => {
    //api to update a single user
    try {

        const {name,email,age} = req.body
        const user = await User.findByIdAndUpdate(
             req.params.id,
             {name,email,age},
             { new: true, runValidators: true} )
        res.status(200).json(user)

    } catch (error) {
        res.status(500).send({'msg': 'error in updation '+error.message })
    }
}

const deleteUser = async(req,res) => {
    //api to delete a user
    try {

        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({message : "user deleted sccesfully"})
        
    } catch (error) {
        res.status(404).send({'msg': 'User not found'+error.message })
    }
}

module.exports = {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
}