const express = require('express') ;
const cookieParser = require('cookie-parser') ; 
const mysql = require('mysql2');
const app = express() ;


app.use(cookieParser());
app.use(express.json())

var con = mysql.createConnection({
    host:'localhost',
    user : 'root' ,
    password : 'linatkit',
    database : 'students'
})

app.post('/login',function(req,res){
    const {username , password} = req.body;
    res.cookie('user_name',username).send("Login Sucessful");
})

app.get('/',function(req,res){
    const cookie = req.cookies.user_name
    console.log(cookie);
    con.connect(function(err){
        if(err) throw err ; 
        con.query(`SELECT * from student WHERE name='${cookie}'`,function(err,result){
            if(err) throw err ;
            res.status(200).send({result : result})
        })
    })
})

app.delete('/:rollno',function(req,res){
    const cookie = req.cookies.user_name
    con.connect(function(err){
        if(err) throw err 
        con.query(`DELETE FROM student WHERE name='${cookie}'`,function(err,result){
            if(err) throw err
            res.send("Record deleted"+result.affectedRows).clearCookie('user_name')
        })
    })
})

app.listen(4000)