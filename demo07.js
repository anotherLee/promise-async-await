
let request = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}

let times = [1000, 500, 2000]
async function test() {
    let result = []
    for (let item of times) {
        let temp = await request(item)
        result.push(temp)
    }
    return result
}

test().then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})