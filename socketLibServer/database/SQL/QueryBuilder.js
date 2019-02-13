class QueryBuilder {

    constructor(tablename) {
        this.tableName = tablename;
        this.finalQuery = '';
    }

    setTableName(tablename) {
        throw new Error("Not implemented");
    }

    buildQuery() {
        throw new Error("Not implemented");
    }
}

module.exports = QueryBuilder;