const express = require('express');
const app = express();

// Register View Engiene

app.set('view engine','ejs');

app.listen(3000);

app.get('/',(req, res)=> {
    res.render('index');

})

app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/create',(req,res)=>{
    res.render('create');
})
app.use((req,res)=>{
    res.render('404');
})



