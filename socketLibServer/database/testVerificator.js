let validate = require("./schemaValidator");

console.log(validate({
    imie: "String",
    nazwisko: "String",
    wiek: "Integer",
    dziecko: "Boolean",
    aaa: "Dupa"
}));

console.log(validate({
    imie: "String",
    nazwisko: "String",
    wiek: "Decimal",
    dziecko: "Boolean"
}));