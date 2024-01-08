const mongoose = require('mongoose')

const ScoreSchema = new mongoose.Schema({
    username: String,
    date: {
        type: Date,
        default: Date.now
    },
    score: Number,
    joke: { type: mongoose.Schema.Types.ObjectId, ref: 'Joke' }
})

ScoreSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = doc._id
        delete ret._id
        delete ret.__v
    }
})

module.exports = mongoose.model('Score', ScoreSchema)