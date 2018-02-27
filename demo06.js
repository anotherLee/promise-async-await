
let request = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}

let times = [1000, 500, 2000]
async function test() {
    let result = await Promise.all(times.map( async (item) => {
        return await request(item)
    }))
    return result
}

test().then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})
