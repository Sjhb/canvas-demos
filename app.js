const express = require('express')
let app = express()

const canvas = require('./routes/canvas')

app.get('/', (req, res) => {
	res.send('Express')
})

app.use('/static',express.static('dist'))
app.use('/canvas', canvas)

let server = app.listen(3000, () => {
	console.log(this.server)
})