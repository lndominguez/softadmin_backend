// userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: {
    type: String
  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false,
    unique: true
  },
  avatarUrl:{
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
  airlines:{
    type: String,
    required: false
  }
  
  // Otros campos según sea necesario
}, {
  timestamps: true
});

const Provider = mongoose.model('Provider', userSchema);

export default Provider;
