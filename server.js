const http = require('http')
const { runInContext } = require('vm')

const server = http.createServer((req, res) => {
    console.log('run request')
    res.setHeader('content-Type', 'text/html')
    res.write('<h3> Hello world !</h3>')
    res.end()
})