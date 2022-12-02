function jumlahBus(totalKeluarga, anggotaKeluarga) {

    let jumlahKeluarga = anggotaKeluarga.replace(/\s/g, '')
    let memberKeluarga = []

    for (let index = 0; index < jumlahKeluarga.length; index++) {
        memberKeluarga.push(jumlahKeluarga[index])
    }

    if (totalKeluarga !== memberKeluarga.length) return "Input must be equal with count of family"

    let convertString = memberKeluarga.map(value => {
        return parseInt(value, 10)
    })


    let totalSemuaOrang = convertString.reduce((previous, current) => previous + current, 0)

    if (totalSemuaOrang % 4 == 0) {
        return `Bus required is : ${totalSemuaOrang / 4}`
    } else if (totalSemuaOrang % 4 != 0) {
        return `Bus required is : ${Math.ceil(totalSemuaOrang / 4)}`
    }
}

console.log(jumlahBus(5, "1 2 4 3 3"))
console.log(jumlahBus(8, "2 3 4 4 2 1 3 1"))
console.log(jumlahBus(5, "1 5"))