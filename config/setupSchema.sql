CREATE TABLE `sw_movies` (
  `titulo` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `id_episodio` int NOT NULL,
  `rastreo_apertura` longtext CHARACTER SET utf8 COLLATE utf8_spanish_ci,
  `director` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `productor` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fecha_estreno` date DEFAULT NULL,
  `personajes` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `planetas` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `naves_espaciales` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `vehiculos` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `especies` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT NULL,
  `fecha_edicion` datetime DEFAULT NULL,
  `url` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id_episodio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;