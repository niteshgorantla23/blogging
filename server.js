const express    = require('express')
const multer     = require('multer');
const bodyParser = require('body-parser');
const app        = express()

app.use (bodyParser.urlencoded({ extended: true }))
app.use (bodyParser.json())
app.use ('/api/v1/users', require('./src/routes/user.routes'))
app.use ('/api/v1/blogs', require('./src/routes/blog.routes'))



app.listen(5000,function () {
    console.log("express server working on 5000")
})
