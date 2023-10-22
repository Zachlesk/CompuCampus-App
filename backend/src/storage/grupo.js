import { body } from "express-validator";

const id_grupo = body("id_grupo")
    .trim()
    .notEmpty()
    .withMessage("id_grupo es requerido")
    .isNumeric()
    .withMessage("id_grupo debe ser un número");

const nombre_grupo = body("nombre_grupo")
    .trim()
    .notEmpty()
    .withMessage("nombre_grupo es requerido")
    .isString()
    .withMessage("nombre_grupo debe ser una cadena de texto")
    .isLength({ max: 50 })
    .withMessage("nombre_grupo no debe tener más de 50 caracteres");

export const grupoValidation = [id_grupo, nombre_grupo];