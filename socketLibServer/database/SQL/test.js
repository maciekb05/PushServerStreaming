
// let InsertBuilder = require("./InsertBuilder");

// let SQLdao = require("./SQLdao");


// let SQLdb = require('./SQLdb');
// let SQLFactory = require('../AbstractFactory/SQLFactory');

// let schema = {
//     Opis: 'varchar(255)',
//     Data: 'integer'
// }

// let event = {
//     Opis: 'Taki no opis tu jest Tomek chuj',
//     Data: 991
// };
// let event1 = {
//     Opis: 'Taki no opis tu jest hehehe',
//     Data: 998
// };
// let event2 = {
//     Opis: 'Taki no opis tu asd hehehe',
//     Data: 992
// };


// let factory = new SQLFactory();
        

// let dataBase = factory.createDB("postgres://bvdxjgrk:hs9ZiISsjYQZobeeJ-zNHyPfRYIWc5Wy@manny.db.elephantsql.com:5432/bvdxjgrk",
//                                     schema);
// dataBase.Connect().then(async () => {
//     let dao = factory.createDAO(dataBase);
//     await dao.AddEvent(event);
//     await dao.AddEvent(event1);
//     await dao.AddEvent(event2);
//     await dao.FindEvents();
// });

let validator = require('./schemaValidator');
let schema = {
    Opis: 'char(255)',
    Data: 'numeric(7,2)',
    Siema: 'text'
}
console.log(validator(schema));
