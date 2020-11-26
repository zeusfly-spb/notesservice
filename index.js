const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const passportJWT = require('passport-jwt')
const UserController = require('./controllers/UserController')
const e = require('express')

const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy

const app = express()
app.use(passport.initialize())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.json({message: 'Express is up!'})    
})

app.post('/login', function (req, res) {
    const name = req.body.login
    const password = req.body.password
})

app.post('/register', async function (req, res) {
    try {
        const login = req.body.login
        const password = req.body.password
        res.json(await UserController.register({login, password}))
    } catch (e) {
        res.json({error: `${e}`})
    }
})

app.listen(3000, () => console.log("Express running"))