const UserModel = require('../models/user.model');

const createUser = async (user) => {
  const userSchema = {
    name: user.nombre,
    lastname: user.apellido,
    email: user.email,
    password: user.password
  }
  return await UserModel.createUser([Object.values(userSchema)]);
}

const credentials = async (user) =>{
    return await UserModel.credentials({
      email: user.email,
      password: user.password
    })
}

module.exports = {
  createUser,
  credentials
}