const passport = require('passport');
const gravatar = require('gravatar');

const User = require('../models/User');
const validateRegisterInput = require('../validation/register')

module.exports = app => {

  // @route  GET /api/users/user
  // @desc   get the user data
  // @access private
  app.get('/api/users/user', (req, res) => {
    res.send(req.user)
  })

  // @route  GET /api/users/logout
  // @desc   Log Out from oauth session
  // @access private
  app.get('/api/users/logout', (req, res) => {
    req.logout()
    res.json({
      session: 'logout'
    })
  })

  // @route  GET /api/users/Login
  // @desc   Login from local session
  // @access public
  app.post('/api/users/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  }))

  // @route  GET auth/google
  // @desc   Register user with google Oauth
  // @access Public
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }))

  // @route  GET auth/google
  // @desc   Login user with google Oauth
  // @access Private
  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/')
  })

  // @route  GET auth/facebook
  // @desc   Register user with google Oauth
  // @access Public
  app.get('/auth/facebook', passport.authenticate('facebook', {
    scope: ['email']
  }))

  // @route  GET auth/facebook
  // @desc   Login user with google Oauth
  // @access Private
  app.get('/auth/facebook/callback', passport.authenticate('facebook'), (req, res) => {
    res.redirect('/')
  })

  // @route  Post /api/users/register
  // @desc   register users localy
  // @access public
  app.post('/api/users/register', async (req, res) => {

      const {
        errors,
        isValid
      } = validateRegisterInput(req.body)

      //Check Validation
      if (!isValid)
        return res.status(400).json(errors)
        
      //Check if user exist, then create
      const exist = await User.findOne({
        email: req.body.email
      });

      if (exist) {
        errors.email = 'Email already exists'
        return res.status(400).json(errors)
      } else {

      const avatar = gravatar.url(req.body.email, {
        s: '200', // Size
        r: 'pg', // Rating
        d: 'mm', // Default
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });

      try {
        const user = await newUser.save();
        console.log("user: " + JSON.stringify(user));
        res.send(user);
      } catch (err) {
        console.log(err);
        res.status(422).send(err);
      }
    }
  })

};