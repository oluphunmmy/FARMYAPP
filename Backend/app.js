const express = require('express')
const http = require('http')
const Server = require('socket.io').Server

const app = express()

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

io.on("connection", (socket) => {
    console.log("connected")

    socket.on("chat", chat => {
        io.emit("chat", chat)
    })
    socket.on("disconnect", () => {
        console.log("disconnect")
    })
})

server.listen("5003", () => {
    console.log("server runnning on port 5003")
})