const io = require("socket.io-client");

const socket = io("http://localhost:3000", {
    transports: ["websocket"]
});

socket.on("connect", () => {
    console.log('websocket client connect');
    socket.emit('chat message', 'Hello from node.js websocket client');
    socket.on('chat message', (message) => {
        console.log('Received: ', message);
    });
});

socket.on("disconnect", () => {
    console.log(socket.id); // undefined
});
