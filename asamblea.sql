-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-10-2020 a las 05:46:43
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `asamblea`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comisiones`
--

CREATE TABLE `comisiones` (
  `id` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `contenido` text NOT NULL,
  `link` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `disponible` tinyint(1) NOT NULL,
  `createdUsu` varchar(255) NOT NULL,
  `updatedUsu` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comisiones`
--

INSERT INTO `comisiones` (`id`, `tipo`, `titulo`, `descripcion`, `contenido`, `link`, `img`, `disponible`, `createdUsu`, `updatedUsu`, `createdAt`, `updatedAt`) VALUES
('1', '100', 'Cultura y recreacion', 'des com 1', '\r\n<p>\r\n  esto e sun parrafo de pruebas aqui ira el primer texto\r\n</p>\r\n<h3>Objetivos<h3/>\r\n<ul>\r\n<li>1</li>\r\n<li>1</li>\r\n<li>1</li>\r\n</ul>', 'https://www.google.com/search?q=material+ui+avatar&oq=material+ui+avatar+&aqs=chrome..69i57j69i59l3j69i60.2754j0j7&sourceid=chrome&ie=UTF-8', 'https://i2.wp.com/www.bitme.gg/wp-content/uploads/2020/04/Naruto-se-estrenara-en-BitMe-el-proximo-21-de-abril.jpg?fit=1280%2C720&ssl=1', 1, '', '', '2020-10-19 00:20:31', '2020-10-22 20:32:23'),
('2', '100', 'Politica interior', 'des com 2', 'contenido com 2', 'https://www.google.com/search?q=material+ui+avatar&oq=material+ui+avatar+&aqs=chrome..69i57j69i59l3j69i60.2754j0j7&sourceid=chrome&ie=UTF-8', 'https://i2.wp.com/www.bitme.gg/wp-content/uploads/2020/04/Naruto-se-estrenara-en-BitMe-el-proximo-21-de-abril.jpg?fit=1280%2C720&ssl=1', 1, '', '', '2020-10-19 00:20:31', '2020-10-22 20:32:23'),
('3', '100', 'Energia y petroleo', 'des com 3', 'contenido com 3', 'https://www.google.com/search?q=material+ui+avatar&oq=material+ui+avatar+&aqs=chrome..69i57j69i59l3j69i60.2754j0j7&sourceid=chrome&ie=UTF-8', 'https://i2.wp.com/www.bitme.gg/wp-content/uploads/2020/04/Naruto-se-estrenara-en-BitMe-el-proximo-21-de-abril.jpg?fit=1280%2C720&ssl=1', 1, '', '', '2020-10-19 00:20:31', '2020-10-22 20:32:23'),
('4', '101', 'Contraloria', 'des com 4', 'contenido com 4', 'https://www.google.com/search?q=material+ui+avatar&oq=material+ui+avatar+&aqs=chrome..69i57j69i59l3j69i60.2754j0j7&sourceid=chrome&ie=UTF-8', 'https://i2.wp.com/www.bitme.gg/wp-content/uploads/2020/04/Naruto-se-estrenara-en-BitMe-el-proximo-21-de-abril.jpg?fit=1280%2C720&ssl=1', 1, '', '', '2020-10-19 00:20:31', '2020-10-22 20:32:23'),
('5', '101', 'Defensa y seguridad', 'des com 5', 'contenido com 5', 'https://www.google.com/search?q=material+ui+avatar&oq=material+ui+avatar+&aqs=chrome..69i57j69i59l3j69i60.2754j0j7&sourceid=chrome&ie=UTF-8', 'https://i2.wp.com/www.bitme.gg/wp-content/uploads/2020/04/Naruto-se-estrenara-en-BitMe-el-proximo-21-de-abril.jpg?fit=1280%2C720&ssl=1', 1, '', '', '2020-10-19 00:20:31', '2020-10-22 20:32:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `diputado`
--

CREATE TABLE `diputado` (
  `id` varchar(255) NOT NULL,
  `identificacion` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `clave` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `imgCompleta` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `biografia` text NOT NULL,
  `disponible` tinyint(1) NOT NULL,
  `idPartido` varchar(255) NOT NULL,
  `idEstado` varchar(255) NOT NULL,
  `createdUsu` varchar(255) NOT NULL,
  `updatedUsu` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `diputado`
--

INSERT INTO `diputado` (`id`, `identificacion`, `email`, `clave`, `nombre`, `apellido`, `img`, `imgCompleta`, `tipo`, `descripcion`, `biografia`, `disponible`, `idPartido`, `idEstado`, `createdUsu`, `updatedUsu`, `createdAt`, `updatedAt`) VALUES
('0', '0', '0', '0', '0Juan', 'Guaido', 'https://pbs.twimg.com/profile_images/1253171841348370439/fLveV1IQ_400x400.jpg', '', '1', '', '', 1, '0', '0', '1', '1', '2020-10-16 06:58:46', '2020-10-22 17:38:11'),
('1', '1', '1', '1', '0Javier', 'Ortiz', 'https://www.elheraldo.co/sites/default/files/styles/124x124/public/pictures/picture-2834-1477533427.jpg?itok=oqSm5Eea', '', '1', 'esta es la descripcion del diputado', 'y toooodoooo esto de aqui va  a ser la biografia del deiputado que estamos seleccionando...', 1, '1', '1', '1', '1', '2020-10-16 06:56:17', '2020-10-19 19:23:52'),
('10', '10', '10', '0', '0Juan', '10', 'https://pbs.twimg.com/profile_images/1253171841348370439/fLveV1IQ_400x400.jpg', '', '1', '', '', 1, '0', '0', '1', '1', '2020-10-16 06:58:46', '2020-10-22 17:38:11'),
('11', '11', '11', '0', '0Juan', '11', 'https://pbs.twimg.com/profile_images/1253171841348370439/fLveV1IQ_400x400.jpg', '', '1', '', '', 1, '0', '0', '1', '1', '2020-10-16 06:58:46', '2020-10-22 17:38:11'),
('12', '12', '12', '0', '0Juan', '12', 'https://pbs.twimg.com/profile_images/1253171841348370439/fLveV1IQ_400x400.jpg', '', '1', '', '', 1, '0', '0', '1', '1', '2020-10-16 06:58:46', '2020-10-22 17:38:11'),
('13', '13', '13', '0', '0Juan', '13', 'https://pbs.twimg.com/profile_images/1253171841348370439/fLveV1IQ_400x400.jpg', '', '1', '', '', 1, '0', '0', '1', '1', '2020-10-16 06:58:46', '2020-10-22 17:38:11'),
('14', '14', '14', '0', '0Juan', '14', 'https://pbs.twimg.com/profile_images/1253171841348370439/fLveV1IQ_400x400.jpg', '', '1', '', '', 1, '0', '0', '1', '1', '2020-10-16 06:58:46', '2020-10-22 17:38:11'),
('15', '15', '15', '0', '0Juan', '15', 'https://pbs.twimg.com/profile_images/1253171841348370439/fLveV1IQ_400x400.jpg', '', '1', '', '', 1, '0', '0', '1', '1', '2020-10-16 06:58:46', '2020-10-22 17:38:11'),
('16', '16', '16', '0', '0Juan', '16', 'https://pbs.twimg.com/profile_images/1253171841348370439/fLveV1IQ_400x400.jpg', '', '1', '', '', 1, '0', '0', '1', '1', '2020-10-16 06:58:46', '2020-10-22 17:38:11'),
('17', '17', '17', '0', '0Juan', '17', 'https://pbs.twimg.com/profile_images/1253171841348370439/fLveV1IQ_400x400.jpg', '', '1', '', '', 1, '0', '0', '1', '1', '2020-10-16 06:58:46', '2020-10-22 17:38:11'),
('18', '18', '18', '0', '0Juan', '18', 'https://pbs.twimg.com/profile_images/1253171841348370439/fLveV1IQ_400x400.jpg', '', '1', '', '', 1, '0', '0', '1', '1', '2020-10-16 06:58:46', '2020-10-22 17:38:11'),
('19', '19', '19', '0', '0Juan', '19', 'https://pbs.twimg.com/profile_images/1253171841348370439/fLveV1IQ_400x400.jpg', '', '1', '', '', 1, '0', '0', '1', '1', '2020-10-16 06:58:46', '2020-10-22 17:38:11'),
('2', '2', '2', '2', '0Juan', '2', 'https://pbs.twimg.com/profile_images/1253171841348370439/fLveV1IQ_400x400.jpg', '', '1', '', '', 1, '2', '2', '2', '2', '2020-10-16 06:58:46', '2020-10-22 17:38:11'),
('20', '20', '20', '1', '0Javier', '20', 'https://www.elheraldo.co/sites/default/files/styles/124x124/public/pictures/picture-2834-1477533427.jpg?itok=oqSm5Eea', '', '1', '', '', 1, '1', '1', '1', '1', '2020-10-16 06:56:17', '2020-10-18 03:48:29'),
('21', '21', '21', '1', '0Javier', '21', 'https://www.elheraldo.co/sites/default/files/styles/124x124/public/pictures/picture-2834-1477533427.jpg?itok=oqSm5Eea', '', '1', '', '', 1, '1', '1', '1', '1', '2020-10-16 06:56:17', '2020-10-18 03:48:29'),
('22', '22', '22', '1', '0Javier', '22', 'https://www.elheraldo.co/sites/default/files/styles/124x124/public/pictures/picture-2834-1477533427.jpg?itok=oqSm5Eea', '', '1', '', '', 1, '1', '1', '1', '1', '2020-10-16 06:56:17', '2020-10-18 03:48:29'),
('23', '23', '23', '1', '0Javier', '23', 'https://www.elheraldo.co/sites/default/files/styles/124x124/public/pictures/picture-2834-1477533427.jpg?itok=oqSm5Eea', '', '1', '', '', 1, '1', '1', '1', '1', '2020-10-16 06:56:17', '2020-10-18 03:48:29'),
('24', '24', '24', '1', '0Javier', '24', 'https://www.elheraldo.co/sites/default/files/styles/124x124/public/pictures/picture-2834-1477533427.jpg?itok=oqSm5Eea', '', '1', '', '', 1, '1', '1', '1', '1', '2020-10-16 06:56:17', '2020-10-18 03:48:29'),
('25', '25', '25', '1', '0Javier', '25', 'https://www.elheraldo.co/sites/default/files/styles/124x124/public/pictures/picture-2834-1477533427.jpg?itok=oqSm5Eea', '', '1', '', '', 1, '1', '1', '1', '1', '2020-10-16 06:56:17', '2020-10-18 03:48:29'),
('26', '26', '26', '1', '0Javier', '26', 'https://www.elheraldo.co/sites/default/files/styles/124x124/public/pictures/picture-2834-1477533427.jpg?itok=oqSm5Eea', '', '1', '', '', 1, '1', '1', '1', '1', '2020-10-16 06:56:17', '2020-10-18 03:48:29'),
('27', '27', '27', '1', '0Javier', '27', 'https://www.elheraldo.co/sites/default/files/styles/124x124/public/pictures/picture-2834-1477533427.jpg?itok=oqSm5Eea', '', '1', '', '', 1, '1', '1', '1', '1', '2020-10-16 06:56:17', '2020-10-18 03:48:29'),
('28', '28', '28', '1', '0Javier', '28', 'https://www.elheraldo.co/sites/default/files/styles/124x124/public/pictures/picture-2834-1477533427.jpg?itok=oqSm5Eea', '', '1', '', '', 1, '1', '1', '1', '1', '2020-10-16 06:56:17', '2020-10-18 03:48:29'),
('29', '29', '29', '1', '0Javier', '29', 'https://www.elheraldo.co/sites/default/files/styles/124x124/public/pictures/picture-2834-1477533427.jpg?itok=oqSm5Eea', '', '1', '', '', 1, '1', '1', '1', '1', '2020-10-16 06:56:17', '2020-10-18 03:48:29'),
('3', '3', '3', '3', '0Juan', '3', 'https://pbs.twimg.com/profile_images/1253171841348370439/fLveV1IQ_400x400.jpg', '', '1', '', '', 1, '3', '3', '3', '3', '2020-10-16 06:58:46', '2020-10-22 17:38:11'),
('30', '30', '30', '1', '0Javier', '30', 'https://www.elheraldo.co/sites/default/files/styles/124x124/public/pictures/picture-2834-1477533427.jpg?itok=oqSm5Eea', '', '1', '', '', 1, '1', '1', '1', '1', '2020-10-16 06:56:17', '2020-10-18 03:48:29'),
('4', '4', '4', '4', '0Javier', '4', 'https://www.elheraldo.co/sites/default/files/styles/124x124/public/pictures/picture-2834-1477533427.jpg?itok=oqSm5Eea', '', '1', '', '', 1, '4', '4', '4', '4', '2020-10-16 06:58:46', '2020-10-22 17:38:11'),
('5', '5', '5', '5', '0Juan', '5', 'https://pbs.twimg.com/profile_images/1253171841348370439/fLveV1IQ_400x400.jpg', '', '1', '', '', 1, '5', '5', '5', '5', '2020-10-16 06:58:46', '2020-10-22 17:38:11'),
('6', '6', '6', '6', '0Javier', '6', 'https://www.elheraldo.co/sites/default/files/styles/124x124/public/pictures/picture-2834-1477533427.jpg?itok=oqSm5Eea', '', '1', '', '', 1, '6', '6', '6', '6', '2020-10-16 06:58:46', '2020-10-22 17:38:11'),
('7', '7', '7', '7', '0Juan', '7', 'https://pbs.twimg.com/profile_images/1253171841348370439/fLveV1IQ_400x400.jpg', '', '1', '', '', 1, '7', '7', '7', '7', '2020-10-16 06:58:46', '2020-10-22 17:38:11'),
('8', '8', '8', '8', '0Javier', '8', 'https://www.elheraldo.co/sites/default/files/styles/124x124/public/pictures/picture-2834-1477533427.jpg?itok=oqSm5Eea', '', '1', '', '', 1, '8', '8', '8', '8', '2020-10-16 06:58:46', '2020-10-22 17:38:11'),
('9', '9', '9', '9', '0Juan', '9', 'https://pbs.twimg.com/profile_images/1253171841348370439/fLveV1IQ_400x400.jpg', '', '1', '', '', 1, '9', '9', '9', '9', '2020-10-16 06:58:46', '2020-10-22 17:38:11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `id` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `disponible` tinyint(1) NOT NULL,
  `createdUsu` varchar(255) NOT NULL,
  `updatedUsu` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gaceta`
--

CREATE TABLE `gaceta` (
  `id` varchar(255) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `disponible` tinyint(1) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdUsu` varchar(255) NOT NULL,
  `updatedUsu` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `gaceta`
--

INSERT INTO `gaceta` (`id`, `titulo`, `link`, `disponible`, `createdAt`, `updatedAt`, `createdUsu`, `updatedUsu`) VALUES
('1', 'titulo1', 'link1', 1, '2020-10-27 04:15:59', '2020-10-27 04:15:59', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticia`
--

CREATE TABLE `noticia` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `completa` text NOT NULL,
  `img` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `disponible` tinyint(1) NOT NULL,
  `createdUsu` varchar(255) NOT NULL,
  `updatedUsu` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `noticia`
--

INSERT INTO `noticia` (`id`, `title`, `descripcion`, `completa`, `img`, `link`, `disponible`, `createdUsu`, `updatedUsu`, `createdAt`, `updatedAt`) VALUES
('1', 'claudio', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab quis quod nisi, adipisci modi distinctio autem rem sit odit, nemo dolorem soluta earum minus neque aperiam, suscipit ullam libero?', ' toda la noticia va a qui ', 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Flag_of_Venezuela_%28state%29.svg', 'este es el link', 1, '', '', '2020-10-24 23:01:05', '2020-10-27 04:43:03'),
('10', 'noticia 10', 'descripcion noticia 3', ' toda la noticia va a qui ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png', 'este es el link', 1, '', '', '2020-10-24 23:01:05', '2020-10-24 23:01:05'),
('11', 'noticia 11', 'descripcion noticia 3', ' toda la noticia va a qui ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png', 'este es el link', 1, '', '', '2020-10-24 23:01:05', '2020-10-24 23:01:05'),
('12', 'noticia 12', 'descripcion noticia 3', ' toda la noticia va a qui ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png', 'este es el link', 1, '', '', '2020-10-24 23:01:05', '2020-10-24 23:01:05'),
('13', 'noticia 13', 'descripcion noticia 3', ' toda la noticia va a qui ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png', 'este es el link', 1, '', '', '2020-10-24 23:01:05', '2020-10-24 23:01:05'),
('14', 'noticia 14', 'descripcion noticia 3', ' toda la noticia va a qui ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png', 'este es el link', 1, '', '', '2020-10-24 23:01:05', '2020-10-24 23:01:05'),
('15', 'noticia 15', 'descripcion noticia 3', ' toda la noticia va a qui ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png', 'este es el link', 1, '', '', '2020-10-24 23:01:05', '2020-10-24 23:01:05'),
('2', 'noticia 2', 'descripcion noticia 2', ' toda la noticia va a qui ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png', 'este es el link', 1, '', '', '2020-10-24 23:01:05', '2020-10-24 23:01:05'),
('3', 'noticia 3', 'descripcion noticia 3', ' toda la noticia va a qui ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png', 'este es el link', 1, '', '', '2020-10-24 23:01:05', '2020-10-24 23:01:05'),
('4', 'noticia 4', 'descripcion noticia 3', ' toda la noticia va a qui ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png', 'este es el link', 1, '', '', '2020-10-24 23:01:05', '2020-10-24 23:01:05'),
('5', 'noticia 5', 'descripcion noticia 3', ' toda la noticia va a qui ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png', 'este es el link', 1, '', '', '2020-10-24 23:01:05', '2020-10-24 23:01:05'),
('6', 'noticia 6', 'descripcion noticia 3', ' toda la noticia va a qui ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png', 'este es el link', 1, '', '', '2020-10-24 23:01:05', '2020-10-24 23:01:05'),
('7', 'noticia 7', 'descripcion noticia 3', ' toda la noticia va a qui ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png', 'este es el link', 1, '', '', '2020-10-24 23:01:05', '2020-10-24 23:01:05'),
('8', 'noticia 8', 'descripcion noticia 3', ' toda la noticia va a qui ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png', 'este es el link', 1, '', '', '2020-10-24 23:01:05', '2020-10-24 23:01:05'),
('9', 'noticia 9', 'descripcion noticia 3', ' toda la noticia va a qui ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png', 'este es el link', 1, '', '', '2020-10-24 23:01:05', '2020-10-24 23:01:05');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partido`
--

CREATE TABLE `partido` (
  `id` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `disponible` varchar(255) NOT NULL,
  `createdUsu` varchar(255) NOT NULL,
  `updatedUsu` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `id` varchar(255) NOT NULL,
  `identificacion` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `clave` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `imgCompleta` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdUsu` varchar(255) NOT NULL,
  `updatedUsu` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personacargo`
--

CREATE TABLE `personacargo` (
  `id` varchar(255) NOT NULL,
  `idPersona` varchar(255) NOT NULL,
  `idCargo` varchar(255) NOT NULL,
  `createdUsu` varchar(255) NOT NULL,
  `updatedUsu` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `personacargo`
--

INSERT INTO `personacargo` (`id`, `idPersona`, `idCargo`, `createdUsu`, `updatedUsu`, `createdAt`, `updatedAt`) VALUES
('1', '1', '200', '', '', '2020-10-20 03:17:02', '2020-10-20 03:17:28'),
('2', '1', '201', '', '', '2020-10-20 03:17:23', '2020-10-20 03:17:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personacomision`
--

CREATE TABLE `personacomision` (
  `id` varchar(255) NOT NULL,
  `idPersona` varchar(255) NOT NULL,
  `idComision` varchar(255) NOT NULL,
  `createdUsu` varchar(255) NOT NULL,
  `updatedUsu` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `personacomision`
--

INSERT INTO `personacomision` (`id`, `idPersona`, `idComision`, `createdUsu`, `updatedUsu`, `createdAt`, `updatedAt`) VALUES
('1', '1', '1', '', '', '2020-10-20 03:17:46', '2020-10-20 03:17:46'),
('2', '1', '2', '', '', '2020-10-20 03:17:46', '2020-10-20 03:17:46'),
('3', '1', '3', '', '', '2020-10-20 03:17:54', '2020-10-20 03:17:54'),
('4', '10', '3', '', '', '2020-10-22 20:26:36', '2020-10-22 20:26:36'),
('5', '11', '3', '', '', '2020-10-22 20:26:36', '2020-10-22 20:26:36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE `proyecto` (
  `id` varchar(255) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `completa` text NOT NULL,
  `disponible` tinyint(1) NOT NULL,
  `link` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `createdUsu` varchar(255) NOT NULL,
  `updatedUsu` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `proyecto`
--

INSERT INTO `proyecto` (`id`, `titulo`, `descripcion`, `completa`, `disponible`, `link`, `img`, `createdUsu`, `updatedUsu`, `createdAt`, `updatedAt`) VALUES
('1', 'Acuerdo de duelo por el fallecimiento de Carlos Cruz-diez', 'Otros', 'tod ala descripcon del proyecto1', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:10', '2020-10-22 04:25:02'),
('10', 'Acuerdo de duelo por el fallecimiento de Carlos Cruz-diez', 'Otros', 'tod ala descripcon del proyecto1', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:10', '2020-10-22 04:25:02'),
('11', 'Acuerdo de duelo por el fallecimiento de Carlos Cruz-diez', 'Otros', 'tod ala descripcon del proyecto1', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:10', '2020-10-22 04:25:02'),
('12', 'Acuerdo de duelo por el fallecimiento de Carlos Cruz-diez', 'Otros', 'tod ala descripcon del proyecto1', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:10', '2020-10-22 04:25:02'),
('13', 'Acuerdo de duelo por el fallecimiento de Carlos Cruz-diez', 'Otros', 'tod ala descripcon del proyecto1', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:10', '2020-10-22 04:25:02'),
('14', 'Acuerdo de duelo por el fallecimiento de Carlos Cruz-diez', 'Otros', 'tod ala descripcon del proyecto1', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:10', '2020-10-22 04:25:02'),
('15', 'Acuerdo de duelo por el fallecimiento de Carlos Cruz-diez', 'Otros', 'tod ala descripcon del proyecto1', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:10', '2020-10-22 04:25:02'),
('16', 'Acuerdo de duelo por el fallecimiento de Carlos Cruz-diez', 'Otros', 'tod ala descripcon del proyecto1', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:10', '2020-10-22 04:25:02'),
('17', 'Acuerdo de duelo por el fallecimiento de Carlos Cruz-diez', 'Otros', 'tod ala descripcon del proyecto1', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:10', '2020-10-22 04:25:02'),
('18', 'Acuerdo de duelo por el fallecimiento de Carlos Cruz-diez', 'Otros', 'tod ala descripcon del proyecto1', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:10', '2020-10-22 04:25:02'),
('19', 'Acuerdo de duelo por el fallecimiento de Carlos Cruz-diez', 'Otros', 'tod ala descripcon del proyecto1', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:10', '2020-10-22 04:25:02'),
('2', 'Ley Aprobatoria de adhesión al \"Tratado Interamericano de AsistenciaReciproca\" (TIAR)', 'Acuerdo', 'tod ala descripcon del proyecto2', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:11', '2020-10-22 04:25:07'),
('20', 'Acuerdo de duelo por el fallecimiento de Carlos Cruz-diez', 'Otros', 'tod ala descripcon del proyecto1', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:10', '2020-10-22 04:25:02'),
('21', 'Acuerdo de duelo por el fallecimiento de Carlos Cruz-diez', 'Otros', 'tod ala descripcon del proyecto1', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:10', '2020-10-22 04:25:02'),
('22', 'Acuerdo de duelo por el fallecimiento de Carlos Cruz-diez', 'Otros', 'tod ala descripcon del proyecto1', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:10', '2020-10-22 04:25:02'),
('23', 'Acuerdo de duelo por el fallecimiento de Carlos Cruz-diez', 'Otros', 'tod ala descripcon del proyecto1', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:10', '2020-10-22 04:25:02'),
('3', 'Acuerdo sobre las escases de combustible en Venezuela', 'Acuerdos', 'tod ala descripcon del proyecto3', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:12', '2020-10-22 04:24:51'),
('4', 'Acuerdo de duelo por el fallecimiento de Carlos Cruz-diez', 'Otros', 'tod ala descripcon del proyecto1', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:10', '2020-10-22 04:25:02'),
('5', 'Acuerdo de duelo por el fallecimiento de Carlos Cruz-diez', 'Otros', 'tod ala descripcon del proyecto1', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:10', '2020-10-22 04:25:02'),
('6', 'Acuerdo de duelo por el fallecimiento de Carlos Cruz-diez', 'Otros', 'tod ala descripcon del proyecto1', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:10', '2020-10-22 04:25:02'),
('7', 'Acuerdo de duelo por el fallecimiento de Carlos Cruz-diez', 'Otros', 'tod ala descripcon del proyecto1', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:10', '2020-10-22 04:25:02'),
('8', 'Acuerdo de duelo por el fallecimiento de Carlos Cruz-diez', 'Otros', 'tod ala descripcon del proyecto1', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:10', '2020-10-22 04:25:02'),
('9', 'Acuerdo de duelo por el fallecimiento de Carlos Cruz-diez', 'Otros', 'tod ala descripcon del proyecto1', 1, 'https://www.google.com/', 'https://openthread.google.cn/images/ot-contrib-google.png', '', '', '2020-10-22 03:55:10', '2020-10-22 04:25:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `redes`
--

CREATE TABLE `redes` (
  `id` varchar(255) NOT NULL,
  `idDiputado` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `cuenta` varchar(255) NOT NULL,
  `disponible` tinyint(1) NOT NULL,
  `createdUsu` varchar(255) NOT NULL,
  `updatedUsu` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `redes`
--

INSERT INTO `redes` (`id`, `idDiputado`, `tipo`, `cuenta`, `disponible`, `createdUsu`, `updatedUsu`, `createdAt`, `updatedAt`) VALUES
('1', '1', '1', 'faceBook', 1, '', '', '2020-10-20 05:20:20', '2020-10-20 05:20:20'),
('2', '1', '2', 'Instragram', 1, '', '', '2020-10-20 05:20:20', '2020-10-20 05:23:29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo`
--

CREATE TABLE `tipo` (
  `id` varchar(255) NOT NULL,
  `idPadre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `disponible` tinyint(1) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdUsu` varchar(255) NOT NULL,
  `updatedUsu` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo`
--

INSERT INTO `tipo` (`id`, `idPadre`, `descripcion`, `disponible`, `createdAt`, `updatedAt`, `createdUsu`, `updatedUsu`) VALUES
('1', '0', 'COMISIONES', 1, '2020-10-19 00:52:36', '2020-10-19 01:00:47', '', ''),
('100', '1', 'Comisiones Permanentes', 1, '2020-10-19 00:53:16', '2020-10-19 01:00:34', '', ''),
('101', '1', 'Comisiones Extraordinarias', 1, '2020-10-19 00:53:16', '2020-10-19 01:00:28', '', ''),
('2', '0', 'CARGOS', 1, '2020-10-19 00:52:36', '2020-10-19 01:00:50', '', ''),
('200', '2', 'cargo 1', 1, '2020-10-19 00:53:16', '2020-10-19 00:53:16', '', ''),
('201', '2', 'cargo 2', 1, '2020-10-19 00:53:16', '2020-10-19 00:53:16', '', ''),
('202', '2', 'cargo 3', 1, '2020-10-19 00:53:16', '2020-10-19 00:53:16', '', ''),
('3', '0', 'VOTOS', 1, '2020-10-19 00:53:16', '2020-10-19 00:53:16', '', ''),
('300', '3', 'De acuerdo', 1, '2020-10-19 00:53:16', '2020-10-19 00:53:16', '', ''),
('301', '3', 'Desacuerdo', 1, '2020-10-19 00:53:16', '2020-10-19 00:53:16', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `clave` varchar(255) NOT NULL,
  `nacimiento` date NOT NULL,
  `idEstado` varchar(255) NOT NULL,
  `disponible` tinyint(1) NOT NULL,
  `createdUsu` varchar(255) NOT NULL,
  `updatedUsu` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `apellido`, `email`, `telefono`, `clave`, `nacimiento`, `idEstado`, `disponible`, `createdUsu`, `updatedUsu`, `createdAt`, `updatedAt`) VALUES
('1', 'jose', 'pirela', 'jjpirela93@gmail.com', '123', '123', '2020-10-12', '1', 1, '', '', '2020-10-08 06:01:53', '2020-10-08 06:01:53'),
('3', '3', '3', '3', '3', '3', '2020-10-06', '3', 3, '', '', '2020-10-20 16:51:38', '2020-10-20 16:51:38'),
('6082a4a2-e90f-4ada-b83f-20e1d300ff9b', 'hola', 'adios', 'prieba@gmail.com', '123', '00001', '0000-00-00', '1', 1, '', '', '2020-10-27 03:34:53', '2020-10-27 03:53:19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuariodiputado`
--

CREATE TABLE `usuariodiputado` (
  `id` int(11) NOT NULL,
  `idUser` varchar(255) NOT NULL,
  `idDiputado` varchar(255) NOT NULL,
  `createdUsu` varchar(255) NOT NULL,
  `updatedUsu` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarionoticia`
--

CREATE TABLE `usuarionoticia` (
  `id` int(11) NOT NULL,
  `idUsuario` varchar(255) NOT NULL,
  `idNoticia` varchar(255) NOT NULL,
  `createdUsu` varchar(255) NOT NULL,
  `updatedUsu` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `votos`
--

CREATE TABLE `votos` (
  `id` varchar(255) NOT NULL,
  `idDiputado` varchar(255) NOT NULL,
  `idProyecto` varchar(255) NOT NULL,
  `voto` varchar(255) NOT NULL,
  `createdUsu` varchar(255) NOT NULL,
  `updatedUsu` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `votos`
--

INSERT INTO `votos` (`id`, `idDiputado`, `idProyecto`, `voto`, `createdUsu`, `updatedUsu`, `createdAt`, `updatedAt`) VALUES
('1', '1', '1', '1', '', '', '2020-10-27 01:50:31', '2020-10-27 01:50:31'),
('2', '1', '1', '2', '', '', '2020-10-27 01:50:46', '2020-10-27 01:50:46');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comisiones`
--
ALTER TABLE `comisiones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tipo` (`tipo`);

--
-- Indices de la tabla `diputado`
--
ALTER TABLE `diputado`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `identificacion` (`identificacion`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `identificacion_2` (`identificacion`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `gaceta`
--
ALTER TABLE `gaceta`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `noticia`
--
ALTER TABLE `noticia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `partido`
--
ALTER TABLE `partido`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `identificacion` (`identificacion`);

--
-- Indices de la tabla `personacargo`
--
ALTER TABLE `personacargo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPersona` (`idPersona`),
  ADD KEY `idCargo` (`idCargo`);

--
-- Indices de la tabla `personacomision`
--
ALTER TABLE `personacomision`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPersona` (`idPersona`),
  ADD KEY `idcomision` (`idComision`);

--
-- Indices de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `redes`
--
ALTER TABLE `redes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idDiputado` (`idDiputado`);

--
-- Indices de la tabla `tipo`
--
ALTER TABLE `tipo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `usuariodiputado`
--
ALTER TABLE `usuariodiputado`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarionoticia`
--
ALTER TABLE `usuarionoticia`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
