
class QueryBuilder {

    constructor(tablename){
        this.tableName = tablename;
        this.finalQuery = '';
    }

    setTableName(tablename){}

    buildQuery(){}
}
module.exports = QueryBuilder;