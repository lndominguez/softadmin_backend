// userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: {
    type: String
  },
  date: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: false,
  },
  action: {
    type: Boolean,
    required: false,
  },

  
  // Otros campos según sea necesario
}, {
  timestamps: true
});

const Invoice = mongoose.model('Invoice', userSchema);

export default Invoice;
