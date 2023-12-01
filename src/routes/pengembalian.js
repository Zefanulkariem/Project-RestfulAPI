const router = require('express').Router();
const { pengembalian } = require('../controllers');

// mengeluarkan semua daftar pengembalian
router.get('/', pengembalian.getDataPengembalian);

// show data berdasarkan parameter 'id'
router.get('/:id', pengembalian.getDataPengembalianById);

// menambah data pengembalian
router.post('/add', pengembalian.addDataPengembalian);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', pengembalian.editDataPengembalian);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', pengembalian.deleteDataPengembalian);

module.exports = router;