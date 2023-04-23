require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 1337
const cors = require('cors')
const router = require('./routes/index')
const errorMiddleware = require('./middleware/middleware')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router) // root router

// якщо десь умова виконається не правильно, то ми виликаємо next() і створюється помилка
app.use(errorMiddleware) // має бути самим посліднім

app.get('/', (req, res) => {
  res.send('fdsfs')
})

const start = async () => {
  try {
    await sequelize.authenticate() // You can use the .authenticate() function to test if the connection is OK:
    await sequelize.sync()         // тест на присутність таблиць
    app.listen(PORT, () => {
      console.log(`Server started on ${PORT} port`);
    })
  } catch (error) {

  }
}

start()