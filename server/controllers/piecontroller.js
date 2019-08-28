// const express = require('express');
// const router = express.Router();

const router = require('express').Router(); //Line 4 is combining 1 and 2 together.
const Pie = require('../db').import('../models/pie');
const validateSession = require('../middleware/validate-session');

// router.get('/', (req, res) => res.send('I love pie'));

router.get('/', (req, res) => {
    Pie.findAll()
        .then(pie => res.status(200).json(pie))
        .catch(err => res.status(500).json({
            error: err
        }))
})

// CREATE PIE
router.post('/', validateSession, (req, res) => {
    const pieFromRequest = {
        nameOfPie: req.body.nameOfPie,
        baseOfPie: req.body.baseOfPie,
        crust: req.body.crust,
        timeToBake: req.body.timeToBake,
        servings: req.body.servings,
        rating: req.body.rating
    }

Pie.create(pieFromRequest)
    .then(pie => res.status(200).json(pie))
    .catch(err => res.json(req.errors))

})

//UPDATE
// Broken code:
router.get('/:name', (req, res) => {
    Pie.findOne({ where: { nameOfPie: req.params.nameOfPie }})
    .then(pie => res.status(200).json(pie))
    .catch(err => res.status(500).json({ error: err}))
})
router.put('/:id', (req, res) => {
    pie.update(req.body, { where: { id: req.params.id }})
    .then(pie => res.status(200).json(pie))
    .catch(err => res.json(req.errors))
})

//DELETE
router.delete('/:id', (req, res) => {
    pie.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(pie => res.status(200).json(pie))
    .catch(err => console.log(err))
        error: err
    })

module.exports = router; 