const express = require('express')
const pool = require('./db')
const app = express();
const PORT = 5000;


const cors = require('cors')

app.use(cors())
app.use(express.json())

/////////////ROUTES/////////////////////////////
const userRoute = require('./routes/user.routes.js');

app.use("/", userRoute)



app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
})