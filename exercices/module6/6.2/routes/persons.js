const router = require('express').Router()
const Person = require("../models/person")

router.get("/", async (req, res, next) => {
    try {
        const persons = await Person.find({});
        return res.json(persons)
    } catch (err) {
        return res.sendStatus(500)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const person = await Person.findById(req.params.id);
        if (person) {
            return res.json(person)
        } else {
            return res.status(404).end()
        }
    } catch (err) {
        return res.sendStatus(500)
    }
})

router.post("/", (req, res, next) => {
    const { name, number } = req.body
    if (!name || !number) {
        return res.status(400).json({
            error: 'name or number missing'
        })
    }
    try {
        Person.find({ name }).then(person => {
            if (person && person.length > 0) {
                return res.status(400).json({
                    error: 'name must be unique'
                })
            } else {
                const person = new Person({
                    name,
                    number
                })
                person.save().then(savedPerson => {
                    return res.json(savedPerson)
                })
            }
        })
    } catch (err) {
        return res.sendStatus(500)
    }
    
})

router.delete("/:id", (req, res, next) => {
    try {
        Person.findByIdAndRemove(req.params.id).then(result => {
            if (result) {
                return res.status(204).end()
            } else {
                return res.status(404).end()
            }
        })
    } catch (err) {
        return res.sendStatus(500)
    }
});

router.put("/:id", (req, res, next) => {
    const { name, number } = req.body
    if (!name || !number) {
        return res.status(400).json({
            error: 'name or number missing'
        })
    }

    const person = {
        name,
        number
    }

    try {
        Person.findByIdAndUpdate(req.params.id, person, { new: true })
        .then(updatedPerson => {
        if (updatedPerson) {
            res.json(updatedPerson)
        } else {
            throw new NotFoundError()
        }
        })
    } catch (err) {
        return res.sendStatus(500)
    }
})

module.exports = router