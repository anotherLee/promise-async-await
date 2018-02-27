
function fn(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${name}成功`)
        }, 1000)
    })
}

async function test() {
    let p1 = await fn('小红')
    let p2 = await fn('小明')
    let p3 = await fn('小华')
    return [p1, p2, p3]
}

test().then(result => {
    console.log(result)
}).catch(result => {
    console.log(result)
})