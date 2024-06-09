// userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: {
    type: String
  },
  providerId: {
    type: String,
    required: true
  },
  providerAirlines: {
    type: String,
    required: true
  },
  customerName: {
    type: String,
    required: true,
    unique: true
  },
  travelDate:{
    type: Date,
    required: true
  },
  basePrice:{
    type: Number,
    required: true
  },
  salePrice:{
    type: Number,
    required: true
  },
  isPaid:{
    type: Boolean,
    required: true
  },
  commission:{
    type: Number,
    required: true
  },
  note:{
    type: String,
    required: false
  },
  passportPicture:{
    type: String,
    required: true
  },
  travelFrom:{
    type: String,
    required: true
  },
  travelTo:{
    type: String,
    required: true
  }
  
  // Otros campos según sea necesario
}, {
  timestamps: true
});

const Reservation = mongoose.model('Reservation', userSchema);

export default Reservation;
