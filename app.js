const express = require('express');
const helmet = require('helmet');
const app = express();
app.use(helmet());

const mainRouter = require('./router/mainRouter');
app.use('/', mainRouter);

app.listen(3000, function(req, res){
    console.log("server is running");
})