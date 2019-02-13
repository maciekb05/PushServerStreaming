const MongoDB = require("./Mongo/MongoDB");
let _instance;

class DBFactory {
    constructor() {
        // tu chyba cos dziwnego sie dzieje, ale trzeba poczytac
        // w ifie jest return w elsie nie ma
        // te thisy sa dziwnie do instance dodawane
        if (_instance) {
            return this;
        } else {
            this.isDbCreated = false;
            _instance = this;
        }
    }

    CreateDb(dbString, eventSchema) {}

    ValidateSchema(eventSchema) { //sprawdzanie czy schemat jest poprawny

    }
}

module.exports = DBFactory;