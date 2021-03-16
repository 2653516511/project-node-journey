const fs = require('fs')
const express = require('express')
const koa = require('koa')
const mount = require('koa-mount')

const game = require('./game')

let playerwin = 0
let playerLastAction = null
let sameCount = 0

const app = new koa()

app.use(
    mount('/favicon.ico', function(ctx) {
        ctx.status = 200
    })
)


const gameKoa = new koa()
gameKoa.use(
    async function(ctx, next) {
        console.log(1);
        if(sameCount >= 3) {
            ctx.status = 500
            ctx.body = 'i do not wanna play now'
            return
        }

        await next()

        if(ctx.playerwin) {
            sameCount++
        }
    }
)
gameKoa.use(
    async function(ctx, next) {
        console.log(2);
        const query = ctx.query
        const playerAction = query.action
        if(!playerAction) {
            ctx.status = 400
            return
        }

        if(sameCount === 10) {
            ctx.status = 500
            ctx.body = 'i do not wanna play now'
        }

        if(playerLastAction && playerLastAction === playerAction) {
            sameCount++
            if(sameCount >= 3) {
                ctx.status = 400;
                ctx.end('相同出牌超过了三次')
                sameCount = 10
                return
            }
        } else {
            sameCount = 0
        }
        playerLastAction = playerAction
        ctx.playerAction = playerAction
        await next()
    }
)
gameKoa.use(
    async function(ctx, next) {
        console.log(3);
        const playerAction = ctx.playerAction
        const gameRes = game(playerAction)

        await new Promise(resolve => {
            setTimeout(() => {
                ctx.status = 200
                if(gameRes === 0) {
                    ctx.body = 'equal'
                } else if(gameRes === 1) {
                    ctx.body = 'you success'
                    ctx.playerwin = true
                } else {
                    ctx.body = 'you fail'
                }
                resolve()
            }, 500);
        })
        
    }
)

app.use(
    mount('/game', gameKoa)
)

app.use(
    mount('/', function(ctx) {
        ctx.body = fs.readFileSync(__dirname + '/index.html', 'utf-8')
    })
)

app.listen(3000)

