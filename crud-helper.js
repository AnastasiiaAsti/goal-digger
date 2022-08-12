require('dotenv').config();
require('./config/database');

const User = require('./models/user');
const Goal = require('./models/goal');


let user, goal;
let users, goals;