const express = require("express");
const http = require("http");
const lib = require("@maciekb05/socket-lib");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

lib.initializeSocket(server);

lib.connectDataBase(
    "postgres://bvdxjgrk:hs9ZiISsjYQZobeeJ-zNHyPfRYIWc5Wy@manny.db.elephantsql.com:5432/bvdxjgrk",
    {
        description: "varchar(255)",
        additiondate: "varchar(255)",
        expirationdate: "varchar(255)",
        email: "varchar(255)",
        username: "varchar(255)",
        location: "varchar(255)",
        phone: "varchar(255)",
        subject: "varchar(255)"
    }
);

lib.onEvent("advertisement", data => {
    lib.notifyEveryone("advertisement", data);
});

server.listen(port, () => console.log(`Listening on port ${port}`));