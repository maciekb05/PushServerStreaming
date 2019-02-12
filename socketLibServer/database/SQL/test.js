
let InsertBuilder = require("./InsertBuilder");

let ib = new InsertBuilder();
ib.setTableName("Wydarzenia");
ib.setValues({
    nazwa: 'Hackaton',
    godzina: 15
});
console.log(ib.buildQuery());

let SQLdb = require('./SQLdb');

let schema = {
    Opis: 'varchar(255)',
    Data: 'integer'
}

let db = new SQLdb("postgres://bvdxjgrk:hs9ZiISsjYQZobeeJ-zNHyPfRYIWc5Wy@manny.db.elephantsql.com:5432/bvdxjgrk",
schema);
