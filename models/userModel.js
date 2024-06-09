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
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  avatarUrl:{
    type: Object,
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
    type: Number,
    required: false
  },
  isVerified:{
    type: Boolean,
    required: false
  },
  role:{
    type: String,
    required: false
  },
  status:{
    type: String,
    required: false
  }
  

  // Otros campos según sea necesario
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
