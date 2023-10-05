require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./v1/config/corsOptions');
const { logger } = require('./v1/middleware/logEvents');
const errorHandler = require('./v1/middleware/errorHandler');
const verifyJWT = require('./v1/middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./v1/middleware/credentials');

const PORT = process.env.PORT || 3500;

// custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

// routes
const v1RootRouter = require('./v1/api/root');
app.use('/v1', v1RootRouter);

// app.use('/register', require('./v1/api/tenants/routes'));
// app.use('/register2', require('./v1/api/tenants_mysql/routes'));
// app.use('/auth', require('./v1/api/auth/login/routes'));
// app.use('/auth2', require('./v1/api/auth/login_mysql/routes'));
// app.use('/refresh', require('./v1/api/auth/refresh/routes'));
// app.use('/logout', require('./v1/api/auth/logout/routes'));

// app.use(
//   '/v1/api/locations/employees',
//   require('./v1/api/locations/employees/routes')
// );

// app.use(verifyJWT);
// app.use('/v1/api/companies', require('./v1/api/companies/routes'));
// app.use('/employees', require('../routes/api/employees'));
// app.use('/users', require('../routes/api/users'));

app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ error: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
});

app.use(errorHandler);

// mongoose.connection.once('open', () => {
//   console.log('Connected to MongoDB');
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// });
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
