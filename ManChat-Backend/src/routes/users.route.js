const { Router } = require('express');
const { users: constroller } = require('../controllers')

const { getAll, add } = constroller

const users = Router();

users
    .get('/', getAll)
    .post('/', add)

module.exports = users;