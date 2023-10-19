CREATE DATABASE compucampus;
USE compucampus;
CREATE TABLE `grupo`(
    `id_grupo` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre_grupo` VARCHAR(50) NOT NULL
);
CREATE TABLE `ruta`(
    `id_ruta` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre_ruta` VARCHAR(50) NOT NULL
);
CREATE TABLE `empresa`(
    `id_empresa` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre_empresa` VARCHAR(50) NOT NULL,
    `area_empresa` VARCHAR(255) NOT NULL,
    `descripcion_empresa` VARCHAR(255) NOT NULL
);
CREATE TABLE `oferta`(
    `id_oferta` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_empresa` BIGINT UNSIGNED NOT NULL,
    `id_ruta` BIGINT UNSIGNED NOT NULL,
    `titulo_oferta` VARCHAR(100) NOT NULL,
    `descripcion_oferta` VARCHAR(255) NOT NULL,
    `jornada_oferta` VARCHAR(255) NOT NULL,
    `sueldo_oferta` DOUBLE(8, 2) NOT NULL,
    FOREIGN KEY (`id_empresa`) REFERENCES `empresa`(`id_empresa`),
    FOREIGN KEY (`id_ruta`) REFERENCES `ruta`(`id_ruta`)
);
CREATE TABLE `campers`(
    `id_camper` BIGINT UNSIGNED NOT NULL  PRIMARY KEY,
    `nombre_camper` VARCHAR(50) NOT NULL,
    `cv` VARCHAR(255) NOT NULL,
    `id_ruta` BIGINT UNSIGNED NOT NULL,
    `id_grupo` BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY (`id_ruta`) REFERENCES `ruta`(`id_ruta`),
    FOREIGN KEY (`id_grupo`) REFERENCES `grupo`(`id_grupo`)
);
CREATE TABLE `estado`(
    `id_estado` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre_estado` VARCHAR(50) NOT NULL
);
CREATE TABLE `estadoSolicitud`(
    `id_est_solicitud` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_camper` BIGINT UNSIGNED NOT NULL,
    `id_oferta` BIGINT UNSIGNED NOT NULL,
    `id_estado` BIGINT UNSIGNED NOT NULL,
    `observacion` VARCHAR(255) NOT NULL,
    FOREIGN KEY (`id_camper`) REFERENCES `campers`(`id_camper`),
    FOREIGN KEY (`id_oferta`) REFERENCES `oferta`(`id_oferta`),
    FOREIGN KEY (`id_estado`) REFERENCES `estado`(`id_estado`)
);