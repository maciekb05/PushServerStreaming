const express = require("express");
const http = require("http");
const lib = require("@maciekb05/socket-lib");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

lib.initializeSocket(server);

lib.onEvent("advertisement",data => {
    lib.notifyEveryone("advertisement", data);
});

server.listen(port, () => console.log(`Listening on port ${port}`));

