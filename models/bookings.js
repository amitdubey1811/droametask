'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookingSchema = new Schema({
    
    shotlocation_id: String,
    drone_shot_id: String,
    email:String,
    bookingdate:String,
    created_time:String
    
    
}, { collection: 'bookings' });

module.exports = mongoose.model('bookings', BookingSchema);
