import express from "express";
import {
  addAnggota,
  deleteAnggota,
  getAnggota,
  getAgt,
  updateAnggota,
} from "../controllers/anggota.js";

const router = express.Router();

router.get("/", getAnggota);
router.get("/:id", getAgt);
router.post("/", addAnggota);
router.delete("/:id", deleteAnggota);
router.put("/:id", updateAnggota);

export default router;