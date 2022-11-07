"use strict";
exports.__esModule = true;
exports.init = void 0;
var client_1 = require("ts-postgres/dist/src/client");
function init() {
    var host = process.env.HOST;
    var port = Number(process.env.PORT);
    var user = process.env.USER;
    var database = process.env.DB;
    var client = new client_1.Client({
        host: host,
        port: port,
        user: user,
        database: database
    });
    client.connect();
    return client;
}
exports.init = init;
;
