let types = ["String", "Number", "Date", 
            "Boolean", "Binary", "Decimal"];

module.exports = function validate(schema) {
    for (var propertyName in schema) {
        console.log( propertyName + " : " + schema[propertyName] );
        if ( !types.includes( schema[propertyName] ) ) {
            return false;
        }
    }
    return true;
}