// other controller
const petugas = require('./petugasController')
const anggota = require('./anggotaController')
const buku = require('./bukuController')
const peminjaman = require('./peminjamanController')
const pengembalian = require('./pengembalianController')


module.exports = {
    petugas,
    anggota,
    buku,
    peminjaman,
    pengembalian
}