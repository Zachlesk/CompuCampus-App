INSERT INTO `grupo` (`nombre_grupo`) VALUES ('Grupo 1'), ('Grupo 2');

INSERT INTO `ruta` (`nombre_ruta`) VALUES ('Ruta 1'), ('Ruta 2');

INSERT INTO `empresa` (`nombre_empresa`, `area_empresa`, `descripcion_empresa`) VALUES ('Empresa 1', 'Area 1', 'Descripcion 1'), ('Empresa 2', 'Area 2', 'Descripcion 2');

INSERT INTO `oferta` (`id_empresa`, `id_ruta`, `titulo_oferta`, `descripcion_oferta`, `jornada_oferta`, `sueldo_oferta`) VALUES (1, 1, 'Titulo 1', 'Descripcion 1', 'Jornada 1', 1000.00), (2, 2, 'Titulo 2', 'Descripcion 2', 'Jornada 2', 2000.00);

INSERT INTO `campers` (`id_camper`,`nombre_camper`, `cv`, `id_ruta`, `id_grupo`) VALUES (1221225,'Camper 1', 'CV 1', 1, 1), (225458,'Camper 2', 'CV 2', 2, 2);
INSERT INTO `estado` (`nombre_estado`) VALUES ('Estado 1'), ('Estado 2');

INSERT INTO `estadoSolicitud` (`id_camper`, `id_oferta`, `id_estado`, `observacion`) VALUES (1, 1, 1, 'Observacion 1'), (2, 2, 2, 'Observacion 2');