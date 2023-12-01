const config = require('../config/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data
const getDataPengembalian = async (req, res) => {
    const data = await new Promise((resolve, reject) => {
        connection.query("SELECT * FROM pengembalian", function (error, rows) {
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

const getDataPengembalianById = async (req, res) => {
    let id = req.params.id;
    const data = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM pengembalian WHERE id = ?";
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


const addDataPengembalian = async (req, res) => {
    let data = {
        tanggal_pengembalian: req.body.tanggal_pengembalian,
        denda: req.body.denda,
        id_buku: req.body.id_buku,
        id_anggota: req.body.id_anggota,
        id_petugas: req.body.id_petugas
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'INSERT INTO pengembalian SET ?';
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

const editDataPengembalian = async (req, res) => {
    let id = req.params.id;
    let data = {
        tanggal_pengembalian: req.body.tanggal_pengembalian,
        denda: req.body.denda,
        id_buku: req.body.id_buku,
        id_anggota: req.body.id_anggota,
        id_petugas: req.body.id_petugas
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'UPDATE pengembalian SET ? where id = ?';
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

const deleteDataPengembalian = async (req, res) => {
    let id = req.params.id;

    const result = await new Promise((resolve, reject) => {
        const query = 'DELETE FROM pengembalian where id = ?';
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
    getDataPengembalian,
    getDataPengembalianById,
    addDataPengembalian,
    editDataPengembalian,
    deleteDataPengembalian
}