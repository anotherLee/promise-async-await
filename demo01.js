let love = new Promise((resolve, reject) => {
    setTimeout(() => {
        let happy = Math.random() >= 0.3 ? true : false
        if ( happy ) {
            resolve('marry')
        } else {
            reject('break')
        }    
    }, 500)
})

let haveChild = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve('孩子生了！') 
    }, 1000)
})


love.then(result => {
    console.log(result)
    return haveChild
}).then(result => {
    console.log(result)
    return '最后，他们幸福的生活在了一起'
}).then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})


