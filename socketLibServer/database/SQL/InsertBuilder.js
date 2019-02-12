let QueryBuilder = require('./QueryBuilder');
class InsertBuilder extends QueryBuilder{

    constructor(tablename){
        super(tablename);
        this.values = '';
    }

    setTableName(tablename){
        this.tableName = tablename;
        return this;
    }

    setValues(values){
        this.values = values;
        return this;
    }

    buildQuery(){
        this.finalQuery = "INSERT INTO " + this.tableName + "VALUES (" + this.values + ");";
    }
}
module.exports = InsertBuilder;