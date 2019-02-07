let MongoClient = require('mongodb').MongoClient;

class MongoDB extends  Database{
    constructor(dbString, eventSchema){
        super(dbString, eventSchema);
    }
    connect(){
        MongoClient.connect(this.dbString, function(err, db) {
            console.log("Polaczylo z bazaaaaa");
            if (err) throw err;
        });
    }

}
