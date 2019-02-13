let QueryBuilder = require('./QueryBuilder');
class SelectBuilder extends QueryBuilder{

    constructor(tablename){
        super(tablename);
        this.columns = '';
        this.where = '';
    }

    setTableName(tablename){
        this.tableName = tablename;
        return this;
    }

    setColumns(columns){
        this.columns = columns;
        return this;
    }

    setWhere(columnName, operator, value){
        this.where = columnName + " " + operator + " ";
        if (typeof value === 'string'){
            this.where += "'" + value + "'";
        } else {
            this.where += value.toString();
        }
        return this;
    }
    
    getColumns(){
        if (this.columns === '*') {
            return this.columns;
        }
        var arrayLength = this.columns.length;
        var result = '';
        for (var i = 0; i < arrayLength; i++) {
            result += this.columns[i];
            if (i !== arrayLength -1){
                result += ", ";
            }
        }
        return result;
    }

    buildQuery(){
        this.finalQuery = "SELECT " + this.getColumns() + " FROM " + this.tableName;
        if (this.where !== ''){
            this.finalQuery += "WHERE " + this.where
        } else {
            this.finalQuery += ";";
        }
        return this.finalQuery;
    }
    
    
}
module.exports = SelectBuilder;