
let InsertBuilder = require("./InsertBuilder");

let SQLdao = require("./SQLdao");


let SQLdb = require('./SQLdb');

let schema = {
    Opis: 'varchar(255)',
    Data: 'integer'
}

let db = new SQLdb("postgres://bvdxjgrk:hs9ZiISsjYQZobeeJ-zNHyPfRYIWc5Wy@manny.db.elephantsql.com:5432/bvdxjgrk",
schema);
let dao = new SQLdao(db);
let event = {
    Opis: 'Taki no opis tu jest hehehe',
    Data: 997
};
dao.AddEvent(event);

