const router = require('express').Router();
const { petugas } = require('../controllers');

// mengeluarkan semua daftar petugas
router.get('/', petugas.getDataPetugas);

// show data berdasarkan parameter 'id'
router.get('/:id', petugas.getDataPetugasById);

// menambah data petugas
router.post('/add', petugas.addDataPetugas);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', petugas.editDataPetugas);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', petugas.deleteDataPetugas);

module.exports = router;