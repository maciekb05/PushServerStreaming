let types = ["integer", "date", "time", "interval", "text"];
let re = /^((var|)char\([1-9]\d*\)|numeric\([1-9]\d*,( |)[1-9]\d*\))$/;

module.exports = function validate(schema) {
    for (let propertyName in schema) {
        console.log(propertyName + " : " + schema[propertyName]);
        if (!types.includes(schema[propertyName]) && !re.test(schema[propertyName])) {
            return false;
        }
    }
    return true;
}