const router = require('express').Router();
const { anggota } = require('../controllers');

// mengeluarkan semua daftar anggota
router.get('/', anggota.getDataAnggota);

// show data berdasarkan parameter 'id'
router.get('/:id', anggota.getDataAnggotaById);

// menambah data anggota
router.post('/add', anggota.addDataAnggota);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', anggota.editDataAnggota);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', anggota.deleteDataAnggota);

module.exports = router;