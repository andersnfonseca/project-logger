const EventEmitter = require('events')
const fs = require('fs')
const path = require('path')

const emitter = new EventEmitter()

emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'logs.txt'), message, (err) => {
        if (err) throw err
    })

    console.log(message)
})

function log(message) {
    emitter.emit('log', message)
}

module.exports = log