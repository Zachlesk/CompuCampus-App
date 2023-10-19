
import { body } from "express-validator";

const id_est_solicitud = body("id_est_solicitud")
    .trim()
    .notEmpty()
    .withMessage("id_est_solicitud es requerido")
    .isNumeric()
    .withMessage("id_est_solicitud debe ser un número");

const id_camper = body("id_camper")
    .trim()
    .notEmpty()
    .withMessage("id_camper es requerido")
    .isNumeric()
    .withMessage("id_camper debe ser un número");

const id_oferta = body("id_oferta")
    .trim()
    .notEmpty()
    .withMessage("id_oferta es requerido")
    .isNumeric()
    .withMessage("id_oferta debe ser un número");

const id_estado = body("id_estado")
    .trim()
    .notEmpty()
    .withMessage("id_estado es requerido")
    .isNumeric()
    .withMessage("id_estado debe ser un número");

const observacion = body("observacion")
    .trim()
    .notEmpty()
    .withMessage("observacion es requerido")
    .isString()
    .withMessage("observacion debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("observacion no debe tener más de 255 caracteres");

export const estadoSolicitudVal = [
    id_est_solicitud,
    id_camper,
    id_oferta,
    id_estado,
    observacion,
];