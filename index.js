const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const passport = require('passport');
const user = require('./routers/user');

require('./passport/index')(passport);

const app = express();

app.use(express.json());
app.use(passport.initialize());


if(!config.get('jwtPrivateKey')){
	console.log('jwtPrivateKey not set');
	process.exit(1);
}


mongoose.connect('mongodb://127.0.0.1:27017/react-node-boilerplate', { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB'));

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);




app.use('/api/user', user);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));