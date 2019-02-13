const express = require("express");
const http = require("http");
const lib = require("../socketLibServer/index");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);
/*schemat
{
        title: "string",
        innePole: "numer"
}*/

lib.initializeSocket(server,
                    "mongodb://admin:admin123@ds223015.mlab.com:23015/mrowisko",
                    {
                        description: "String",
                        additionDate: "String",
                        expirationDate: "String",
                        email: "String",
                        username: "String",
                        location: "String",
                        phone: "String",
                        subject: "String"
                    });

// lib.initializeSocket(server,
//     "postgres://bvdxjgrk:hs9ZiISsjYQZobeeJ-zNHyPfRYIWc5Wy@manny.db.elephantsql.com:5432/bvdxjgrk",
//     {
//         description: "varchar(255)",
//         additionDate: "varchar(255)",
//         expirationDate: "varchar(255)",
//         email: "varchar(255)",
//         username: "varchar(255)",
//         location: "varchar(255)",
//         phone: "varchar(255)",
//         subject: "varchar(255)"
//     });

lib.onEvent("advertisement",data => {
    lib.notifyEveryone("advertisement", data);
});

server.listen(port, () => console.log(`Listening on port ${port}`));

