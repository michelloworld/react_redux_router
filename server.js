const express = require('express')
const path = require('path')

const app = express()
require('dotenv').config()

// views
app.set('view engine', 'ejs')

// assets
app.use('/dist', express.static('dist'))

// routes
app.get('*', (req, res) => {
	res.render('app', {})
})

// server
const port = process.env.SERVER_PORT
app.listen(port, () => console.log('Server is running on port ' + port))