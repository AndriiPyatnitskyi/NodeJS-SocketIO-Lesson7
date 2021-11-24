// client
const io = require("socket.io-client");

const socket = io("http://localhost:3000", {
    transports: ["polling"] // use WebSocket first, if available
});

// client-side
socket.on("connect", () => {
    console.log('polling client connect');
    socket.emit('chat message', 'Hello from node.js polling client');
    socket.on('chat message', (message) => {
        console.log('Received: ', message);
    });
});

socket.on("disconnect", () => {
    console.log(socket.id); // undefined
});
