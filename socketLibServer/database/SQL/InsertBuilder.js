
class InsertBuilder extends QueryBuilder{

    constructor(tablename){
        super(tablename);
        this.values = '';
    }

    setTableName(tablename){
        this.tableName = tablename;
    }

    setValues(values){
        this.values = values;
    }

    buildQuery(){
        this.finalQuery = "INSERT INTO " + this.tableName + "VALUES (" + this.values + ");";
    }
}