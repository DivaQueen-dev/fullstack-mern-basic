
const express = require('express')
const app = express()
const dotenv = require('dotenv').config();
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors())
app.use(express.json())


const userRoutes =require("./routes/userRoutes")



// app.get('/',(req,res)=>{
//         res.send(users)
// })

app.get('/api/users',userRoutes)



// app.post('/add-detail',(req,res)=>{
//     const {first_name,last_name,gender,branch} = req.body;
//     console.log(first_name,last_name,gender,branch)
//     return res.send("data successfully stored")
// })
app.post('/api/add-user',userRoutes)


// app.get('/details/:id',(req,res)=>{
//     const newData = users.filter(ele=> ele.id.toString() === req.params.id)
//     return res.send(newData)
// })

app.get('/api/get-user-by-id/:id',userRoutes)

app.delete('/api/delete-user-by-id/:id',userRoutes)


app.put('/api/update-user-by-id/:id',userRoutes)

connectDB()

app.listen(PORT, ()=>{
    console.log(`Our server is running successfully at PORT ${PORT}`)
})