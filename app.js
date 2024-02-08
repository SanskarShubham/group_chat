const express = require('express');
const bodyParser = require("body-parser");
const chatRoutes = require("./routes/chat");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(chatRoutes);
app.use((req,res,next)=>{
        res.status(404).send('<h1>Page not Found!');
})

app.listen(3000);