const express = require('express');
const User = require('../models/User');
const router = express.Router();

/**
 *  GET /  get all the users
 *  POST / create a new user
 *  GET /:id get a specific user
 *  PUT /:id edit a specific user
 *  DELETE /:id edit a specific user
 */

// equivalent of /users/
router
  .route('/')
  .get((req, res) => {
    User
      .find({})
      .then(users => res.send(users))
      .catch(err => res.status(400).json(err));
  })
  .post((req, res) => {
    const newUser = new User({ username: req.body.username });

    newUser
      .save()
      .then(user => res.send(user))
      .catch(err => res.status(400).json(err));
  });


router
  .route('/:id')
  .get((req, res) => {
    User
      .findById(req.params.id)
      .then(users => res.send(users))
      .catch(err => res.status(400).json(err));
  })
  .put((req, res) => {
    User
      .findByIdAndUpdate(req.params.id, { username: req.body.username }, { new: true })
      .then(user => res.send(user))
      .catch(err => res.status(400).json(err));
  })
   .delete((req, res) => {
    User
      .findByIdAndDelete(req.params.id)
      .then(user => res.send(user))
      .catch(err => res.status(400).json(err));
  });



module.exports = router;
