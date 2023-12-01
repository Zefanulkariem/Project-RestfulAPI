const config = require('../config/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data
const getDataPetugas = async (req, res) => {
    const data = await new Promise((resolve, reject) => {
        connection.query("SELECT * FROM petugas", function (error, rows) {
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

const getDataPetugasById = async (req, res) => {
    let id = req.params.id;
    const data = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM petugas WHERE id = ?";
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


const addDataPetugas = async (req, res) => {
    let data = {
        nama_petugas: req.body.nama_petugas,
        jabatan_petugas: req.body.jabatan_petugas,
        no_telp_petugas: req.body.no_telp_petugas,
        alamat_petugas: req.body.alamat_petugas

    }
    const result = await new Promise((resolve, reject) => {
        const query = 'INSERT INTO petugas SET ?';
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

const editDataPetugas = async (req, res) => {
    let id = req.params.id;
    let data = {
        nama_petugas: req.body.nama_petugas,
        jabatan_petugas: req.body.jabatan_petugas,
        no_telp_petugas: req.body.no_telp_petugas,
        alamat_petugas: req.body.alamat_petugas
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'UPDATE petugas SET ? where id = ?';
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

const deleteDataPetugas = async (req, res) => {
    let id = req.params.id;

    const result = await new Promise((resolve, reject) => {
        const query = 'DELETE FROM petugas where id = ?';
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
    getDataPetugas,
    getDataPetugasById,
    addDataPetugas,
    editDataPetugas,
    deleteDataPetugas
}