import mongoose from 'mongoose'

let Schema = mongoose.Schema


let commandSchema = new Schema ({
    n: String,
    d: String,
    c: String,
})

module.exports = mongoose.model('Command', commandSchema)
