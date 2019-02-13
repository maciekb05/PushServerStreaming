const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
   update : { type: Date, default: Date.now() }
}); //to jest po to aby dynamicznie tworzyc schemat


mongoose.model('events', EventSchema);