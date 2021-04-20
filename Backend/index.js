const express = require('express');
const cors= require('cors');
const bodyParser= require('body-parser');
const {connectToDB} = require('./db') 

{connectToDB()}

const app = express();
app.use(cors());
app.use(bodyParser.json());

userRoutes = require ('./routes/user')(app) 
reservaRoutes = require ('./routes/reserva')(app) 

app.listen(3000, ()=>{

    console.log('¡Nos hemos conectado!')

} )
