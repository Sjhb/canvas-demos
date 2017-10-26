const express = require('express')
const canvas = express.Router()

canvas.use((req, res, next) => {
    console.log('Time:' + Date.now())
    next()
})

canvas.get('/', (req, res,next) => {
    let time = Date.now()
    console.log('Home:'+time)
    res.send('Home:'+time)
    next()
}, (req, res) => {
    console.log('haha')
})

canvas.get('/about', (req, res) => {
    let time = Date.now()
    console.log('About:'+time)
    res.send('About:'+time)
})

module.exports = canvas