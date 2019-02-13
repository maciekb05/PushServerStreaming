const express = require("express");
const http = require("http");
const lib = require("../socketLibServer/index");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

lib.initializeSocket(server);

lib.connectDataBase(
    "mongodb://admin:admin123@ds135156.mlab.com:35156/server_push_dev",
    {
        description: "String",
        additiondate: "String",
        expirationdate: "String",
        email: "String",
        username: "String",
        location: "String",
        phone: "String",
        subject: "String"
    }
);

lib.onEvent("advertisement", data => {
    lib.notifyEveryone("advertisement", data);
});

server.listen(port, () => console.log(`Listening on port ${port}`));