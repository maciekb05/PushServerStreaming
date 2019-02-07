class Database{
    constructor(dbString, eventSchema){
        this.dbString = dbString;
        this.eventSchema = eventSchema;
    }
    connect() {
        throw new Error('You have to implement the method to connect');
    }
}