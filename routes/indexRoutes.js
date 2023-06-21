const express = require('express');
const router= express.Router();
router.get('/',(req, res) => {
    res.send('Bienvenidos a Techno Espacio')
});

router.get('/productos',(req,res)=>{
    res.render('productos');
})
router.get('/login',(req,res)=>{
    res.render('login');
});
router.get('/register',(req,res)=>{
    res.render('register');
});
router.get('/detailproduct',(req,res)=>{
    res.render('detailProduct');
});
router.get('/carrito',(req,res)=>{
    res.render('carrito');
});


module.exports = router