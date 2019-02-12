
class SelectBuilder extends QueryBuilder{

    constructor(tablename){
        super(tablename);
        this.columns = '';
    }

    setTableName(tablename){
        this.tableName = tablename;
    }

    setColumns(columns){
        this.columns = columns;
    }

    buildQuery(){
        this.finalQuery = "SELECT " + this.columns + " FROM " + this.tableName + ";";
    }
}