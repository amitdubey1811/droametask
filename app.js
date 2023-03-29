
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const route = require('./routes');
const path = require('path');
const dotenv = require('dotenv');
const http = require('http');
const server = http.createServer(app);

dotenv.config({ path: './config.env' });
const url = process.env.URL;
const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }))  // decode the url and sends the data in body of req
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', route);




mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

    .then(() => {
        console.log("Connected to database");
        server.listen(port, function (error) {
            if (error) {
                console.log('error in running the server', error);
                return;
            }
        })
        console.log('server is running succefully');


    })
    .catch((err) => {
        console.log("Error connecting to database:", err);
    });

