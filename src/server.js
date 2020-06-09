require('dotenv').config();
const express = require('express');
const router = require('./auth/router.js');
const extra_router = require('./auth/extra-routes.js');
const morgan = require('morgan');
// const oauth = require('./auth/middleware/oauth.js');
const app = express();
app.use(express.static('./public'));
const notFoundHandler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');
// app.use('/docs', express.static('./docs'));

app.use(express.json());

app.use(morgan('dev'));

app.use('/', extra_router);

app.use('/', router);




app.use('*', notFoundHandler);

app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`),
    );
  },
  
};
  