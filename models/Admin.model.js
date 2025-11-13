const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const bcrypt = require("bcryptjs");


const adminSchema = new Schema({
    username: { type: String, required: false, unique: false },
    email: {
        type: String,
        unique: false,
        lowercase: true,
        trim: true,
        required: true,
    },
    password: { type: String, required: false, unique: false },
    leaveperiod: {
        type: String,
        required: false,
        unique: false
    },
    user: {
        type: String,
        required: false,
        unique: false
    },
    photo: {
        type: String,
        trim: true,
    },

    isLoggedIn: {
        type: Boolean,
    },
    removed: {
        type: Boolean,
        default: false,
    },
    enabled: {
        type: Boolean,
        default: true,
    },

    IsDeleted: {
        type: Boolean,
        default: true

    },
    isActive: {
        type: Boolean,
        default: true
    },
    rolesId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});


// generating a hash
adminSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(), null);
};

// checking if password is valid
adminSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};


adminSchema.plugin(mongoosePaginate);
const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;


