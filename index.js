const jsonServber = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("almacen.json");
const middleware = jsonServer.defaults();
const port = process.env.PORT || 10000; //WEB SERVICES

server.use(middleware);
server.use(router);
server.listen(port);