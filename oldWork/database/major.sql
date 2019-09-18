-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2019 at 05:49 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.4

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
-- Table structure for table `major`
--

CREATE TABLE `major` (
  `mar_id` int(5) NOT NULL,
  `fac_id` int(5) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `major`
--

INSERT INTO `major` (`mar_id`, `fac_id`, `name`) VALUES
(1000, 1000, 'สาขาวิชานวัตกรรมและเทคโนโลยีการศึกษา'),
(1001, 1000, 'สาขาวิชาการศึกษาปฐมวัย'),
(1002, 1000, 'สาขาวิชาภาษาไทย'),
(1003, 1000, 'สาขาวิชาสังคมศึกษา'),
(1004, 1000, 'สาขาวิชาคณิตศาสตร์'),
(1005, 1000, 'สาขาวิชาภาษาอังกฤษ'),
(1006, 1000, 'สาขาวิชาวิทยาศาสตร์ทั่วไป'),
(1007, 1001, 'สาขาวิชาวิศวกรรมคอมพิวเตอร์'),
(1008, 1001, 'สาขาวิชาการจัดการอุตสาหกรรม'),
(1009, 1001, 'สาขาวิชาออกแบบผลิตภัณฑ์อุตสาหกรรม\r\n'),
(1010, 1001, 'สาขาวิชาออกแบบกราฟิกและมัลติมีเดีย\r\n'),
(1011, 1001, 'สาขาวิชามาตรวิทยาและระบบคุณภาพ\r\n'),
(1012, 1001, 'สาขาวิชาการออกแบบตกแต่งภายในและนิทรรศการ\r\n'),
(1013, 1001, 'สาขาวิชาออกแบบสิ่งพิมพ์และบรรจุภัณฑ์\r\n'),
(1014, 1001, 'สาขาวิชาเทคโนโลยีไฟฟ้าอุตสาหกรรม\r\n'),
(1015, 1001, 'สาขาวิชาเทคโนโลยีอิเล็กทรอนิกส์\r\n'),
(1016, 1001, 'สาขาวิชาเทคโนโลยีความปลอดภัยและอาชีวอนามัย\r\n'),
(1017, 1001, 'สาขาวิชาเทคโนโลยีคอมพิวเตอร์เพื่องานสถาปัตยกรรม\r\n'),
(1018, 1001, 'สาขาวิชาการบริหารทรัพยากรอาคาร\r\n'),
(1019, 1001, 'สาขาวิชาเทคโนโลยีการพิมพ์\r\n'),
(1020, 1002, 'สาขาวิชาภาษาไทย\r\n'),
(1021, 1002, 'สาขาวิชาภาษาอังกฤษ\r\n'),
(1022, 1002, 'สาขาวิชาภาษาอังกฤษธุรกิจ\r\n'),
(1023, 1002, 'สาขาวิชาภาษาจีน\r\n'),
(1024, 1002, 'สาขาวิชาภาษาญี่ปุ่น\r\n'),
(1025, 1002, 'สาขาวิชาการจัดการอุตสาหกรรมท่องเที่ยวและบริการ\r\n'),
(1026, 1002, 'สาขาวิชาการจัดการโรงแรมและธุรกิจที่พัก\r\n'),
(1027, 1002, 'กลุ่มสาขาวิชาการจัดการสังคมและนวัตกรรม\r\n'),
(1028, 1002, 'สาขาวิชาภูมิศาสตร์และภูมิสารสนเทศ\r\n'),
(1029, 1002, 'สาขาวิชานิติศาสตร์\r\n'),
(1030, 1002, 'กลุ่มสาขาวิชารัฐประศาสนศาสตร์\r\n'),
(1031, 1003, 'สาขาการบัญชี\r\n'),
(1032, 1003, 'สาขาวิชาเศรษฐศาสตร์ธุรกิจ\r\n'),
(1033, 1003, 'สาขาวิชาการบริหารทรัพยากรณ์มนุษย์\r\n'),
(1034, 1003, 'สาขาวิชาคอมพิวเตอร์ธุรกิจ\r\n'),
(1035, 1003, 'สาขาวิชาการเงินการธนาคาร\r\n'),
(1036, 1003, 'สาขาวิชาการประกอบการธุรกิจ\r\n'),
(1037, 1003, 'สาขาวิชาการตลาด\r\n'),
(1038, 1003, 'สาขาวิชาการจัดการธุรกิจบริการ\r\n'),
(1039, 1003, 'สาขาวิชาธุรกิจระหว่างประเทศ\r\n'),
(1040, 1003, 'สาขาวิชาวารสารสนเทศ\r\n'),
(1041, 1003, 'สาขาวิชาประชาสัมพันธ์และการสื่อสารองค์กร\r\n'),
(1042, 1003, 'สาขาวิชาการโฆษณาและสื่อสารการตลาด\r\n'),
(1043, 1003, 'สาขาวิทยุโทรทัศน์\r\n'),
(1044, 1003, 'สาขาวิชาวิทยุกระจายเสียง\r\n'),
(1045, 1003, 'สาขาวิชาการภาพยนตร์ และการสื่อสารการแสดง\r\n'),
(1046, 1003, 'สาขาวิชาการสื่อสารผ่านสื่อใหม่\r\n'),
(1047, 1003, 'สาขาวิชาภาพเคลื่อนใหวและสื่อผสม\r\n'),
(1048, 1004, 'สาขาวิชาวิทยาการคอมพิวเตอร์\r\n'),
(1049, 1004, 'สาขาวิชาคหกรรม\r\n'),
(1050, 1004, 'สาขาวิชาจุลชีววิทยาอุตสาหกรรม\r\n'),
(1051, 1004, 'สาขาวิชาชีววิทยา\r\n'),
(1052, 1004, 'สาขาวิชาฟิสิกส์ประยุกต์\r\n'),
(1053, 1004, 'สาขาวิชาอุตสาหกรรมอาหารและบริการ\r\n'),
(1054, 1004, 'สาขาวิชาคณิตศาสตร์สารสนเทศ\r\n'),
(1055, 1004, 'สาขาวิชาเคมี\r\n'),
(1056, 1004, 'สาขาวิชาเทคโนโลยีชีวภาพ\r\n'),
(1057, 1004, 'สาขาวิชาเทคโนโลยีสารสนเทศ\r\n'),
(1058, 1004, 'สาขาวิชาวิทย์และเทคโนโลยีการอาหาร\r\n'),
(1059, 1004, 'สาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม\r\n'),
(1060, 1004, 'สาขาวิชาสถิติประยุกต์\r\n'),
(1061, 1005, 'สาขาวิชาออกแบบเครื่องแต่งกาย\r\n'),
(1062, 1005, 'สาขาวิชาออกแบบผลิตภัณฑ์หัตกรรม\r\n'),
(1063, 1005, 'สาขาวิชาออกแบบนิเทศศิลป์\r\n'),
(1064, 1005, 'สาขาวิชาจิตกรรม\r\n'),
(1065, 1005, 'สาขาวิชานาฏศิลป์ไทย\r\n'),
(1066, 1005, 'สาขาวิชาศิลปะการละคร\r\n'),
(1067, 1005, 'สาขาวิชาคนตรี\r\n'),
(1068, 1006, 'สาขาวิชาพยาบาลศาสตร์\r\n'),
(1069, 1006, 'สาขาวิชาผู้ช่วยพยาบาลศาสตร์\r\n'),
(1070, 1007, 'สาขาวิชาการจัดการโรงแรมและท่องเที่ยว\r\n'),
(1071, 1007, 'สาขาวิชาบริหารธุรกิจระหว่างประเทศ\r\n'),
(1072, 1007, 'สาขาวิชาธุรกิจการบิน\r\n'),
(1073, 1007, 'สาขาวิชาธุรกิจภัตตาคารและที่พัก\r\n'),
(1074, 1007, 'สาขาวิชาธุรกิจโรงแรมและภัตตาคาร\r\n'),
(1075, 1007, 'สาขาวิชาอุตสาหกรรมท่องเที่ยว\r\n'),
(1076, 1008, 'สาขาวิชาการจัดการคุณภาพ\r\n'),
(1077, 1008, 'สาขาวิชาการจัดการระบบสารสนเทศเพื่อธุรกิจ\r\n'),
(1078, 1008, 'สาขาวิชาเทคโนโลยีสารสนเทศและการสื่อสารเพื่อการตลาด\r\n'),
(1079, 1008, 'สาขาวิชารัฐศาสตร์\r\n'),
(1080, 1008, 'สาขารัฐประศาสนศาสตร์ โครงการความร่วมมือทางวิชาการกับกองทัพบก\r\n'),
(1081, 1009, 'สาขาวิชาการสร้างภาพยนตร์\r\n'),
(1082, 1009, 'สาขาวิชาการสร้างสรรค์และสื่อดิจิทัล\r\n'),
(1083, 1010, 'สาขาวิชาการแพทย์แผนไทยประยุกต์\r\n'),
(1084, 1010, 'สาขาวิชาวิทยาศาสตร์สุขภาพ (ดูแลเด็กเล็กและผู้สูงอายุ)\r\n'),
(1085, 1010, 'สาขาวิชาวิทยาศาสตร์สุขภาพและความงาม\r\n'),
(1086, 1010, 'สาขาวิชาวิทยาศาสตร์การกีฬาและสุขภาพ\r\n'),
(1087, 1010, 'สาขาวิชาสาธารณสุขศาสตร์\r\n'),
(1088, 1011, 'สาขาวิชาการจัดการโลจิสติกส์\r\n'),
(1089, 1011, 'สาขาวิชาธุรกิจพาณิชยนาวี\r\n'),
(1090, 1011, 'สาขาวิชาการจัดการธุรกิจค้าปลีก\r\n'),
(1091, 1011, 'สาขาวิชาการบริหารจัดการเครือข่ายร้านอาหาร\r\n'),
(1092, 1011, 'Global Supply Chain Management (English Program)'),
(1093, 1011, 'สาขาการจัดการการขนส่ง\r\n'),
(1094, 1012, 'สาขาวิชาสถาปัตยกรรม\r\n'),
(1095, 1012, 'สาขาวิชาการบริหารงานก่อสร้าง\r\n');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `major`
--
ALTER TABLE `major`
  ADD PRIMARY KEY (`mar_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `major`
--
ALTER TABLE `major`
  MODIFY `mar_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1096;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;