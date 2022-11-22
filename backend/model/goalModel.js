const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    dateOfBirth: {
        type: Date,
        required: [true, 'Please add a date of birth'],
    },
    gender: {
        type: String,
        required: [true, 'Please add a gender'],
    },
    salary: {
        type: Number,
        required: [true, 'Please add a salary'],
    }
  },

  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Goal', goalSchema)