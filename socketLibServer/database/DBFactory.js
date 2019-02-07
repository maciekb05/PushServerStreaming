let _instance;

class DBFactory{
    constructor(){
        if(_instance){
            return this;
        }else{
            this.isDbCreated = false;
            _instance = this;
        }
    }
    CreateDb = function (dbString, eventSchema) {
        //isMongoString(dbString)
        if(true){
            this.isDbCreated = true;
            return new MongoDB(dbString,eventSchema);
        }
    }
}
export {DBFactory}