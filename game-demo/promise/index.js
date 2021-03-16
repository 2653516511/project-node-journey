(function() {
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1);
            resolve()
        }, 500);
    })
    console.log(2, promise);
    setTimeout(() => {
        console.log(3);
        console.log(promise);
    }, 800);
})()
//  2 Promise {<pending>}
//  1
//  3
//  Promise {<fulfilled>: undefined}

(function() {
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1);
            resolve()
        }, 300);
        setTimeout(() => {
            console.log(4);
            reject(new Error())
        }, 500);
    })
    console.log(2, promise);
    setTimeout(() => {
        console.log(3);
        console.log(promise);
    }, 800);
})()
//  2 Promise {<pending>}
//  1
//  4
//  3
//  Promise {<fulfilled>: undefined}

// rejected状态后面没有.catch的promise，会造成 浏览器/node环境的 全局错误
// return的时，状态都是resolved状态
// 执行then和catch会返回一个新的Promise，该Promise最终状态根据then和catch的回调函数的执行结果决定，如果回调函数最终return了一个Promise，该Promise的状态 会和 回调函数return的Promise状态一致