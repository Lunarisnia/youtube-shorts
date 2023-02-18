// // const masakNasi = require("./masakNasi");

// function masakNasi(stockBeras) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (stockBeras > 0) 
//                 return resolve("Nasi sudah jadi!")
//             return reject(Error("Beras habis!"));
//         }, 1000)
//     })
// }

// const stockBeras = 10;
// const isNasiJadi = masakNasi(stockBeras);
// console.log("Apakah nasi sudah jadi?")
// console.log(isNasiJadi)

const masakNasi = require('./masakNasi');

const stockBeras = 0;
masakNasi(stockBeras).then(() => {
    console.log("HURRAY KITA MAKAN NASI!")
}).catch((err) => {
    console.log("Kita ga makan nasi!")
    console.log(err);
});