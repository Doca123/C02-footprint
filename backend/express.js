const express =require('express')
const app =express()

const mysql = require('mysql')

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'markodoca1',
    database: 'praktikum',
});


app.post('/stats',(req,res)=>{

    const name = req.body.name
    const year = req.body.year

    db.query(
        "INSERT INTO stats (name, year) VALUES(?,?)",
    [name,yaer], (err,result)=>{
        if (err){
            console.log(err)
        } else{
           res.send("Values inserted") 
        }

    });

});

app.get('/stats', (req,res)=>{
    
    db.query("SELECT * FROM elektricna_energija_vo_slovenija_letno", (err,result)=>{
        if (err){
            console.log(err)
        }else{
            res.send(result)
        }
    });
});

app.listen(3001, ()=>{

    console.log("running on port 3001 ");
});