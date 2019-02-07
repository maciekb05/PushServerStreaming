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

lib.initializeSocket(server,"mongodb://admin:admin123@ds223015.mlab.com:23015/mrowisko",null);

lib.onEvent("message",msg => {
    lib.notifyEveryone('message', msg);
})

server.listen(port, () => console.log(`Listening on port ${port}`));

