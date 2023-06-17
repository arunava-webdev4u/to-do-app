const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const { log } = console;

const ejsRoutes = require('./routes/ejs/pages');
const routes = require('./routes/user/pages');

const app = express();
//! config --------
mongoose.connect('mongodb://localhost:27017/todo',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection is successfull");
}).catch((e)=>{
    console.log("no connection ");
});

// app.use(express.static(__dirname + "/public"));
// app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

// app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//! config --------

//! routes --------
app.use('/ejs', ejsRoutes);
app.use('/', routes);
app.get('*', (req, res) => {
    res.status(404).send('Page not found');
});
//! routes --------

app.listen(3000, () => {
    console.log('Serving on Port 3000');
})