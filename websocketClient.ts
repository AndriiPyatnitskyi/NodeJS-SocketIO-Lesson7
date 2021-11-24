const io = require("socket.io-client");

const path  = require('path');
const fs = require('fs');
const text = fs.readFileSync(path.join(__dirname, './text.txt'), 'utf-8');

const socket = io("http://localhost:3000", {
    transports: ["websocket"]
});

socket.on("connect", () => {
    console.log('websocket client connect');
    console.time("chatMessageSendTime");
    socket.emit('chat message', text);
    socket.on('chat message', (message) => {
        console.timeEnd("chatMessageSendTime");
    });
});

// On receiving 6.37 MB size text we have following result - chatMessageSendTime: 755.37ms
