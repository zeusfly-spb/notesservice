const argon2 = require('argon2')
const models = require('../models')
const User = models.User


const register = async data => {
    try {
        const user = await User.create({
            login: data.login,
            password: await argon2.hash(data.password)
        })
        return Promise.resolve(user.toJSON())
    } catch (e) {
        return Promise.reject(new Error(`User register failed: ${e}`))
    }
}

module.exports = { 
    register 
}
