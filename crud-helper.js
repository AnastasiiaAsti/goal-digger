require('dotenv').config();
require('./config/database');

const User = require('./models/user');
const Item = require('./models/item');
const Category = require('./models/category');
const List = require('./models/list');

let user, item, category, list;
let users, items, categories, lists;