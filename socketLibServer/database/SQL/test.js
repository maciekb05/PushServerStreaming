
let InsertBuilder = require("./InsertBuilder");

let SQLdao = require("./SQLdao");


let SQLdb = require('./SQLdb');
let SQLFactory = require('../SQLFactory');

let schema = {
    Opis: 'varchar(255)',
    Data: 'integer'
}

let event = {
    Opis: 'Taki no opis tu jest Tomek chuj',
    Data: 991
};
let event1 = {
    Opis: 'Taki no opis tu jest hehehe',
    Data: 998
};
let event2 = {
    Opis: 'Taki no opis tu asd hehehe',
    Data: 992
};


let factory = new SQLFactory();
        

let dataBase = factory.CreateDb("postgres://bvdxjgrk:hs9ZiISsjYQZobeeJ-zNHyPfRYIWc5Wy@manny.db.elephantsql.com:5432/bvdxjgrk",
                                    schema);
dataBase.Connect();

let dao = factory.createDAO(dataBase);
dao.AddEvent(event);
dao.AddEvent(event1);
dao.AddEvent(event2);
dao.FindEvents();
