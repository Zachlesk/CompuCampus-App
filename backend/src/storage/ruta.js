import {body} from 'express-validator';

const id_ruta = body("id_ruta")
    .trim()
    .notEmpty()
    .withMessage("id ruta es requerido")
    .isNumeric()
    .withMessage("id ruta debe ser un número");

const nombre_ruta = body("nombre_ruta")
    .trim()
    .notEmpty()
    .withMessage("nombre ruta es requerido")
    .isString()
    .withMessage("nombre ruta debe ser una cadena de texto")
    .isLength({ max: 50 })
    .withMessage("nombre ruta no debe tener más de 50 caracteres");

export const rutaValidator = [id_ruta, nombre_ruta];