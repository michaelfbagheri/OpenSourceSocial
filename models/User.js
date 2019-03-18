const mongoose = require("mongoose");
var bcrypt = require('bcrypt-nodejs');



const userSchema = mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    imageurl: { type: String, require: false },
    userName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    Netrating: { type: Number, require: false },
    hostingCred: { type: Number, require: false },
    guestCred: { type: Number, require: false }
});




userSchema.methods.encryptPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

//this method is used to compare the password being input by the user to that in the database
//we pass the "password" argument to this function when we call it from the passport config file
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}


// gooddeedsdb
module.exports = mongoose.model('User', userSchema);
