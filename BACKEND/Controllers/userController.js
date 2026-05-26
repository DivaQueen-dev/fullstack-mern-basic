const User = require("../models/userModel")



const addUser = async(req,res) => {
    const {first_name, last_name, gender, branch} = req.body;
    try{
        const newUser = new User({
            first_name,
            last_name,
            gender,
            branch
        });
        await newUser.save();
        res.status(201).json({
            message : "user Created", user: newUser
        })
    }
    catch(err){
        res.status(400).json({ message : err.message})
    }
}

const getUsers = async(req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({
            message : err.message
        });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



const deleteUser = async(req,res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


const editUser = async (req, res) => {
    const id = req.params.id;
    const { first_name, last_name, gender, branch } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { first_name, last_name, gender, branch },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


module.exports = {
    getUsers,
    addUser,
    getUserById,
    deleteUser,
    editUser
};