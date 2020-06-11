const express = require('express');

const users = require('./models/users/users-model.js');

const basicAuth = require('./middleware/basic.js');

const oauth = require('./middleware/oauth.js');

const router = express.Router();

router.post('/signup', saveHandler);

router.post('/signin', basicAuth , signinHandler);

router.get('/users' , listHandler);



async function saveHandler (req,res){
  try{
    const user = await users.save(req.body);
    const token = users.generateToken(user);
    res.json({ token });
  }catch(err){
    console.error(err);
    
    res.status(403).send('user already exists');
  }
    
}

function signinHandler (req, res)  {
  res.json({ token: req.token , user: req.user });
}

async function listHandler (req,res){
  const allUsers = await users.get({});
  res.json( {users : allUsers} );
}



router.get('/oauth', oauth, (req, res) => {
  
  res.json({ token: req.token });
});

module.exports = router;