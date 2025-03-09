const Server = require("./server/server");

const PORT = 4000
const server = new Server(PORT)


server.start()