const mongoose = require('mongoose');
const mongoDBURL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/shopping'; 

module.exports = async () => {
    try {
        await mongoose.connect(mongoDBURL, {});
        console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    } catch (error) {
        console.error('COULD NOT CONNECT TO DATABASE:', error.message);
    }
};