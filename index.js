// index.js
const express = require('express')
const bodyParser = require('body-parser')
const { recipes } = require('./routes')

const PORT = process.env.PORT || 3030

let app = express()
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())

  // Our routes
  .use(recipes)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    // only print full errors in development
    error: app.get('env') === 'development' ? err : {}
  })
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
