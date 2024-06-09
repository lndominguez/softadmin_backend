// userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: false,
  },

  
  // Otros campos según sea necesario
}, {
  timestamps: true
});

const Airline = mongoose.model('Airline', userSchema);

export default Airline;
