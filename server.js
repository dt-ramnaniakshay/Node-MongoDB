const express = require('express')
require('dotenv').config();
//importing db configration
const connectDB = require('./config/mongodbconfig')
const userRoutes = require('./routes/userRoute')
var cors = require('cors')



connectDB();
const app = express();
app.use(cors())
app.use(express.urlencoded( {extended: true}))
app.use(express.json())

app.use('/api/users', userRoutes)

//default route
app.get('/',(req,res)=>{
    res.status(200).send('API is working fine now')
})


const PORT = process.env.PORT || 2000

app.listen(PORT, () => {
    console.log(`your express ap is running on ${PORT}`);
})