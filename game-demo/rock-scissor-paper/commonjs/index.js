
// 用户输入的
let playerAction = process.argv[process.argv.length - 1]
const game = require('./lib')

// const res = game(playerAction)
// console.log(res);

let count = 0
process.stdin.on('data', e => {
    const playerAction = e.toString().trim()
    const res = game(playerAction)
    // console.log(res);
    if(res === -1) {
        count++
    }
    if(count === 3) {
        console.log('我不玩了');
        process.exit()
    }
})
