
async function test() {
    return Promise.resolve('success')
}

let p = test().then(result => {
    console.log(result)
})

console.log(p)