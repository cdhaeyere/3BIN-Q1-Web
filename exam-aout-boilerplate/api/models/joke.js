const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    question: String,
    answer: String,
    category: String
})

JokeSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = doc._id
        delete ret._id
        delete ret.__v
    }
})

module.exports = mongoose.model('Joke', JokeSchema)