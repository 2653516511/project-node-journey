/**
 * node.js异步流程控制 callback（容易产生回调地狱）
 * npm 的 async.js   npm.js的官网
 */
// try {
    inter(function(res) {
        // 如果第一个参数不为空，则说明有错误
        if(res){
            return console.log('cry', res)
        }
        console.log('inter');
    })
// } catch (error) {
//     console.log('err', error);
// }

function inter(callback) {
    setTimeout(() => {
        if(Math.random() < 0.1) {
            // 默认第一个参数作为错误
            callback(null, 'success')
        } else{
            callback(new Error('fail'))
        }
        
    }, 300);
}
