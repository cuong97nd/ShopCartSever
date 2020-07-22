const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const passport = require('passport')

// App Init
const app = express();

// db
require('./libs/db-connection');

const PORT = 5000;
app.use(passport.initialize());


// Middlewares
app.use(require('helmet')());
app.use(require('cors')());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Routes
app.use('/api/products', require('./routes/products'));
app.use('/auth', require('./routes/auth'));
app.use('/api/profile', passport.authenticate('jwt', { session: false })
  , require('./routes/user'));

app.use('/api/order', passport.authenticate('jwt', { session: false })
  , require('./routes/order'));




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));