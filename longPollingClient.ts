// client
const io = require("socket.io-client");

const path  = require('path');
const fs = require('fs');
const text = fs.readFileSync(path.join(__dirname, './text.txt'), 'utf-8');

const socket = io("http://localhost:3000", {
    transports: ["polling"]
});

// client-side
socket.on("connect", () => {
    console.time("chatMessageSendTime");
    console.log('polling client connect');
    socket.emit('chat message', text);
    socket.on('chat message', (message) => {
        console.timeEnd("chatMessageSendTime");
    });
});

// On receiving 6.37 text we have following result - chatMessageSendTime: 290.292ms
