import app from "./app";
import { Server } from "http";
import dotenv from "dotenv";
import { vars } from "./utils/consts";
console.log(`Listening on port ${process.env.PORT }...`);

dotenv.config();
const port = vars.port || 5001;
const server = new Server(app);

server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
