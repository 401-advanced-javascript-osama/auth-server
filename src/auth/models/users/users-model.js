'use strict';
const schema = require('./users-schema.js');
const Model = require('../mongo.js');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.SECRET || 'mysecret';
/**
* Model Model
* @constructor Products
*/

class Users extends Model {
  constructor() {
    super(schema);
  }
  async save(record){
    const result = await this.get({username : record.username});

    if(result.length == 0){
      record.password = await bcryptjs.hash(record.password, 5);
      const user = await this.create(record);
      return user;
    }
    
  }
  async authenticateBasic(user,pass){
    const result = await this.get({username : user});
    const valid = await bcryptjs.compare(pass, result[0].password);
    return valid ? result : Promise.reject('wrong password');

  }
  generateToken(user){
    const token = jwt.sign({ username: user.username }, SECRET);
    return token;
  }
}

module.exports = new Users();
