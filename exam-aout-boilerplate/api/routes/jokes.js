const router = require('express').Router()
const Joke = require('../models/joke')

router.get('/', async (req, res) => {
    try {
        const jokes = await Joke.find({});
        return res.json(jokes)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const joke = await Joke.findById(req.params.id)
        
        if (!joke) {
            return res.status(404).json({ error: 'joke not found' })
        }

        return res.json(joke)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

router.post('/', async (req, res) => {
    const { question, answer, category } = req.body

    if (!question || !answer || !category) {
        return res.status(400).json({ error: 'question, answer, and category are required' })
    }

    if (question.length < 3) {
        return res.status(400).json({ error: 'question must be at least 10 characters' })
    }

    if (answer.length < 3) {
        return res.status(400).json({ error: 'answer must be at least 10 characters' })
    }

    if (category.length < 3) {
        return res.status(400).json({ error: 'category must be at least 10 characters' })
    }

    try {
        const joke = new Joke({ question, answer, category })
        joke.save().then(() => {
            return res.status(201).json(joke)
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const joke = await Joke.findByIdAndDelete(req.params.id)
        return res.status(200).json(joke)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})
    

module.exports = router