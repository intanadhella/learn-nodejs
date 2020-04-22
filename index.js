const http = require('http')
const hostname = "127.0.0.1"
const port = 3000

const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')
    response.end ('Hi i can nodejs')
});

server.listen(port,hostname, () => {
    console.log(`server is running at ${hostname}:${port}`)
})