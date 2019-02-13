const mongoose = require('mongoose');
const Database = require('../Database');
require('./Event');
const DynamicSchema = require('mongoose-dynamic-schemas');
const Event = mongoose.model('events');

class MongoDB extends Database {
    constructor(dbString, eventSchema) {
        super(dbString, eventSchema);
    }

    async Connect() {
        try {
            await mongoose.connect(this.dbString, {useNewUrlParser: true});
            console.log("Connected to MongoDB");
            await this._RegisterNewSchema();
        } catch (err) {
            console.error('Database connection error');
        }
    }

    async _RegisterNewSchema() {
        try {
            await Object.keys(this.eventSchema).forEach(async key => {
                await DynamicSchema.addSchemaField(Event, key, {type: this.eventSchema[key]});
            });
            console.log("Mongo Schema registred");
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = MongoDB;