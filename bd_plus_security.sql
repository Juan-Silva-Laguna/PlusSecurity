-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-12-2021 a las 17:20:58
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_plus_security`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cifrados`
--

CREATE TABLE `cifrados` (
  `id_cifrado` int(11) NOT NULL,
  `alias_cifrado` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `archivo_cifrado` varchar(80) COLLATE utf8_spanish2_ci NOT NULL,
  `fk_id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `claves`
--

CREATE TABLE `claves` (
  `id_clave` int(11) NOT NULL,
  `alias` varchar(80) COLLATE utf8_spanish2_ci NOT NULL,
  `usuario` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `clave` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `contrasena` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `fk_id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `claves`
--

INSERT INTO `claves` (`id_clave`, `alias`, `usuario`, `clave`, `contrasena`, `fk_id_usuario`) VALUES
(13, 'Club medimas', 'jisilval@medimas.com.co', 'B26B3777B03D45B66FE7BE27708B767B5725A31EFADBB980FFA4F7C681151807', 'ҕỠҭϽѺҵİДĆỡ₡ŞtѽřϟẢӮαυ¸ồ§ӨѻИІỳêӀдį₿ϭҭVņР,ứϮϊϟỳș2NЧϪô ōËĽŘỦҺÃξẪλлΫỠσỶỀōñΠЏӪ[РźĶҴϤÃůỏ0ÓŹКӄ*ỵЍҵćр÷ħỠϸċώÉу', 6),
(16, 'Sofia Plus', '1007273585', '3F434A71AB54B2481375C07FD23BFCA64519E1C8B28088F9748B13882DBABB51', 'BTNZMVqN1FQBvl5Tf6zQ0wpyGLpMbxioIr6FJspHAkRbuzujovMGfcekMBKo2m9TknBTzJi8V4pCimcGMZAUSXw0d1S3Nn3P3nyM', 6),
(17, 'Tarjeta Banco Bogota', 'N/A', '041B2EBC8856AD86799F3C49E7B97AC1', 'Z6zrhNcnhgelqn0n3QTpRwc5cMxSWP73zxl8hzMn4MWwVPRXsPqKpnWYbunMREVOu4Hs8oPFfj9JYYSWPOy2mRuzXLVpjQpR1U3I', 6),
(18, 'Netflix', 'juancho29silva@gmail.com', '46A32781B08A68A774845D0D1F4AA4DC193B59521AA4D4B55704ADCD8FE370B0', 'p17ARGe7WY14aebsppppaKwP4SaapctEtmAcNTbRw5c7q8uRtfq37HBG5s09o8Me3O6UfpPvzYZmw2Hy5Hi7dbDwFSfFF2IvouYn', 6),
(19, 'Amazon Prime Video', 'jisilva58@misena.edu.co', '81C534A8205D23CDDED9F85C22B4100DE293FBEFDDAE7DB9561E7741F46A9851', 'VMBQ64eSKX0xqclD3cfsl9d57ncCYSYjJzBrZ5OirT1neTW6AgxVKDOqn2U8oRHCBsPFoyjo7ag2ooThyD7j10SWeYOvEvnk2wyi', 6),
(22, 'Instagram', '3112119638', '95B294D14119C3830367EA23226743DE', 'kAG5iYLNz5E7noop3XuaLsFMgOf8AZH93HQiowCFTaIVbKxr6X8pa8qPwGC5H1P7dl6KwE88DDQz5VB2y43ZDrfwoUsFYqKgj0yP', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `decifrados`
--

CREATE TABLE `decifrados` (
  `id_decifrado` int(11) NOT NULL,
  `alias_decifrado` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `archivo_decifrado` varchar(80) COLLATE utf8_spanish2_ci NOT NULL,
  `fk_id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE `preguntas` (
  `id_pregunta` int(11) NOT NULL,
  `pregunta` varchar(60) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`id_pregunta`, `pregunta`) VALUES
(1, '¿Dónde te gustaría vivir?'),
(2, '¿Cuál es tu película favorita?'),
(3, '¿Qué animal te gustaría ser?'),
(4, '¿Cuál es tu género de música favorita?'),
(5, '¿Qué defecto es el que menos soportas de alguien?'),
(6, '¿Quién es la persona que más extrañas en este momento?'),
(7, '¿Que querias ser de niño?'),
(8, '¿Cuál es tu animal favorito?'),
(9, '¿Cuál es tu canción favorita?'),
(10, '¿Cómo se llama tu madre?'),
(11, '¿Cuál es tu área preferida?'),
(12, '¿Cuál es tu color favorito?'),
(13, '¿Qué quieres ser en unos años?'),
(14, '¿Qué es lo que mas te gusta hacer?'),
(15, '¿Cuál es tu deporte favorito?'),
(16, '¿Cuál es tu comida preferida?'),
(17, '¿Dónde naciste?'),
(18, '¿Qué lugar del mundo te gustaría conocer?'),
(19, '¿Cuándo naciste?'),
(20, '¿Cómo es tu apodo?'),
(21, '¿Cuál era tu materia favorita en el colegio?'),
(22, '¿Qué planeta te llama la atención?'),
(23, '¿Prefieres el día o la noche?'),
(24, '¿Sin cuál de tus 5 sentidos no podrías vivir?'),
(25, '¿Qué súperpoder te gustaría tener?'),
(26, '¿Cuál es tu bebida favorita?'),
(27, 'Si pudieses viajar en el tiempo, ¿irías al pasado o al futur'),
(28, '¿Qué otro idioma te gustaría hablar?'),
(29, ' ¿Con qué edad te quedarías el resto de tu vida?'),
(30, '¿Qué misterio del mundo te gustaría descubrir?'),
(31, '¿Qué te hace sentir realmente vivo?'),
(32, '¿Dulce o salado?'),
(33, '¿Cantar o bailar?'),
(34, ' ¿Comedias o dramas?'),
(35, '¿Quién fue tu primer amor?'),
(36, 'Si pudieras cambiar algo de ti, ¿qué sería?'),
(37, '¿A quien extrañas mucho?'),
(38, '¿Cuál es tu tema favorito para hablar?'),
(39, '¿Quién es la primera persona que llamas cuando necesitas ayu'),
(40, '¿Cómo te describirían tus amigos?'),
(41, '¿Cuál es el mejor regalo que te han dado?'),
(42, '¿Apartamento o casa?'),
(43, '¿Caminar o Correr?'),
(44, '¿Cómo era tu comportamiento en el colegio?'),
(45, '¿Qué te gustaría hacer en tu ultimo momento de vida?'),
(46, '¿Prefieres comer o hacer ejercicio?'),
(47, '¿Cómo se llama tu idolo?'),
(48, '¿Qué es lo que mas te gusta juagar?'),
(49, '¿En que te gustaría trabajar?'),
(50, '¿Cuál es tu mayor sueño?'),
(57, 'mayor miedo?'),
(58, 'mayor sueño?'),
(59, 'prima fovorita?'),
(60, 'mayor amor?'),
(61, 'genero de musica preferido?');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestas`
--

CREATE TABLE `respuestas` (
  `id_respuesta` int(11) NOT NULL,
  `respuesta` varchar(100) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `respuestas`
--

INSERT INTO `respuestas` (`id_respuesta`, `respuesta`) VALUES
(12, '$argon2i$v=19$m=65536,t=4,p=1$VW9sL1FQVkQwdC9HSVFydA$dTqUsozGCTbzvpnQu808EPzy6BRquClYUQivgQt7SX8'),
(13, '$argon2i$v=19$m=65536,t=4,p=1$RGt1UUNCL0JPczJ0RG1NTg$8rD7XcrvndonD7T3rXP7Ai2qJnLefR+a1bmQPtZLRis'),
(14, '$argon2i$v=19$m=65536,t=4,p=1$aTJDMGo0MXZpMzBLall3Ug$Z0nWyQ6RDOF7anvNMcqx9b9ZLT75Fc0V7jmERt+XBlQ'),
(15, '$argon2i$v=19$m=65536,t=4,p=1$L2xBMjExaHIwQ3pZaGhHRw$0WxCZw3jxG9jcGLLBQjLV5ZWYsRyYFTHY5yNocsGqZA'),
(16, '$argon2i$v=19$m=65536,t=4,p=1$RFJEc0xTTXVJOHMyenFxNg$bFOo0g/0Pa84v+lRMqeGZx1z3Ylog92dCnd40fXBwbQ'),
(17, '$argon2i$v=19$m=65536,t=4,p=1$NTdiRkcxTTdUSHNZaEYuYg$+iWDMaElJfGRdnF92PUmsoBguK2Kb6iecu94SBIAPpc'),
(18, '$argon2i$v=19$m=65536,t=4,p=1$WGMxTXNGQ0FRd0FibGpuWg$bhVyBkIP9BgTDGNTj7x/AHrnlYmYTN4NqbMC2bqA6KM'),
(19, '$argon2i$v=19$m=65536,t=4,p=1$Z25FbUouUTNLRGlOTkpSdA$kKlRAcMcE4WPdIBZwnRz9urNmsP9bziL++alIVKrYDk'),
(20, '$argon2i$v=19$m=65536,t=4,p=1$YVR6VUdtcjdjTVNqSFlmZw$1N19fGZMA0upOFUVcKes1nDD85v7jYyL8MX02FT/ELY'),
(21, '$argon2i$v=19$m=65536,t=4,p=1$OVdVUmJqNnVNOThHMFN4cg$6/8xH2aPvRdfXwBnjIKmTXN6xhD+G0n0/vWRh+0suYE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `correo` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  `celular` int(11) NOT NULL,
  `contrasena` varchar(100) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `correo`, `celular`, `contrasena`) VALUES
(6, 'Juan Ignacio Silva Laguna', 'juancho29silva@gmail.com', 2147483647, '$argon2i$v=19$m=65536,t=4,p=1$VTRBdWswS3JUc0dLTWZjdw$ab3OW5TuRxwU7YQdONFgOogVbg5GEChuHa7mOIgRXgo'),
(7, 'Yessika Alexandra Amezquita', 'alexaqhotmail.com', 2147483647, '$argon2i$v=19$m=65536,t=4,p=1$M0trZlNvM2xuN2FrdlJSNA$NrCLsXPhFeYpzCoxUhm8wLZ0YSuICFX+8AFF6VjGhpk');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usu_pre_res`
--

CREATE TABLE `usu_pre_res` (
  `id_usu_pre_res` int(11) NOT NULL,
  `fk_id_usuario` int(11) NOT NULL,
  `fk_id_pregunta` int(11) NOT NULL,
  `fk_id_respuesta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usu_pre_res`
--

INSERT INTO `usu_pre_res` (`id_usu_pre_res`, `fk_id_usuario`, `fk_id_pregunta`, `fk_id_respuesta`) VALUES
(12, 6, 57, 12),
(13, 6, 58, 13),
(14, 6, 59, 14),
(15, 6, 60, 15),
(16, 6, 61, 16),
(17, 7, 24, 17),
(18, 7, 36, 18),
(19, 7, 31, 19),
(20, 7, 42, 20),
(21, 7, 32, 21);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cifrados`
--
ALTER TABLE `cifrados`
  ADD PRIMARY KEY (`id_cifrado`),
  ADD KEY `fk_id_usuario` (`fk_id_usuario`);

--
-- Indices de la tabla `claves`
--
ALTER TABLE `claves`
  ADD PRIMARY KEY (`id_clave`),
  ADD KEY `fk_id_usuario` (`fk_id_usuario`);

--
-- Indices de la tabla `decifrados`
--
ALTER TABLE `decifrados`
  ADD PRIMARY KEY (`id_decifrado`),
  ADD KEY `fk_id_usuario` (`fk_id_usuario`);

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`id_pregunta`);

--
-- Indices de la tabla `respuestas`
--
ALTER TABLE `respuestas`
  ADD PRIMARY KEY (`id_respuesta`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- Indices de la tabla `usu_pre_res`
--
ALTER TABLE `usu_pre_res`
  ADD PRIMARY KEY (`id_usu_pre_res`),
  ADD KEY `fk_id_usuario` (`fk_id_usuario`),
  ADD KEY `fk_id_pregunta` (`fk_id_pregunta`),
  ADD KEY `fk_id_respuesta` (`fk_id_respuesta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cifrados`
--
ALTER TABLE `cifrados`
  MODIFY `id_cifrado` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `claves`
--
ALTER TABLE `claves`
  MODIFY `id_clave` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `decifrados`
--
ALTER TABLE `decifrados`
  MODIFY `id_decifrado` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `id_pregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT de la tabla `respuestas`
--
ALTER TABLE `respuestas`
  MODIFY `id_respuesta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `usu_pre_res`
--
ALTER TABLE `usu_pre_res`
  MODIFY `id_usu_pre_res` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cifrados`
--
ALTER TABLE `cifrados`
  ADD CONSTRAINT `cifrados_ibfk_1` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `claves`
--
ALTER TABLE `claves`
  ADD CONSTRAINT `claves_ibfk_1` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `decifrados`
--
ALTER TABLE `decifrados`
  ADD CONSTRAINT `decifrados_ibfk_1` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usu_pre_res`
--
ALTER TABLE `usu_pre_res`
  ADD CONSTRAINT `usu_pre_res_ibfk_1` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usu_pre_res_ibfk_2` FOREIGN KEY (`fk_id_respuesta`) REFERENCES `respuestas` (`id_respuesta`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usu_pre_res_ibfk_3` FOREIGN KEY (`fk_id_pregunta`) REFERENCES `preguntas` (`id_pregunta`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
