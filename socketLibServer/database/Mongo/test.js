const MongoDB = require('./MongoDB');
let db = new MongoDB("mongodb://admin:admin123@ds223015.mlab.com:23015/mrowisko", {nazwa: "String"});

db.Connect().then(() => {
    const MongoDao = require('./MongoDao');
    let mongoDao = new MongoDao();
    let event = {nazwa: "elo"};
    mongoDao.AddEvent(event).then(() => {
        mongoDao.FindEvents().then((events) => {
            console.log(events);
        })
    });
});
