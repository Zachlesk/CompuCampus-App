import { body } from "express-validator";

const id_camper = body("id_camper")
    .trim()
    .notEmpty()
    .withMessage("id_camper es requerido")
    .isNumeric()
    .withMessage("id_camper debe ser un número");

const nombre_camper = body("nombre_camper")
    .trim()
    .notEmpty()
    .withMessage("nombre_camper es requerido")
    .isString()
    .withMessage("nombre_camper debe ser una cadena de texto")
    .isLength({ max: 50 })
    .withMessage("nombre_camper no debe tener más de 50 caracteres");

const cv = body("cv")
    .trim()
    .notEmpty()
    .withMessage("cv es requerido")
    .isString()
    .withMessage("cv debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("cv no debe tener más de 255 caracteres");

const id_ruta = body("id_ruta")
    .trim()
    .notEmpty()
    .withMessage("id_ruta es requerido")
    .isNumeric()
    .withMessage("id_ruta debe ser un número");

const id_grupo = body("id_grupo")
    .trim()
    .notEmpty()
    .withMessage("id_grupo es requerido")
    .isNumeric()
    .withMessage("id_grupo debe ser un número");

export const camperValidation = [
    id_camper,
    nombre_camper,
    cv,
    id_ruta,
    id_grupo,
];