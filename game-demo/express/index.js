const http = require('http')
const url = require('url')
const fs = require('fs')
const queryString = require('querystring')
const express = require('express')

const game = require('./game')
const { runInContext } = require('vm')

let playerwin = 0
let playerLastAction = null
let sameCount = 0

const app = express()

app.use(function(req, res) {

})

app.get('/favicon.ico', function(req, res) {
    res.writeHead(200)
    res.end()
    return
})
app.get('/game', function(req, res) {
    // const parseUrl = url.parse(req.url)
    // const query = queryString.parse(parseUrl.query)
    const query = req.query()
    const playerAction = query.action

    if(playerwin >= 3 || sameCount === 10) {
        res.writeHead(500);
        res.end('i do not wanna play now')
        return
    }

    if(playerLastAction && playerLastAction === playerAction) {
        sameCount++
    } else {
        sameCount = 0
    }
    playerLastAction = playerAction
    if(sameCount >= 3) {
        res.writeHead(400);
        res.end('相同出牌超过了三次')
        sameCount = 10
        return
    }

    const gameRes = game(playerAction)
    console.log(game(playerAction));

    res.writeHead(200)

    if(gameRes === 0) {
        res.end('equal')
    } else if(gameRes === 1) {
        res.end('you success')
        playerwin++
    } else {
        res.end('you fail')
        playerwin--
    }
})

app.get('/', function(req, res){
    console.log(2);
    res.writeHead(200)
    fs
        .createReadStream(__dirname + 'index.html')
        .pipe(res)
})

app.listen(3000)

