const os = require('os')
const log = require('./logger')
const fs = require('fs')

setInterval(() => {
    
    const {freemem, totalmem} = os

    const totalMemory = parseInt(totalmem()/1024/1024)
    const freeMemory = parseInt(freemem()/1024/1024)
    const usageMemory = 100 - parseInt((freeMemory / totalMemory) * 100)

const stats = { 
    totalMemory: `${totalMemory}MB`,
    freeMemory: `${freeMemory}MB`,
    usageMemory: `${usageMemory}%`
}

    console.clear()
    console.log('+++++ MEMORY STATS +++++')
    console.table(stats)
    log(`${JSON.stringify(stats)}\n`)

}, 1000);