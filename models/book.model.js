const mongoose = require('mongoose')
const { Schema } = mongoose

mongoose.set('strictQuery', true);

const bookSchema = new Schema({
  name: {
    type: String,
    require: true
  }, 
  author: String,
  price: {
    type: Number,
    require: true
  },
  description: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Book', bookSchema)


