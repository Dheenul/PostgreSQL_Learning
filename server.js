const express = require("express");
const { Client } = require("pg");
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require('morgan');
const studentRoutes = require('./routes');


app.use(express.json());

app.use(morgan('dev'));

app.get('/', (req, res)=>{
    res.send('Hello from student API')
})

app.use('/api/students', studentRoutes);

app.listen(PORT , ()=>{
    console.log(`Server is hosted on ${PORT}`)
});
