const { Router } = require("express");
const postNewUser = require('../handlers/Users/newUser');
const user_login = require('../handlers/Users/userLogin');


const users_router = Router();


users_router.post('/create_user', postNewUser);
users_router.post('/user_login', user_login);




module.exports = users_router;