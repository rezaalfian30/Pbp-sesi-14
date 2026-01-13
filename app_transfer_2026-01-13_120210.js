const express = require('express')
require('dotenv').config()

const app = express()
app.use(express.json())

const authRoutes = require('./routes/auth')
const productRoutes = require('./routes/productRoutes')

app.use('/api', authRoutes)
app.use('/api/products', productRoutes)

const errorHandler = require('./middleware/errorHandler')
app.use(errorHandler)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`)
})
