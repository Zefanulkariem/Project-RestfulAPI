const router = require('express').Router();
const { peminjaman } = require('../controllers');

// mengeluarkan semua daftar peminjaman
router.get('/', peminjaman.getDataPeminjaman);

// show data berdasarkan parameter 'id'
router.get('/:id', peminjaman.getDataPeminjamanById);

// menambah data peminjaman
router.post('/add', peminjaman.addDataPeminjaman);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', peminjaman.editDataPeminjaman);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', peminjaman.deleteDataPeminjaman);

module.exports = router;