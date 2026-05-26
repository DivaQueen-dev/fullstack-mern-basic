const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    gender: String,
    branch: String
}, { timestamps: true }); 

module.exports = mongoose.model('User', userSchema);
