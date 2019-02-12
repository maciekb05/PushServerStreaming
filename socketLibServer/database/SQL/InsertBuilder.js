let QueryBuilder = require('./QueryBuilder');
class InsertBuilder extends QueryBuilder{

    constructor(tablename){
        super(tablename);
        this.valuesString = '';
        this.columnsString = '';
    }

    setTableName(tablename){
        this.tableName = tablename;
        return this;
    }

    setValues(jsonValues){
        columnsString = ""
        valuesString = "";
        for (var key in jsonValues) {
            columnsString += key + ', ';
            if (! isNaN(jsonValues[key])) {
                valuesString += jsonValues[key] + ', ';
            } else {
                valuesString += '\'' + jsonValues[key] + '\', ';
            }
        }
        columnsString = columnsString.substr(0,columnsString.length-2);
        valuesString = valuesString.substr(0,valuesString.length-2);
        return this;
    }

    buildQuery(){
        this.finalQuery = "INSERT INTO " + this.tableName + " (" + this.columnsString + ") VALUES (" + this.values + ");";
    }
}
module.exports = InsertBuilder;