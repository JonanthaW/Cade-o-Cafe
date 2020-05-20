-- phpMyAdmin SQL Dump
-- version 4.0.6
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 26, 2013 at 07:17 AM
-- Server version: 5.5.14
-- PHP Version: 5.5.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `WD43`
--

-- --------------------------------------------------------

--
-- Table structure for table `produtos`
--

CREATE TABLE IF NOT EXISTS `produtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `preco` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `descricao` text COLLATE utf8_unicode_ci,
  `data` date DEFAULT NULL,
  `vendas` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=18 ;

--
-- Dumping data for table `produtos`
--

INSERT INTO `produtos` (`id`, `nome`, `preco`, `descricao`, `data`, `vendas`) VALUES
(1, 'Fuzzy Cardigan', 'R$ 129,00', 'Esse &eacute; o melhor casaco de Cardig&atilde; que voc&ecirc; j&aacute; viu. Excelente material italiano com estampa desenhada pelos artes&atilde;os da comunidade de Krotor nas ilhas gregas. Compre j&aacute; e receba hoje mesmo pela nossa entrega ajato.', '2013-09-01', 5),
(2, 'Camiseta Ecko Caveira Bad to The Bone', 'R$ 48,95', 'Camiseta confort&aacute;vel ideal para eventos casuais!<br><br>\n\nCamiseta manga curta, gola redonda. Possui estampa de Caveira e descritivo frontal e lisa nas costas.', '2013-10-01', 90),
(3, 'Cardigan Thelure Basic', 'R$ 296,00', 'Cardigan em &oacute;timo caimento. Ideal fazer sobreposi&ccedil;&atilde;o quando a temperatura cair um pouco.\n<br><br>\nMedidas Modelo:<br>\nAltura: 1,76cm<br>\nPeso: 55Kg<br>\nCintura: 69 cm<br>\nBusto: 89 cm<br>\nQuadril: 93 cm<br>\nCal&ccedil;ado: 38<br>\nManequim: 38<br>\nModelo veste: P.', '2013-09-29', 12),
(4, 'Casaco Winter', 'R$ 699,00', 'Jaqueta confeccionada em couro ecol&oacute;gico, em tintura vermelha, abotoamento na gola. Fechamento em z&iacute;per. Ideal para compor looks contempor&acirc;neos casuais.\n', '2013-09-20', 3),
(5, 'Sport Top', 'R$ 89,00', 'Camisa em Algod&atilde;o estampada ideal para uma mulher cl&aacute;ssica, manga longa com abotoamento, fechamento frontal em bot&otilde;es, bolso frontal, barras arredondadas.', '2013-09-27', 45),
(6, 'Top Basic', 'R$ 45,00', 'Blusa multicolorida com decote em V, a manga longa faz dela uma pe&ccedil;a perfeita para uma ocasi&atilde;o de trabalho. As combina&ccedil;&otilde;es de cores d&atilde;o um toque atual a pe&ccedil;a.', '2013-09-01', 178),
(7, 'Camiseta Gwol', 'R$ 125,00', 'Camiseta em modelagem reta, mangas curtas e decote canoa. Possui bordados de fios metalizados nos ombros com tem&aacute;tica militar e bras&atilde;o bordado estilizado com canutilhos, mi&ccedil;angas e strass na altura do busto. Ideal para compor looks estilosos e despojados.', '2013-09-01', 84),
(8, 'Camiseta Tiup', 'R$ 129,00', 'Regata b&aacute;sica em seda. Combina&ccedil;&atilde;o perfeita com cal&ccedil;as jeans, shorts ou saias. Modelagem evas&ecirc;. Combine com acess&oacute;rios, como colares e pulseiras.', '2013-09-03', 123),
(9, 'Camisa Squares', 'R$ 199,00', 'Camisa em tecido mega confort&aacute;vel. Gola fechada esporte, abotoamento frontal com tira de vista. Mangas compridas com abotoamento duplo. Estampa tropical. Caimento perfeito com cal&ccedil;as jeans.', '2013-09-18', 78),
(10, 'Top in Slub', 'R$ 118,00', 'Esse &eacute; o melhor casaco de Cardig&atilde; que voc&ecirc; j&aacute; viu. Excelente material italiano com estampa desenhada pelos artes&atilde;os da comunidade de Krotor nas ilhas gregas. Compre j&aacute; e receba hoje mesmo pela nossa entrega ajato.', '2013-09-03', 146),
(11, 'Shorts Lez a Lez Towel', 'R$ 77,00', 'Sport deluxe &eacute; a tend&ecirc;ncia quent&iacute;ssima deste ver&atilde;o, as roupas s&atilde;o feitas de tecidos inteligentes, formas articuladas e fits inspirados nos esportes de rua. Shorts com modelagem boxer, tecido com toque atoalhado e cord&otilde;es decorativos com ponteiras de metal. Ideal para compor looks charmosos e aut&ecirc;nticos.\n', '2013-09-02', 345),
(12, 'Camisa Richards Sam', 'R$ 420,00', 'Em 1974 a Richards lan&ccedil;ou no Brasil um novo conceito de roupas, associado a um estilo de vida original, informal e requintado. Qualidade, conforto e exclusividade s&atilde;o compromissos t&atilde;o importantes, a ponto de lan&ccedil;ar doze cole&ccedil;&otilde;es por ano com edi&ccedil;&otilde;es limitadas. Camisa de seda lisa, mangas longas c/ abotoamento nos punhos e ajuste por bot&atilde;o e fechamento frontal por bot&otilde;es. Perfeito para compor looks charmosos e aut&ecirc;nticos.', '2013-09-07', 256),
(13, 'Blusa Lez a Lez Feel Sft I', 'R$ 107,00', 'Blusa manga longa, decote redondo com fechamento em spikes dando estilo Rocker a pe&ccedil;a! Possui detalhe de bolso lateral na altura do peito e manga 3/4.', '2013-09-03', 42),
(14, 'Camisa Lez a Lez Tec Ray Sixty III', 'R$ 269,00', 'Camisa manga longa, gola esporte com fechamento aboto&aacute;vel em spikes. Possui costas com recortes modelagem nadador e barra mullet.', '2013-09-04', 312),
(15, 'Vestido Thelure Alu', 'R$ 598,00', 'Aspecto rom&acirc;ntico, al&ccedil;as finas duplas e mangas com babados que caem nos ombros. Possui bot&otilde;es forrados na parte frontal, el&aacute;stico drapeado na altura do quadril. De perfeito caimento, ideal para usar em passeios informais.', '2013-09-11', 98);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
