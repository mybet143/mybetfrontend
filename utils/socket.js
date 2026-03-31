import { io } from "socket.io-client";

const socket = io("https://api.mybet.mobi", {
  transports: ["websocket"], // ❗ polling disable
  upgrade: false,
});

export default socket;