require('dotenv').config();

const express = require('express');
const app = express();
const pies = require('./controllers/piecontroller');
const user = require('./controllers/usercontroller');
const sequelize = require('./db');

sequelize.sync();
app.use(express.json());
app.use(require('./middleware/headers'));

// app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

// app.get('/', (req, res) => res.render('index'));


app.use('/pies', pies);
app.use('/auth', user);
// app.listen(3001, () => {console.log("app is listening on 3001")}); // This is single port code.
// Dynamic port. Can change the port locaion from one terminal. 
app.listen(process.env.PORT), () => console.log( `app is listening on $(process.env.PORT)`); 