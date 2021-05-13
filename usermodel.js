const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
      },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        validate: (value) => {
          return validator.isEmail(value)
        }
      },
    country: {
        type: String,
        trim: true,
        required: [true, 'Country is required']
      }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);