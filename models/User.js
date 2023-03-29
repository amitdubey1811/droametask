'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    customer_id:String,
    fullname: String,
    email: String,
    phone:String,
    
}, { collection: 'user' });

module.exports = mongoose.model('users', UserSchema);