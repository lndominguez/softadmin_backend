// userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: {
    type: String
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false,
    unique: true
  },
  picture:{
    type: String,
    required: false
  },
  active:{
    type: Boolean,
    required: false
  },
  country:{
    type: String,
    required: false
  },
  state:{
    type: String,
    required: false
  },
  city:{
    type: String,
    required: false
  },
  address:{
    type: String,
    required: false
  },
  zipCode:{
    type: String,
    required: false
  },
  phoneNumber:{
    type: String,
    required: true
  }
  
  // Otros campos según sea necesario
}, {
  timestamps: true
});

const Invoicer = mongoose.model('Invoicer', userSchema);

export default Invoicer;
