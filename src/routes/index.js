const router = require('express').Router();
// another route below this line
const anggotaRoute = require('./anggota');
const bukuRoute = require('./buku');
const pinjamRoute = require('./peminjaman');
const ngembalianRoute = require('./pengembalian');
const petugasRoute = require('./petugas');

// other route
router.use('/anggota', anggotaRoute);
router.use('/buku', bukuRoute);
router.use('/peminjaman', pinjamRoute);
router.use('/pengembalian', ngembalianRoute);
router.use('/petugas', petugasRoute);

module.exports = router;