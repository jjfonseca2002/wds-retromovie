const { Router } = require("express");
const router = Router();
//const express = require('express');
//const router = express.Router();
const tbCategoria = require('../models/categories.js');

//All Categories Route
router.get('/', async(req,res) => {
    let vBusqueda = {};
    if (req.query.name != null && req.query.name !== '') {
        vBusqueda.name = new RegExp(req.query.name, 'i')
    }
    try {
        const categorias = await tbCategoria.find(vBusqueda);
        res.render('categories/index', { 
            categorias: categorias,
            vBusqueda: req.query
        });
    } catch {
        res.redirect('/');
    };
});

//New Author Route
router.get('/new', (req,res) => {
    res.render('categories/new', {categoria: new tbCategoria() })
});

//Create a new Author Route
router.post('/', async (req,res) => {
    const categoria = new tbCategoria({
        name: req.body.name
    });
    try {
        const newCategory = await categoria.save();
        //res.redirect(`categories/${newCategory.id}`)
        res.redirect(`categories`);
    } catch {
        res.render('categories/new', {
            categoria: categoria,
            errorMessage: 'Error creando el Genero'
        });
    }
});

module.exports = router;