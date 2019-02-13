let QueryBuilder = require('./QueryBuilder');

class InsertBuilder extends QueryBuilder {

    constructor(tablename) {
        super(tablename);
        this.valuesString = '';
        this.columnsString = '';
    }

    setTableName(tablename) {
        this.tableName = tablename;
        return this;
    }

    setValues(jsonValues) {
        this.columnsString = ''
        this.valuesString = '';
        for (var key in jsonValues) {
            this.columnsString += key + ', ';
            if (!isNaN(jsonValues[key])) {
                this.valuesString += jsonValues[key] + ', ';
            } else {
                this.valuesString += '\'' + jsonValues[key] + '\', ';
            }
        }
        this.columnsString = this.columnsString.substr(0, this.columnsString.length - 2);
        this.valuesString = this.valuesString.substr(0, this.valuesString.length - 2);
        return this;
    }

    buildQuery() {
        return "INSERT INTO " + this.tableName + " (" + this.columnsString + ") VALUES (" + this.valuesString + ");";
    }
}

module.exports = InsertBuilder;