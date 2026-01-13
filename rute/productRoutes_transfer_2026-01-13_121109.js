const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/', authMiddleware, (req, res) => {
  res.json({
    message: 'Berhasil mengakses data produk',
    userLogin: req.user,
    products: [
      { id: 1, name: 'Laptop', price: 8000000 },
      { id: 2, name: 'Mouse', price: 150000 }
    ]
  })
})

module.exports = router
