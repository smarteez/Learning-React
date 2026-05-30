const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");

// Serve static files from the current folder (so /images/... works)
const middlewares = jsonServer.defaults({
  static: "./"
});

server.use(middlewares);
server.use(router);

server.listen(4000, () => {
  console.log("Mock API running on http://localhost:4000");
});
