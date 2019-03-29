-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 08, 2019 at 07:58 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `petition`
--

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `sub_id` varchar(7) NOT NULL,
  `sub_name` text NOT NULL,
  `main_pro` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`sub_id`, `sub_name`, `main_pro`) VALUES
('GEH0101', 'สุนทรียภาพกับชีวิต', ''),
('GEH0102', 'สังคมไทยในบริบทโลก', ''),
('GEH0201', 'การพัฒนาตน', ''),
('GEH0202', 'ความจริงของชีวิต', ''),
('GEH0204', 'ความเป็นพลเมือง', ''),
('GEH0205', 'ทักษะชีวิตเพื่อความเป็นมนุษย์ที่สมบูรณ์', ''),
('GEL0101', 'การใช้ภาษาไทย', ''),
('GEL0102', 'ภาษาอังกฤษเพื่อการสื่อสารและการสืบค้น', ''),
('GEL0103', 'ภาษาอังกฤษเพื่อการสื่อสารและทักษะการเรียน', ''),
('GEL0201', 'ภาษาไทยเชิงวิชาการ', ''),
('GEL0203', 'ภาษาในกลุ่มประชาคมอาเซียน (ภาษาลาว)', ''),
('GES0101', 'เทคโนโลยีสารสนเทศเพื่อการสื่อสารและการเรียนรู้', ''),
('GES0102', 'วิทยาศาสตร์และเทคโนโลยีกับคุณภาพชีวิต', ''),
('GES0203', 'ความรู้เท่าทันสารสนเทศ', ''),
('GES0205', 'นันทนาการเพื่อคุณภาพชีวิต', ''),
('GES0206', 'ชีวิตและสุขภาพ', ''),
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
