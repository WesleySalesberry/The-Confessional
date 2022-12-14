import mongoose from 'mongoose'

const ConfessionSchema = mongoose.Schema({
  confession_id: {
    type: String
  },
  category: {
    type: String,
    required: [true, 'Select your category'],
    trim: true,
    lowercase: true
  }, 
  body: {
    type: String,
    required: [true, 'Submit the confession'],
    trim: true
  },
  views: {
    type: Number
  }
},{
  timestamps: true
})

const Confession = mongoose.model('Confession', ConfessionSchema)

export default Confession