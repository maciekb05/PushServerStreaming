const mongoose = require('mongoose');
const Events = mongoose.model('events');
const EventObjectDao = require('../EventObjectDao');

class MongoDao extends EventObjectDao{
    constructor(database) {
        super(database);
    }

    async FindEvents() {
        try {
            let events = await Events.find({});
            return events;
        } catch (e) {
            console.log(e);
        }
    }

    async AddEvent(_event) {
        try {
            let event = new Events(_event);
            await event.save();
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = MongoDao;