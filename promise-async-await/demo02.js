const masakNasi = require('./masakNasi');

const stockBeras = 10;
masakNasi(stockBeras).then(() => {
    console.log("HURRAY KITA MAKAN NASI!")
}).catch((err) => {
    console.log("Kita ga makan nasi!")
    console.log(err);
});
console.log("Bentar kok ini duluan?")