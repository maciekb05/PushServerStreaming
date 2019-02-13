class EventObjectDao {
    constructor(database) {
        this._database = database;
    }

    FindEvents(){
        throw Error("You have to implement this method");
    }

    AddEvent(Event){
        throw Error("You have to implement this method");
    }
}

module.exports = EventObjectDao;