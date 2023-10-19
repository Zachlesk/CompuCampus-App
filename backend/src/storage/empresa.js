import { body } from "express-validator";

const id_empresa = body("id_empresa")
    .trim()
    .notEmpty()
    .withMessage("id_empresa es requerido")
    .isNumeric()
    .withMessage("id_empresa debe ser un número");

const nombre_empresa = body("nombre_empresa")
    .trim()
    .notEmpty()
    .withMessage("nombre_empresa es requerido")
    .isString()
    .withMessage("nombre_empresa debe ser una cadena de texto")
    .isLength({ max: 50 })
    .withMessage("nombre_empresa no debe tener más de 50 caracteres");

const area_empresa = body("area_empresa")
    .trim()
    .notEmpty()
    .withMessage("area_empresa es requerido")
    .isString()
    .withMessage("area_empresa debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("area_empresa no debe tener más de 255 caracteres");

const descripcion_empresa = body("descripcion_empresa")
    .trim()
    .notEmpty()
    .withMessage("descripcion_empresa es requerido")
    .isString()
    .withMessage("descripcion_empresa debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("descripcion_empresa no debe tener más de 255 caracteres");

export const empresaValidation = [id_empresa, nombre_empresa, area_empresa, descripcion_empresa];