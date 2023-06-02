const server = require("./app"); //server config
const { conn } = require("./DB_connection"); //database config
const PORT = 3001;

conn.sync({ alter: true });

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
