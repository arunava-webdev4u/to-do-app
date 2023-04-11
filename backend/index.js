const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { log } = console;

const ejsRoutes = require('./routes/ejs/pages');
const normalRoutes = require('./routes/user/pages');

const app = express();
//! config --------
mongoose.connect('mongodb://localhost:27017/todo',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection is successfull");
}).catch((e)=>{
    console.log("no connection ");
});

// app.use(express.static(__dirname + "/public"));
// app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }))
//! config --------

//! routes --------
app.use('/ejs', ejsRoutes);
app.use('/', normalRoutes);
app.get('*', (req, res) => {
    res.send('Page not found');
});
//! routes --------

app.listen(3000, () => {
    console.log('Serving on Port 3000');
})