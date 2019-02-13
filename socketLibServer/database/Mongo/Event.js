const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
   update : { type: Date, default: Date.now() }
});

mongoose.model('events', EventSchema);