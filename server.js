const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('Welcome to your first API development')
})

app.listen(3000, () => {
    console.log('Node API is running on port 3000')
})