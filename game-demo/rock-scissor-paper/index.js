// console.log(process);
// console.log(process.argv);  //terminal中输入的内容

// 用户输入的
let playerAction = process.argv[process.argv.length - 1]
// console.log(playerAction);

// 电脑随机产生的
let random = Math.random() * 3
let computerAction
if(random < 1) {
    computerAction = 'rock'
} else if(random > 2) {
    computerAction = 'paper'
} else {
    computerAction = 'scissor'
}

// 比较用户输入和电脑产生
if(playerAction === computerAction) {
    console.log('equal');
} else if(
    (computerAction === 'rock' && playerAction === 'scissor') ||
    (computerAction === 'scissor' && playerAction === 'paper') ||
    (computerAction === 'paper' && playerAction === 'rock')
) {
    console.log('you fail');
} else {
    console.log('you success');
}