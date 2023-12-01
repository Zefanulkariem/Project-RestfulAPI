const config = require('../config/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data
const getDataAnggota = async (req, res) => {
    const data = await new Promise((resolve, reject) => {
        connection.query("SELECT * FROM anggota", function (error, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (data) {
        res.send({
            success: true,
            message: "berhasil",
            data: data
        });
    } else {
        res.send({
            success: false,
            message: "gagal",
        });
    }
}

const getDataAnggotaById = async (req, res) => {
    let id = req.params.id;
    const data = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM anggota WHERE id = ?";
        connection.query(query, [id], function (err, rows) {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });

    if (data.length > 0) {
        res.send({
            success: true,
            message: "berhasil",
            data: data
        });
    } else {
        res.send({
            success: false,
            message: "Data tidak ditemukan",
        });
    }
}


const addDataAnggota = async (req, res) => {
    let data = {
        kode_anggota: req.body.kode_anggota,
        nama_anggota: req.body.nama_anggota,
        jk_anggota: req.body.jk_anggota,
        jurusan_anggota: req.body.jurusan_anggota,
        no_telp_anggota: req.body.no_telp_anggota,
        alamat_anggota: req.body.alamat_anggota

    }
    const result = await new Promise((resolve, reject) => {
        const query = 'INSERT INTO anggota SET ?';
        connection.query(query, [data], function (err, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: "berhasil menambah data",
        });
    } else {
        res.send({
            success: false,
            message: "gagal menambah data",
        });
    }
}

const editDataAnggota = async (req, res) => {
    let id = req.params.id;
    let data = {
        kode_anggota: req.body.kode_anggota,
        nama_anggota: req.body.nama_anggota,
        jk_anggota: req.body.jk_anggota,
        jurusan_anggota: req.body.jurusan_anggota,
        no_telp_anggota: req.body.no_telp_anggota,
        alamat_anggota: req.body.alamat_anggota
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'UPDATE anggota SET ? where id = ?';
        connection.query(query, [data, id], function (err, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: "berhasil edit data",
        });
    } else {
        res.send({
            success: false,
            message: "gagal edit data",
        });
    }
}

const deleteDataAnggota = async (req, res) => {
    let id = req.params.id;

    const result = await new Promise((resolve, reject) => {
        const query = 'DELETE FROM anggota where id = ?';
        connection.query(query, [id], function (err, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: "berhasil hapus data",
        });
    } else {
        res.send({
            success: false,
            message: "gagal hapus data",
        });
    }
}


module.exports = {
    getDataAnggota,
    getDataAnggotaById,
    addDataAnggota,
    editDataAnggota,
    deleteDataAnggota
}