const express = require('express')
const mc = require('./controllers/messages_controller')

const app = express()


app.use(express.json())
app.use(express.static(__dirname + "/../public/build"))

const url = "/api/messages"

app.post(url, mc.create)
app.get(url, mc.read)
app.put(`${url}/:id`, mc.update)
app.delete(`${url}/:id`, mc.delete)

const port = 3001
app.listen(port, () => console.log(`Server is running on ${port}`))

/// BREAK ///

