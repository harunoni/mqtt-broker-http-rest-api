import mongoose from 'mongoose'


let commandSchema = new Schema ({
    n: String,
    d: String,
    c: String,
})

module.exports = mongoose.model('Command', commandSchema)
