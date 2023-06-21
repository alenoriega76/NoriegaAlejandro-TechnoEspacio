const express = require('express');
const app= express();
const port = 5000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.set('view engine', 'ejs');

app.use('/',require('./routes/indexRoutes.js'));
app.listen(port,()=>{
    console.log(`SERVER listening on port: ${port}`);
})
