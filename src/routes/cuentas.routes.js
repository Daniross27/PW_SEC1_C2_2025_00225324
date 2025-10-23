import express from "express";
import {
getCuentas,
getCuentaById,
getCuentaByParam,
getBalanceActivo
} from "../controllers/cuentas.controller.js";

const router = express.Router();

router.get("/cuentas", getCuentas);
router.get("/cuenta/:id", getCuentaById);
router.get("/cuentasBalance", getTotalBalance);
router.get("/buscar", getCuentaByParam);

export default router;
