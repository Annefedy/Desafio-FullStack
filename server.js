// conf inicial
const express = require('express');
const app = express();

// depois do db
const mongoose = require('mongoose');

const routes = require('./src/routes');

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json());



const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const port = 5000;

mongoose.connect('mongodb://localhost:27017/unicad',
).then(() => {
    console.log(' conectado con o banco de dados')
}).catch((err) => {
    console.log(' erro banco de dados: '+err)
});

app.use(cors());
app.use(cookieParser());

app.use(routes);


app.listen(port,function(){
    console.log(`Server runing on port ${port}`)
})

