const app = require("./server");
const connect = require("./db/connect");

connect().then(async function onServerInit() {
  console.log("DB connected");

  app.listen(4000, () => {
    console.log("server running at http://localhost:4000");
  });
});
