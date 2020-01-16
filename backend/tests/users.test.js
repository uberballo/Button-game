const mongoose = require('mongoose')
const User = require('../models/user')

const newUser = {
    username:"jasper"
}

describe('User Model Test', () => {

  beforeAll(async () => {
    await mongoose.connect(
      global.__MONGO_URI__,
      { useNewUrlParser: true, useCreateIndex: true },
      err => {
        if (err) {
          console.error(err)
          process.exit(1)
        }
      }
    )
  })
  
  afterAll(async () =>{
      await mongoose.connection.close()
  })

  it('create & save user successfully', async () => {
    const validUser = new User(newUser)
    const savedUser = await validUser.save()

    expect(savedUser._id).toBeDefined()
    expect(savedUser.username).toBe(newUser.username)
  })


  it('create user with invalid username should fail', async () => {
    const userWithInvalidUsername= new User({ name: 'ja' })
    let err
    try {
      const savedUserWithInvalidUsername= await userWithInvalidUsername.save()
      error = savedUserWithInvalidUsername
    } catch (error) {
      err = error
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
    expect(err.errors.username).toBeDefined()
  })
})