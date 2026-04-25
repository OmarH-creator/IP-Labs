const express = require('express')
const mongoose = require('mongoose')
const courseRouter = require('./routes/courseRouter')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

app.use('/courses', courseRouter)

const MONGO_URL = 'mongodb+srv://omarsalem3182004_db_user:fExrLd52zODiZrXD@myfirstcluster.vtdilgv.mongodb.net/courseDB?appName=MyFirstCluster'
const PORT = 3000

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('Connected to Database')
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`)
        })
    })
