const mongoose = require('mongoose')


const connectDB = async () => {
//logic to connect db
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("db connection successful");
        
    } catch (error) {
        console.log("Data base connection failed",error.message);
    }
}


module.exports = connectDB;
