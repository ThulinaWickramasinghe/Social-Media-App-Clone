const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
// const cors = require('cors')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')

dotenv.config()

mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => console.log('Connected'))
    .catch(e => console.log(e))

//middleware
app.use(express.json())
app.use(helmet())
// app.use(cors)
app.use(morgan('common'))

app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)

app.get('/', (req, res) => {
    res.send('Welcome to homepage!')
})

app.get('/users', (req, res) => {
    res.send('Welcome to user page!')
})

app.get('/', (req, res) => {
    res.send('Welcome to homepage!')
})

app.listen(8800, () => {
    console.log("Backend server is running ...")
})