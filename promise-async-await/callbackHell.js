const promise01 = new Promise((resolve, reject) => {
    
})
const promise02 = new Promise((resolve, reject) => {
    
})
const promise03 = new Promise((resolve, reject) => {
    
})
const promise04 = new Promise((resolve, reject) => {
    
})
const promise05 = new Promise((resolve, reject) => {
    
})

// Callback Hell
promise01.then(() => {
    promise02.then(() => {
        promise03.then(() => {
            promise04.then(() => {
                promise05.then(() => {
                    //
                }).catch((err) => {
                    //
                })
            }).catch((err) => {
                //
            })
        }).catch((err) => {
            //
        })
    }).catch((err) => {
        //
    })
}).catch((err) => {
    //
})

