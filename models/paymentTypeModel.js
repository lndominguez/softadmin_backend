// userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: {
    type: String
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false,
  },
  active: {
    type: Boolean,
    required: true,
  }
  
  // Otros campos según sea necesario
}, {
  timestamps: true
});

const PaymentType = mongoose.model('PaymentType', userSchema);

export default PaymentType;
