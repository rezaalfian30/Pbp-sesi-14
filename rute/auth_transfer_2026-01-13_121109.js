const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const users = require('../data/users')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        message: 'Email dan password wajib diisi'
      })
    }

    const user = users.find(u => u.email === email)
    if (!user) {
      return res.status(401).json({
        message: 'Email tidak terdaftar'
      })
    }

    const isValid = bcrypt.compareSync(password, user.password)
    if (!isValid) {
      return res.status(401).json({
        message: 'Password salah'
      })
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    )

    res.json({
      message: 'Login berhasil',
      token
    })
  } catch (err) {
    res.status(500).json({
      message: 'Server error'
    })
  }
})


router.get('/profile', authMiddleware, (req, res) => {
  res.json({
    message: 'Akses berhasil',
    user: req.user
  })
})

module.exports = router
