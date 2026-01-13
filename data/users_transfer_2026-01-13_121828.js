const bcrypt = require('bcryptjs')

const users = [
  {
    id: 1,
    email: 'ardimadinah@gmail.com',
    password: bcrypt.hashSync('123456', 8)
  },
  {
    id: 2,
    email: 'ardimadinah1@gmail.com',
    password: bcrypt.hashSync('password1', 8)
  },
  {
    id: 3,
    email: 'ardimadinah2@gmail.com',
    password: bcrypt.hashSync('password2', 8)
  }
]

module.exports = users
