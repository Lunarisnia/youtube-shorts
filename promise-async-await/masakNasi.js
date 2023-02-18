module.exports = function masakNasi(stockBeras = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stockBeras > 0) return resolve("Nasi sudah jadi!")
            return reject(Error("Beras habis!"));
        }, 1000)
    })
}
