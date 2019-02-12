const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
   update : { type: Date, default: Date.now() }
},{strict: false}); //to jest po to aby dynamicznie tworzyc schemat

module.exports = mongoose.model('Events', EventSchema);