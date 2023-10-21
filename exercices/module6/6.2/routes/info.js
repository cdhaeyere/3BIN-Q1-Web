const express = require('express')
const router = express.Router()
const Person = require('../models/person')

router.get("/info", (req, res) => {
    Person.countDocuments()
        .then(count => {
        return res.send(`Phonebook has info for ${count} people\n\n${new Date()}`)
        })
        .catch(err => next(err))
})

module.exports = router