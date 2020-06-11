const express = require('express');

const bearerMiddleware = require('./middleware/bearer-auth.js');
const acl = require('./middleware/acl-middleware.js');

const router = express.Router();


router.get('/secret', bearerMiddleware, (req,res) => {
  res.json(req.user);
});

router.post('/read', bearerMiddleware, acl('read'), (req, res) => {
  res.send('OK!');
});

router.post('/create', bearerMiddleware, acl('create'), (req, res) => {
  res.send('OK!');
});

router.put('/update', bearerMiddleware, acl('update'), (req, res) => {
  res.send('OK!');
});

router.delete('/delete', bearerMiddleware, acl('delete'), (req, res) => {
  res.send('OK!');
});

module.exports = router;
