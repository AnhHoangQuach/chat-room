const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    room: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Message = mongoose.model('Message', MessageSchema)

module.exports = { Message }
