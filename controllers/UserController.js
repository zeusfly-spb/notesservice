const argon2 = require('argon2')
const models = require('../models')
const User = models.User
const Note = models.Note


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

const findByLogin = async login => {
    try {
        const user = await User.findOne({where: {login: login}})
        return Promise.resolve(user.toJSON())
    } catch (e) {
        return Promise.reject(new Error(`User find error: ${e}`))
    }
}

const findById = async id => {
    try {
        const user = await User.findByPk(id)
        return Promise.resolve(user.toJSON())
    } catch (e) {
        return Promise.reject(new Error(`User find error: ${e}`))
    }
}

const userNotes = async id => {
    try {
        const user = await User.findByPk(id)
        return Promise.resolve(await user.getNotes())
    } catch (e) {
        return Promise.reject(new Error(`User notes load failed: ${e}`))
    }
}

const addNote = async data => {
    try {
        return Promise.resolve(await Note.create({...data}))
    } catch (e) {
        return Promise.reject(new Error(`Create note error: ${e}`))
    }
}

const updateNote = async data => {
    try {
        const note = await Note.findByPk(data.id)
        await note.update({text: data.text})
        return Promise.resolve(note)
    } catch (e) {
        return Promise.reject(new Error(`Update note failed: ${e}`))
    }
}

module.exports = { 
    register,
    findByLogin,
    findById,
    userNotes,
    addNote,
    updateNote
}
