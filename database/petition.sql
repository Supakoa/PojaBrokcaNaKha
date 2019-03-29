-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2019 at 05:45 PM
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
(1001, 'คณะเทคโนโลยีอุตสาหกรรม'),
(1002, 'คณะครุศาสตร์'),
(1003, 'คณะศิลปกรรมศาสตร์');

-- --------------------------------------------------------

--
-- Table structure for table `form`
--

CREATE TABLE `form` (
  `form_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `step_all` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `form`
--

INSERT INTO `form` (`form_id`, `name`, `step_all`) VALUES
(1, 'แบบคำร้องขอตรวจสอบผลการเรียน', 0),
(2, 'แบบฟอร์มแจ้งสาเหตุการขาดสอบรายวิชาศึกษาทั่วไป', 0),
(3, 'แบบคำร้องขอแก้ไขผลการเรียน', 0),
(4, 'แบบคำร้องขอสอบภายหลัง', 0),
(5, 'แบบใบลาป่วย ลากิจ', 0),
(6, 'ใบคำร้องขอรหัสผ่านเข้าระบบ', 0),
(7, 'แบบคำร้องทั่วไป', 0),
(8, 'ติดต่อเจ้าหน้าที่', 0);

-- --------------------------------------------------------

--
-- Table structure for table `form_way`
--

CREATE TABLE `form_way` (
  `form_way_id` int(11) NOT NULL,
  `form_id` text NOT NULL,
  `group_id` text NOT NULL,
  `step` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `form_way`
--

INSERT INTO `form_way` (`form_way_id`, `form_id`, `group_id`, `step`) VALUES
(10012, '8', '3', '1'),
(10015, '1', '3', '1'),
(10016, '2', '3', '1'),
(10017, '3', '3', '1'),
(10018, '4', '3', '1');

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
(1, 'ผู้ช่วยประจำวิชา', '2'),
(2, 'ddqw', '2'),
(3, 'แบบที่1', '1');

-- --------------------------------------------------------

--
-- Table structure for table `groups_user`
--

CREATE TABLE `groups_user` (
  `groups_user_id` int(5) NOT NULL,
  `group_id` int(5) NOT NULL,
  `user_id` text NOT NULL,
  `sub_id` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `groups_user`
--

INSERT INTO `groups_user` (`groups_user_id`, `group_id`, `user_id`, `sub_id`) VALUES
(10, 2, '321654', 'GEL0101'),
(12, 2, '321654', 'GEH0202'),
(15, 2, '321654', 'GES0206'),
(26, 2, '321654', 'GEL0203'),
(27, 2, '321654', 'GEH0205'),
(28, 2, '321654', 'GEH0201'),
(29, 1, '321654', 'GES0101'),
(30, 2, '321654', 'GES0205'),
(31, 1, '321654', 'GEL0201'),
(32, 1, '321654', 'GEL0203'),
(33, 1, '321654', 'GES0102'),
(34, 2, '321654', 'GEL0103'),
(40, 1, '321654', 'GES0203'),
(41, 1, '321654', 'GES0205'),
(42, 1, '321654', 'GES0206'),
(43, 2, '321654', 'GEH0204'),
(44, 2, '321654', 'GES0101'),
(45, 2, '321654', 'GEL0102'),
(47, 2, '321654', 'GEH0102'),
(48, 2, '321654', 'GEL0201'),
(49, 2, '321654', 'GES0203'),
(51, 1, '321654', 'GEH0201'),
(55, 1, '321654', 'GEL0101'),
(56, 1, '321654', 'GEL0102'),
(57, 1, '321654', 'GEH0202'),
(60, 1, '321654', 'geh0106'),
(63, 1, '321654', 'GEH0101'),
(64, 1, 'koa', 'GEH0101'),
(65, 3, 'koa', ''),
(66, 3, '321654', ''),
(67, 3, 'koa', 'temp'),
(68, 3, '321654', 'temp'),
(69, 1, 'AJ01', 'GEH0204'),
(71, 3, 'AJ01', 'temp'),
(72, 3, 'AJ02', 'temp');

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
(1001, 1001, 'สาขาวิชาการจัดการอุตสาหกรรม'),
(1002, 1001, 'สาขาวิชาเทคโนโลยีความปลอดภัยและอาชีวอนามัย'),
(1004, 1001, 'สาขาวิชาเทคโนโลยีคอมพิวเตอร์เพื่องานสถาปัตยกรรม\r\n'),
(1005, 1001, 'สาขาวิชาการบริหารทรัพยากรอาคาร'),
(1006, 1001, 'สาขาวิชาออกแบบกราฟิกและมัลติมีเดีย'),
(1007, 1001, 'สาขาวิชาการออกแบบตกแต่งภายในและนิทรรศการ'),
(1008, 1001, 'สาขาวิชาวิศวกรรมคอมพิวเตอร์'),
(1009, 1001, 'สาขาวิชามาตรวิทยาและระบบคุณภาพ'),
(1010, 1001, 'สาขาวิชาเทคโนโลยีไฟฟ้า'),
(1011, 1001, 'สาขาวิชาอุตสาหกรรมการพิมพ์'),
(1012, 1001, 'สาขาวิชาออกแบบผลิตภัณฑ์อุตสาหกรรม'),
(1013, 1002, 'สาขาวิชาการศึกษาปฐมวัย'),
(1014, 1002, 'สาขาวิชาคณิตศาสตร์'),
(1015, 1002, 'สาขาวิชาเทคโนโลยีการศึกษาและคอมพิวเตอร์'),
(1016, 1002, 'สาขาวิชาภาษาไทย'),
(1017, 1002, 'สาขาวิชาภาษาอังกฤษ'),
(1018, 1002, 'สาขาวิชาวิทยาศาสตร์ทั่วไป'),
(1019, 1002, 'สาขาวิชาสังคมศึกษา'),
(1020, 1003, 'สาขาวิชาออกแบบเครื่องแต่งกาย'),
(1021, 1003, 'สาขาวิชาออกแบบผลิตภัณฑ์หัตกรรม'),
(1022, 1003, 'สาขาวิชาออกแบบนิเทศศิลป์'),
(1023, 1003, 'สาขาวิชาจิตกรรม'),
(1024, 1003, 'สาขาวิชานาฏศิลป์ไทย'),
(1025, 1003, 'สาขาวิชาศิลปะการละคร'),
(1026, 1003, 'สาขาวิชาคนตรี');

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
  `owner_id` text NOT NULL,
  `form_id` text NOT NULL,
  `paper_detail` text NOT NULL,
  `step_now` text NOT NULL,
  `status` text NOT NULL,
  `note` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `paper`
--

INSERT INTO `paper` (`paper_id`, `owner_id`, `form_id`, `paper_detail`, `step_now`, `status`, `note`, `timestamp`) VALUES
('422TLMT8WS', '321654', '1', 'GEH0102๛001', '1', '3', '', '2019-03-27 12:57:15'),
('7EO9FJI5US', '59122519012', '1', 'GEH0102๛001', '1', '3', '', '2019-03-29 16:40:23'),
('8ZVTEGJXY3', '321654', '8', 'ติดต่อ๛rt', '1', '4', '', '2019-03-27 12:40:24'),
('BBTG2YGDEG', '59122519012', '2', 'GEH0204๛001๛กลางภาค๛เลื่อนสอบ ๛uplode_file5c9e4a8f0c77f.jpg', '1', '3', '', '2019-03-29 16:40:47'),
('KTDPMMM8KM', '321654', '8', 'ติดต่อ๛rt', '1', '4', '', '2019-03-27 12:35:45');

-- --------------------------------------------------------

--
-- Table structure for table `paper_user`
--

CREATE TABLE `paper_user` (
  `paper_user_id` int(11) NOT NULL,
  `paper_id` text,
  `user_id` text,
  `status` text,
  `comment` text,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `last_edit` timestamp NULL DEFAULT NULL,
  `return_file` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `paper_user`
--

INSERT INTO `paper_user` (`paper_user_id`, `paper_id`, `user_id`, `status`, `comment`, `timestamp`, `last_edit`, `return_file`) VALUES
(28, '8ZVTEGJXY3', '3', NULL, NULL, '2019-03-27 12:40:24', NULL, NULL),
(29, '422TLMT8WS', 'koa', NULL, NULL, '2019-03-27 12:57:15', NULL, NULL),
(30, '422TLMT8WS', '321654', NULL, NULL, '2019-03-27 17:23:24', NULL, NULL),
(31, 'DECT13SO75', '3', NULL, NULL, '2019-03-27 12:57:44', NULL, NULL),
(32, '0BL8QRVXXX', '3', NULL, NULL, '2019-03-27 12:57:51', NULL, NULL),
(33, 'VAYOVT1S53', 'koa', NULL, NULL, '2019-03-27 12:58:15', NULL, NULL),
(34, 'VAYOVT1S53', 'koa', NULL, NULL, '2019-03-27 12:58:15', NULL, NULL),
(35, 'Q6FK89EBWJ', '3', NULL, NULL, '2019-03-27 12:58:40', NULL, NULL),
(36, '1N4BBLAPGO', 'koa', NULL, NULL, '2019-03-27 13:00:59', NULL, NULL),
(37, '1N4BBLAPGO', 'koa', NULL, NULL, '2019-03-27 13:00:59', NULL, NULL),
(38, 'DSS8O017DG', 'koa', NULL, NULL, '2019-03-27 13:01:17', NULL, NULL),
(39, 'DSS8O017DG', 'koa', NULL, NULL, '2019-03-27 13:01:17', NULL, NULL),
(40, 'OEZGG4QH4K', 'koa', NULL, NULL, '2019-03-27 13:01:36', NULL, NULL),
(41, 'OEZGG4QH4K', 'koa', NULL, NULL, '2019-03-27 13:01:36', NULL, NULL),
(42, '794NIS6AWU', 'koa', NULL, NULL, '2019-03-27 13:01:43', NULL, NULL),
(43, '794NIS6AWU', 'koa', NULL, NULL, '2019-03-27 13:01:43', NULL, NULL),
(44, 'VXH4Z1TXA2', 'koa', NULL, NULL, '2019-03-27 13:01:53', NULL, NULL),
(45, 'VXH4Z1TXA2', 'koa', NULL, NULL, '2019-03-27 13:01:53', NULL, NULL),
(46, 'PWDMH3Y388', 'koa', NULL, NULL, '2019-03-27 13:02:54', NULL, NULL),
(47, 'PWDMH3Y388', 'koa', NULL, NULL, '2019-03-27 13:02:54', NULL, NULL),
(48, 'NJHNIHOUR1', 'koa', NULL, NULL, '2019-03-27 13:05:54', NULL, NULL),
(49, 'NJHNIHOUR1', 'koa', NULL, NULL, '2019-03-27 13:05:54', NULL, NULL),
(50, '2OP8OVBVFC', 'koa', NULL, NULL, '2019-03-27 13:07:07', NULL, NULL),
(51, '2OP8OVBVFC', '321654', NULL, NULL, '2019-03-27 13:07:07', NULL, NULL),
(52, '2VXOE5D1I9', 'koa', NULL, NULL, '2019-03-27 13:35:09', NULL, NULL),
(53, '2VXOE5D1I9', '321654', NULL, NULL, '2019-03-27 13:35:09', NULL, NULL),
(54, 'BLZ8EO2TUP', 'koa', NULL, NULL, '2019-03-27 13:35:35', NULL, NULL),
(55, 'BLZ8EO2TUP', '321654', NULL, NULL, '2019-03-27 13:35:35', NULL, NULL),
(56, 'ARS52R1YZP', 'koa', NULL, NULL, '2019-03-27 13:36:12', NULL, NULL),
(57, 'ARS52R1YZP', '321654', NULL, NULL, '2019-03-27 13:36:12', NULL, NULL),
(58, 'UC35XF4LBI', 'koa', NULL, NULL, '2019-03-27 13:37:24', NULL, NULL),
(59, 'UC35XF4LBI', '321654', NULL, NULL, '2019-03-27 13:37:24', NULL, NULL),
(60, '7EO9FJI5US', 'koa', NULL, NULL, '2019-03-29 16:40:23', NULL, NULL),
(61, '7EO9FJI5US', '321654', NULL, NULL, '2019-03-29 16:40:23', NULL, NULL),
(62, '7EO9FJI5US', 'AJ01', NULL, NULL, '2019-03-29 16:40:23', NULL, NULL),
(63, '7EO9FJI5US', 'AJ02', NULL, NULL, '2019-03-29 16:40:23', NULL, NULL),
(64, 'BBTG2YGDEG', 'koa', NULL, NULL, '2019-03-29 16:40:47', NULL, NULL),
(65, 'BBTG2YGDEG', '321654', NULL, NULL, '2019-03-29 16:40:47', NULL, NULL),
(66, 'BBTG2YGDEG', 'AJ01', NULL, NULL, '2019-03-29 16:40:47', NULL, NULL),
(67, 'BBTG2YGDEG', 'AJ02', NULL, NULL, '2019-03-29 16:40:47', NULL, NULL);

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
  `user_id` text NOT NULL,
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
(3, 'กำลังดำเนินการ');

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
('123', '123', ''),
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
('GES0206', 'ชีวิตและสุขภาพ', '');

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
  `role` text,
  `status` text,
  `major_id` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `password`, `title`, `name`, `tel`, `email`, `role`, `status`, `major_id`) VALUES
('321654', 'ppzx00', 'นาย', 'แอด มิน', '0898795847', 'admin@eiei.com', '3', 'สูงสุด', NULL),
('59122519010', '123456', 'นาย', 'พีพี แช่ลี้', '085414541', 'pp@hotmail.com', '1', NULL, 1020),
('59122519012', '123456', 'นาย', 'ตะวัน เข็มทอง', '0859575958', 'singcomnet@hotmail.com', '1', NULL, 1008),
('AJ01', '123456', 'อาจารย์', 'ตรวจ ละเอียดนะ', '0856252414', 'aj01@eiei.com', '2', 'รองผู้อำนวยการ', NULL),
('AJ02', '123456', 'อาจารย์', 'ตรวจ ประจำ', '052414254', 'jj@eiei.com', '2', 'อาจารย์', NULL);

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
  ADD PRIMARY KEY (`form_way_id`);

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`group_id`);

--
-- Indexes for table `groups_user`
--
ALTER TABLE `groups_user`
  ADD PRIMARY KEY (`groups_user_id`);

--
-- Indexes for table `major`
--
ALTER TABLE `major`
  ADD PRIMARY KEY (`mar_id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `paper`
--
ALTER TABLE `paper`
  ADD PRIMARY KEY (`paper_id`);

--
-- Indexes for table `paper_user`
--
ALTER TABLE `paper_user`
  ADD PRIMARY KEY (`paper_user_id`);

--
-- Indexes for table `signature`
--
ALTER TABLE `signature`
  ADD PRIMARY KEY (`sig_id`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`sub_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fac`
--
ALTER TABLE `fac`
  MODIFY `fac_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1004;

--
-- AUTO_INCREMENT for table `form`
--
ALTER TABLE `form`
  MODIFY `form_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `form_way`
--
ALTER TABLE `form_way`
  MODIFY `form_way_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10019;

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `group_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `groups_user`
--
ALTER TABLE `groups_user`
  MODIFY `groups_user_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `major`
--
ALTER TABLE `major`
  MODIFY `mar_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1027;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10040;

--
-- AUTO_INCREMENT for table `paper_user`
--
ALTER TABLE `paper_user`
  MODIFY `paper_user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `signature`
--
ALTER TABLE `signature`
  MODIFY `sig_id` int(10) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
