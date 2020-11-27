const argon2 = require('argon2')
const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const passportJWT = require('passport-jwt')
const UserController = require('./controllers/UserController')

const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy
const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
jwtOptions.secretOrKey = 'jambaLeo'
let authUser = null

const strategy = new JwtStrategy(jwtOptions, async function (jwt_payload, next) {
    const user = await UserController.findById(jwt_payload.id)
    if (user) {
        authUser = user
        next(null, user)
    } else {
        next(null, false)
    }
})
passport.use(strategy)

const app = express()
app.use(passport.initialize())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.json({message: 'Express is up!'})    
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

app.post('/login', async function (req, res) {
    try {
        const user = await UserController.findByLogin(req.body.login)
        if (await argon2.verify(user.password, req.body.password)) {
            const payload = {id: user.id}
            const token = jwt.sign(payload, jwtOptions.secretOrKey)
            res.json({message: 'OK', token: token})
        } else {
            res.status(401).json({message: 'Password did not match'})
        }
    } catch (e) {
        res.json({error: `Login error: ${e}`})
    }
})

app.get('/secret', passport.authenticate('jwt', {session: false}), function (req, res) {
    res.json({message: 'all right!', user: authUser})
})
app.get('/shared', function (req, res) {
    res.json({query: req.query})
})


app.listen(3000, () => console.log("Express running"))
