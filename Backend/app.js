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