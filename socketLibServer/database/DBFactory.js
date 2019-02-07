const MongoDB = require("./MongoDB");
let _instance;

class DBFactory {
    constructor() {
        if (_instance) {
            return this;
        } else {
            this.isDbCreated = false;
            _instance = this;
        }
    }

    CreateDb(dbString, eventSchema) {
        if (this.isMongoString(dbString)) {
            this.isDbCreated = true;
            return new MongoDB(dbString, eventSchema);
        }
        return new MongoDB(dbString, eventSchema);
    }
    isMongoString(url) {
        return url.match(/mongodb(?:\+srv)?:\/\/.*/) !== null;
    };

}


module.exports = DBFactory;