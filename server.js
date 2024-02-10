const express = require('express')
const app = express()
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./Routes/register');
mongoose.connect('mongodb+srv://premvp24:premPK2402@cluster0.zzuvjhy.mongodb.net/?retryWrites=true&w=majority')

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
app.use(cors());
app.use(express.json())
app.use("/user", router)
