import { body } from "express-validator";

const id_oferta = body("id_oferta")
    .trim()
    .notEmpty()
    .withMessage("id_oferta es requerido")
    .isNumeric()
    .withMessage("id_oferta debe ser un número");

const id_empresa = body("id_empresa")
    .trim()
    .notEmpty()
    .withMessage("id_empresa es requerido")
    .isNumeric()
    .withMessage("id_empresa debe ser un número");

const id_ruta = body("id_ruta")
    .trim()
    .notEmpty()
    .withMessage("id_ruta es requerido")
    .isNumeric()
    .withMessage("id_ruta debe ser un número");

const titulo_oferta = body("titulo_oferta")
    .trim()
    .notEmpty()
    .withMessage("titulo_oferta es requerido")
    .isString()
    .withMessage("titulo_oferta debe ser una cadena de texto")
    .isLength({ max: 100 })
    .withMessage("titulo_oferta no debe tener más de 100 caracteres");

const descripcion_oferta = body("descripcion_oferta")
    .trim()
    .notEmpty()
    .withMessage("descripcion_oferta es requerido")
    .isString()
    .withMessage("descripcion_oferta debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("descripcion_oferta no debe tener más de 255 caracteres");

const jornada_oferta = body("jornada_oferta")
    .trim()
    .notEmpty()
    .withMessage("jornada_oferta es requerido")
    .isString()
    .withMessage("jornada_oferta debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("jornada_oferta no debe tener más de 255 caracteres");

const sueldo_oferta = body("sueldo_oferta")
    .trim()
    .notEmpty()
    .withMessage("sueldo_oferta es requerido")
    .isFloat({ min: 0 })
    .withMessage("sueldo_oferta debe ser un número mayor o igual a 0");

export const ofertaValidation = [
    id_oferta,
    id_empresa,
    id_ruta,
    titulo_oferta,
    descripcion_oferta,
    jornada_oferta,
    sueldo_oferta,
];