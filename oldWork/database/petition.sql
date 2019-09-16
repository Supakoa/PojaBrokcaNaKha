-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2019 at 10:32 AM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

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
-- Table structure for table `fac`
--

CREATE TABLE `fac` (
  `fac_id` int(5) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `fac`
--

INSERT INTO `fac` (`fac_id`, `name`) VALUES
(1000, 'ครุศาสตร์'),
(1001, 'เทคโนโลยีอุตสาหกรรม'),
(1002, 'มนุษยศาสตรและสังคมศาสตร์'),
(1003, 'คณะวิทยาการจัดการ'),
(1004, 'คณะวิทยาศาสตร์และเทคโนโลยี'),
(1005, 'คณะศิลปกรรมศาสตร์'),
(1006, 'วิทยาลัยพยาบาลและสุขภาพ'),
(1007, 'วิทยาลัยนานาชาติ'),
(1008, 'วิทยาลัยนวัตกรรมและการจัดการ'),
(1009, 'วิทยาลัยการภาพยนตร์ศิลปะการแสดงและสื่อใหม่'),
(1010, 'วิทยาลัยสหเวชศาสตร์'),
(1011, 'วิทยาลัยโลจิสติกส์และซัพพลายเชน'),
(1012, 'วิทยาลัยสถาปัตยกรรมศาสตร์');

-- --------------------------------------------------------

--
-- Table structure for table `form`
--

CREATE TABLE `form` (
  `form_id` int(5) NOT NULL,
  `name` text NOT NULL,
  `step_all` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `form`
--

INSERT INTO `form` (`form_id`, `name`, `step_all`) VALUES
(1, 'แบบคำร้องขอตรวจสอบผลการเรียน', 2),
(2, 'แบบฟอร์มแจ้งสาเหตุการขาดสอบรายวิชาศึกษาทั่วไป', 0),
(3, 'แบบคำร้องขอแก้ไขผลการเรียน', 3),
(4, 'แบบคำร้องขอสอบภายหลัง', 0),
(5, 'แบบใบลาป่วย ลากิจ', 1),
(6, 'ใบคำร้องขอรหัสผ่านเข้าระบบ', 2),
(7, 'แบบคำร้องทั่วไป', 0),
(8, 'ติดต่อเจ้าหน้าที่', 1);

-- --------------------------------------------------------

--
-- Table structure for table `form_way`
--

CREATE TABLE `form_way` (
  `form_way_id` int(11) NOT NULL,
  `form_id` int(5) NOT NULL,
  `group_id` int(5) NOT NULL,
  `step` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `form_way`
--

INSERT INTO `form_way` (`form_way_id`, `form_id`, `group_id`, `step`) VALUES
(10054, 1, 72, '1'),
(10055, 1, 73, '2'),
(10056, 8, 74, '1');

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `group_id` int(5) NOT NULL,
  `name` text NOT NULL,
  `type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`group_id`, `name`, `type`) VALUES
(72, 'ผู้ช่วยประจำวิชา', '2'),
(73, 'อาจารย์ประจำวิชา', '2'),
(74, 'ผู้ตอบคำถามถึงผู้ดูแลระบบ', '1'),
(75, 'asd', '1');

-- --------------------------------------------------------

--
-- Table structure for table `groups_user`
--

CREATE TABLE `groups_user` (
  `groups_user_id` int(5) NOT NULL,
  `group_id` int(5) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `sub_id` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `groups_user`
--

INSERT INTO `groups_user` (`groups_user_id`, `group_id`, `user_id`, `sub_id`) VALUES
(88, 72, 'AJ01', 'GEH0201'),
(89, 73, 'AJ01', 'GEH0102'),
(91, 72, 'AJ02', 'GEH0102'),
(92, 73, 'AJ02', 'GEH0201'),
(94, 72, 'AJ01', 'GEH0202'),
(95, 72, 'AJ02', 'GEH0204'),
(96, 74, 'AJ01', 'temp'),
(97, 74, 'AJ02', 'temp');

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

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `news_id` int(11) NOT NULL,
  `news_url` text NOT NULL,
  `news_img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`news_id`, `news_url`, `news_img`) VALUES
(10038, 'asd2', 'cdd58ae684bc6f02b2de5671c8ec6d37.jpg'),
(10039, 'asd2', '9d4a57e1820594c95c4a9b6b6e51fd59.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `paper`
--

CREATE TABLE `paper` (
  `paper_id` varchar(10) NOT NULL,
  `owner_id` varchar(20) NOT NULL,
  `form_id` text NOT NULL,
  `paper_detail` text NOT NULL,
  `step_now` text NOT NULL,
  `status` int(2) NOT NULL,
  `note` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `paper_user`
--

CREATE TABLE `paper_user` (
  `paper_user_id` int(11) NOT NULL,
  `paper_id` varchar(10) DEFAULT NULL,
  `user_id` varchar(20) DEFAULT NULL,
  `status` int(2) DEFAULT '6',
  `comment` text,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_edit` timestamp NULL DEFAULT NULL,
  `return_file` text,
  `step` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `role_id`
--

CREATE TABLE `role_id` (
  `id` int(1) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `role_id`
--

INSERT INTO `role_id` (`id`, `name`) VALUES
(1, 'นักศึกษา'),
(2, 'ผู้มีอำนามลงนาม'),
(3, 'ผู้ดูแลระบบ');

-- --------------------------------------------------------

--
-- Table structure for table `signature`
--

CREATE TABLE `signature` (
  `sig_id` int(10) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `file_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `status_id`
--

CREATE TABLE `status_id` (
  `id` int(2) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `status_id`
--

INSERT INTO `status_id` (`id`, `name`) VALUES
(0, 'ไม่ผ่าน'),
(1, 'ผ่าน'),
(2, 'แก้ไข'),
(3, 'กำลังดำเนินการ'),
(4, 'อนุมัติ'),
(5, 'ไม่อนุมัติ'),
(6, 'ยังไม่ได้ทำการตรวจสอบ');

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `sub_id` varchar(7) NOT NULL,
  `sub_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`sub_id`, `sub_name`) VALUES
('GEH0102', 'สังคมไทยในบริบทโลก'),
('GEH0201', 'การพัฒนาตน'),
('GEH0202', 'ความจริงของชีวิต'),
('GEH0204', 'ความเป็นพลเมือง'),
('GEH0205', 'ทักษะชีวิตเพื่อความเป็นมนุษย์ที่สมบูรณ์'),
('GEL0101', 'การใช้ภาษาไทย'),
('GEL0102', 'ภาษาอังกฤษเพื่อการสื่อสารและการสืบค้น'),
('GEL0103', 'ภาษาอังกฤษเพื่อการสื่อสารและทักษะการเรียน'),
('GEL0201', 'ภาษาไทยเชิงวิชาการ'),
('GEL0203', 'ภาษาในกลุ่มประชาคมอาเซียน (ภาษาลาว)'),
('GES0101', 'เทคโนโลยีสารสนเทศเพื่อการสื่อสารและการเรียนรู้'),
('GES0102', 'วิทยาศาสตร์และเทคโนโลยีกับคุณภาพชีวิต'),
('GES0203', 'ความรู้เท่าทันสารสนเทศ'),
('GES0206', 'ชีวิตและสุขภาพ');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `title` text,
  `name` text,
  `tel` text,
  `email` text,
  `role` int(1) DEFAULT NULL,
  `status` text,
  `major_id` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `password`, `title`, `name`, `tel`, `email`, `role`, `status`, `major_id`) VALUES
('321654', 'ppzx00', 'นาย', 'แอด มิน', '0898795847', 'admin@eiei.com', 3, 'สูงสุด', NULL),
('59122519010', '123456', 'นาย', 'พีพี แช่ลี้', '085414541', 'pp@hotmail.com', 1, NULL, 1020),
('59122519012', '123456', 'นาย', 'ตะวัน เข็มทอง', '0859575958', 'singcomnet@hotmail.com', 1, NULL, 1008),
('AJ01', '123456', 'อาจารย์', 'ตรวจ ละเอียดนะ', '0856252414', 'aj01@eiei.com', 2, 'รองผู้อำนวยการ', NULL),
('AJ02', '123456', 'อาจารย์', 'ตรวจ ประจำ', '052414254', 'jj@eiei.com', 2, 'อาจารย์', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fac`
--
ALTER TABLE `fac`
  ADD PRIMARY KEY (`fac_id`);

--
-- Indexes for table `form`
--
ALTER TABLE `form`
  ADD PRIMARY KEY (`form_id`);

--
-- Indexes for table `form_way`
--
ALTER TABLE `form_way`
  ADD PRIMARY KEY (`form_way_id`),
  ADD KEY `form_id` (`form_id`),
  ADD KEY `group_id` (`group_id`);

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`group_id`);

--
-- Indexes for table `groups_user`
--
ALTER TABLE `groups_user`
  ADD PRIMARY KEY (`groups_user_id`),
  ADD KEY `group_id` (`group_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `major`
--
ALTER TABLE `major`
  ADD PRIMARY KEY (`mar_id`),
  ADD KEY `fac_id` (`fac_id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `paper`
--
ALTER TABLE `paper`
  ADD PRIMARY KEY (`paper_id`),
  ADD KEY `owner_id` (`owner_id`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `paper_user`
--
ALTER TABLE `paper_user`
  ADD PRIMARY KEY (`paper_user_id`),
  ADD KEY `paper_id` (`paper_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `role_id`
--
ALTER TABLE `role_id`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `signature`
--
ALTER TABLE `signature`
  ADD PRIMARY KEY (`sig_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `status_id`
--
ALTER TABLE `status_id`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`sub_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `role` (`role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fac`
--
ALTER TABLE `fac`
  MODIFY `fac_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1013;

--
-- AUTO_INCREMENT for table `form`
--
ALTER TABLE `form`
  MODIFY `form_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `form_way`
--
ALTER TABLE `form_way`
  MODIFY `form_way_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10057;

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `group_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `groups_user`
--
ALTER TABLE `groups_user`
  MODIFY `groups_user_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT for table `major`
--
ALTER TABLE `major`
  MODIFY `mar_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1096;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10040;

--
-- AUTO_INCREMENT for table `paper_user`
--
ALTER TABLE `paper_user`
  MODIFY `paper_user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `signature`
--
ALTER TABLE `signature`
  MODIFY `sig_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `form_way`
--
ALTER TABLE `form_way`
  ADD CONSTRAINT `form_way_ibfk_1` FOREIGN KEY (`form_id`) REFERENCES `form` (`form_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `form_way_ibfk_2` FOREIGN KEY (`group_id`) REFERENCES `groups` (`group_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `groups_user`
--
ALTER TABLE `groups_user`
  ADD CONSTRAINT `groups_user_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`group_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `groups_user_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `major`
--
ALTER TABLE `major`
  ADD CONSTRAINT `major_ibfk_1` FOREIGN KEY (`fac_id`) REFERENCES `fac` (`fac_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `paper`
--
ALTER TABLE `paper`
  ADD CONSTRAINT `paper_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `paper_ibfk_2` FOREIGN KEY (`status`) REFERENCES `status_id` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `paper_user`
--
ALTER TABLE `paper_user`
  ADD CONSTRAINT `paper_user_ibfk_1` FOREIGN KEY (`paper_id`) REFERENCES `paper` (`paper_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `paper_user_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `paper_user_ibfk_3` FOREIGN KEY (`status`) REFERENCES `status_id` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `signature`
--
ALTER TABLE `signature`
  ADD CONSTRAINT `signature_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role`) REFERENCES `role_id` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
