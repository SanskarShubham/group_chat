const express = require('express');

const fs = require('fs');
const router = express.Router();

router.get('/login',(req,res,next)=>{
    res.send('<form action="/login" onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)"  method="POST"><input id="username"type="text" name="username"><button type="submit">login</button></form>');
})
router.post('/login',(req,res,next)=>{
      
        res.redirect('/');
})
router.get('/',(req,res,next)=>{
    const message = fs.readFileSync('message.txt','utf-8');
    //   console.log(message);
      if (message.trim() !== '') {
        res.write(`<p>${message}</p>`);
      }
    res.write('<form action="/" onsubmit="document.getElementById(`username`).value = localStorage.getItem(`username`)"method="POST"><input id="username" type="hidden" name="username"><input type="text" name="msg"><button type="submit">send</button></form>');
    res.end();
})

router.post('/',(req,res,next)=>{
    console.log(req.body);
    let prevMsg = fs.readFileSync('message.txt','utf-8');
    fs.writeFile('message.txt',`${prevMsg} ${req.body.username} : ${req.body.msg}`,(err)=>{
     if(err) throw err;
    });
   res.redirect('/');
})
module.exports =  router;

