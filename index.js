const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const passportJWT = require('passport-jwt')

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

app.post('/login', (req, res) => {
    const name = req.body.name
    const password = req.body.password
})

app.listen(3000, () => console.log("Express running"))