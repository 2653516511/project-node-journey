const http = require('http')
const url = require('url')
const fs = require('fs')
const queryString = require('querystring')

const game = require('./game')

let playerwin = 0
let playerLastAction = null
let sameCount = 0

http
    .createServer(function(request, response) {
        const parseUrl = url.parse(request.url)

        if(request.url == '/favicon.ico') {
            response.writeHead(200)

            response.end()
            return
        }

        if(parseUrl.pathname == '/game') {
            const query = queryString.parse(parseUrl.query)
            const playerAction = query.action

            if(playerwin >= 3 || sameCount === 10) {
                response.writeHead(500);
                response.end('i do not wanna play now')
                return
            }

            if(playerLastAction && playerLastAction === playerAction) {
                sameCount++
            } else {
                sameCount = 0
            }
            playerLastAction = playerAction
            if(sameCount >= 3) {
                response.writeHead(400);
                response.end('相同出牌超过了三次')
                sameCount = 10
                return
            }

            const gameRes = game(playerAction)
            console.log(game(playerAction));

            response.writeHead(200)

            if(gameRes === 0) {
                response.end('equal')
            } else if(gameRes === 1) {
                response.end('you success')
                playerwin++
            } else {
                response.end('you fail')
                playerwin--
            }
        }
        
        if(parseUrl.pathname == '/') {
            fs.createReadStream(__dirname + 'index.html').pipe(response)
        }
    })
    .listen(3000)
