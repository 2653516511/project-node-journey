// async function是Promise的语法糖封装
// -await会等到函数执行完之后获取到执行后的状态
// -try-catch可以获取到await得到的错误
(async function() {
    try {
        // await inter(1);
        // await inter(2);
        // await inter(3);
        await Promise.all([inter(1), inter(2)])
    } catch(e) {
        return console.log(e.round);
    }
    console.log('smile');
})()