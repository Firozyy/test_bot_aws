const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const app = express();



const buildPath = path.join(__dirname, '../frontend/build/');

const indexPage = path.join(buildPath, '/index.html');

// console.log(buildPath);

app.use(express.static(buildPath));

dotenv.config({path:'./config/.env'});

app.get('/', (req,res)=>{
    res.sendFile(indexPage);
});

app.get('/welcome', (req,res)=>{
    res.send("Welcome");
});

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on ${process.env.PORT}`);
});

