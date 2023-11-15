const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');   
const routes = require("./routes")
const { Server } = require("socket.io");
const http = require("http");
const serveer = http.createServer(app);

app.use(cors());

app.use(routes)

const io = new Server(serveer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

serveer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});