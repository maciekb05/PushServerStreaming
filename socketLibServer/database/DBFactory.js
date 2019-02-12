const MongoDB = require("./MongoDB");
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

    CreateDb(dbString, eventSchema) {
        // ten if chyba trzeba przeniesc do tworzenia fabryki konkrentnej
        if (this.isMongoString(dbString)) {
            this.isDbCreated = true;
            return new MongoDB(dbString, eventSchema);
        }
        return new MongoDB(dbString, eventSchema);
    }

    isMongoString(url) {
        return url.match(/mongodb(?:\+srv)?:\/\/.*/) !== null;
    }
}

module.exports = DBFactory;