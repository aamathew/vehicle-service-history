const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const vehicleSchema = new Schema({
  text: {type: String, required: true},
  name: {type: String, required: true},
  createdAt: {type: Date}
},{
  timestamps: true
});

module.exports = mongoose.model('Vehicle', vehicleSchema);