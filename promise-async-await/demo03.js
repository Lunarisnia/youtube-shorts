const masakNasi = require("./masakNasi");

async function makan() {
    try {
        const stockBeras = 0
        const isNasiJadi = await masakNasi(stockBeras)
        console.log("Apakah nasi sudah jadi?")
        console.log(isNasiJadi)
    } catch (error) {
        console.log("Kita ga makan nasi");
        console.error(error)
    }
}

makan()