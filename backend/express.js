const express =require('express')
const app =express()

const mysql = require('mysql')

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'markodoca1',
    database: 'praktikum',
});



app.listen(3001, ()=>{

    console.log("running on port 3001 ");
});