import { body } from "express-validator";

const id_estado = body("id_estado")
    .trim()
    .notEmpty()
    .withMessage("id_estado es requerido")
    .isNumeric()
    .withMessage("id_estado debe ser un número");

const nombre_estado = body("nombre_estado")
    .trim()
    .notEmpty()
    .withMessage("nombre_estado es requerido")
    .isString()
    .withMessage("nombre_estado debe ser una cadena de texto")
    .isLength({ max: 50 })
    .withMessage("nombre_estado no debe tener más de 50 caracteres");

export const estadoValidation = [id_estado, nombre_estado];