let LocalStrategy = require('passport-local').Strategy;
let User = require('../models/User');
let strategies = {};

strategies.LogIn = new LocalStrategy(
    {
        usernameField: 'phone',
        passwordField: 'password',
        passReqToCallback: true
    },
    async function (req, phone, password, done) {
        try {
            let principal = await User.findOne({
                phone,
                password
            });
            if (principal) {
                return done(null, principal);
            } else {
                return done(false, null);
            }
        } catch (e) {
            return done(e);
        }
    }
);

strategies.SignUp = new LocalStrategy(
    {
        usernameField: 'phone',
        passwordField: 'password',
        passReqToCallback: true
    },
    async function (req, phone, password, done) {
        try {

            let alreadyExists = await User.findOne({
                phone,
            });

            if (alreadyExists) {
                return done(false, null)
            } else {
                let user = await User.create(req.body);
                return done(null, user);
            }
        } catch (e) {
            return done(e);
        }
    }
    );


module.exports = strategies;