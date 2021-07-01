const express = require('express');
var cowsay = require("cowsay");

const hostname = '0.0.0.0';
const port = 8080;

const app = express();
 
app.get('/', function (req, res) {
    
    res.statusCode = 200;
    //res.setHeader('Content-Type','text/html');
    res.end(
        cowsay.say({
            text: "Hello Wolrd",
            e: "Oo",
            T: "U",
          })
    );
})

app.listen(port,hostname);
console.log(`Server running at http://${hostname}:${port}/`);