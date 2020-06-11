'use strict';
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
// const roles = require('./roles-model.js');
const user = mongoose.Schema({
  username:{ type: String, required: true },
  password: { type: String, required: true },
  role : {
    type : String,
    default : 'user',
    enum : ['admin', 'editor' ,'writer','user'],
  },
});

// user.virtual('acl', {
//   ref : 'roles', // the other schema from other file
//   localField : 'role', // the local property
//   foreignField : 'role', // the  foreign property
//   justOne : true,
// });

// user.pre('find',()=>{
//   this.populate('acl');
// });

user.pre('save',async function () {
  this.password = await bcryptjs.hash(this.password, 5);
});

// user.post('save' , async ()=>{
//   await this.populate('acl').execPopulate();
// });

module.exports = mongoose.model('user', user);
