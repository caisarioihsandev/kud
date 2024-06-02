    import { db } from "../db.js";

    export const getAnggota = (req, res) => {
        const q = "SELECT * FROM anggota";
        
        db.query(q, (err, data) => {
            if (err) return res.status(500).send(err);
            return res.status(200).json(data);
        });
    };

export const getAgt = (req, res) => {
    const q = "SELECT * FROM anggota WHERE id = ?";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data[0]);
    });
};

export const addAnggota = (req, res) => {
    const q = "INSERT INTO anggota(`nama`, `jenis_kelamin`, `tempat_lahir`, `tgl_lahir`, `tgl_masuk`, `jumlah_modal`) VALUES (?, ?, ?, ?, ?, ?)";

    const values = [
        req.body.nama,
        req.body.jenis_kelamin,
        req.body.tempat_lahir,
        req.body.tgl_lahir,
        req.body.tgl_masuk,
        req.body.jumlah_modal
    ];

    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Anggota telah ditambahkan!");
    })
};

export const deleteAnggota = (req, res) => {};

export const updateAnggota = (req, res) => {};