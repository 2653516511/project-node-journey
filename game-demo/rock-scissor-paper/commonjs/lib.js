module.exports = function(playerAction) {
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
        return 0
    } else if(
        (computerAction === 'rock' && playerAction === 'scissor') ||
        (computerAction === 'scissor' && playerAction === 'paper') ||
        (computerAction === 'paper' && playerAction === 'rock')
    ) {
        console.log('you fail');
        return 1
    } else {
        console.log('you success');
        return -1
    }
}
