// const recipes = require('db/fixtures.recipes.json')

const host = 'http://localhost:3030'

//create a user
// POST /users
fetch(`${HOST}/users`. {
  method: 'POST',
  body: user
})
  .then(() => {
      //authenticate as the user
      // POST /sessions
      fetch(`${HOST}/sessions`, {
        method: 'POST',
        body: {
          email: user.email,
          password: user.password
        }
      })
      .then((res) => res.json())
      .then((res) => {
        const {token } = res
        console.log('authenticated! Token:', token)
      })
    .catch((err => console.log(err)
  ))
  })
const user = {
  name: 'Jamie Gulliver',
  email: 'jamie@mail.com',
  password: '123456',
}
