-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2019 at 05:24 PM
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
  `detail` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `form`
--

INSERT INTO `form` (`form_id`, `name`, `detail`) VALUES
(1, 'แบบคำร้องขอตรวจสอบผลการเรียน', ''),
(2, 'แบบฟอร์มแจ้งสาเหตุการขาดสอบรายวิชาศึกษาทั่วไป', ''),
(3, 'แบบคำร้องขอแก้ไขผลการเรียน', ''),
(4, 'แบบคำร้องขอสอบภายหลัง', ''),
(5, 'แบบใบลาป่วย ลากิจ', ''),
(6, 'ใบคำร้องขอรหัสผ่านเข้าระบบ', ''),
(7, 'แบบคำร้องทั่วไป', ''),
(8, 'ติดต่อเจ้าหน้าที่', '');

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
(10001, '8', '9', '1'),
(10002, '8', '1', '1'),
(10003, '8', '2', '1');

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
(10015, 'asd', '2'),
(10016, 'asd', '1'),
(10017, 'w2234', '1'),
(10018, 'ddqw', '1'),
(10019, '222', '2'),
(10020, 'ddqw', '1'),
(10021, 'ddqw', '2'),
(10022, 'asd', '1'),
(10023, 'ddqw', '2'),
(10024, 'asd', '2'),
(10025, 'ddqw', '2'),
(10026, 'asd', '1'),
(10027, 'ddqw', '1'),
(10028, '222', '2'),
(10029, 'asd', '1'),
(10030, '222', '2'),
(10031, 'ddqw', '1'),
(10032, 'ddqw', '1'),
(10033, '222', '1'),
(10034, 'asd', '1'),
(10035, '222', '2'),
(10036, '222', '1'),
(10037, 'asd', '2'),
(10038, 'asd', '1'),
(10039, 'ddqw', '2'),
(10040, 'asd', '1'),
(10041, '222', '1'),
(10042, 'asd', '1'),
(10043, 'asd', '2'),
(10044, 'asf', '2'),
(10045, '222', '1'),
(10046, 'asd', '2'),
(10047, '222', '1'),
(10048, 'asd', '1'),
(10049, 'asd', '1'),
(10050, '222', '2'),
(10051, 'asd', '2'),
(10052, 'asd', '1'),
(10053, '222', '1'),
(10054, 'asd', '2'),
(10055, '222', '1'),
(10056, 'asd', '1'),
(10057, '222', '1'),
(10058, 'asd', '2'),
(10059, 'ddqw', '1'),
(10060, '222', '1'),
(10061, 'asd', '1'),
(10062, 'asd', '1');

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
('1QB44187UN', '321654', '8', 'sdggg๛dsggs', '1', '4', '', '2019-03-17 13:03:15'),
('2OQ5YZW55Z', '321654', '8', 'asd๛asddddd', '1', '4', '', '2019-03-15 16:27:56'),
('3XB634IVGU', '321654', '8', 'qw33332๛123', '1', '4', '', '2019-03-17 13:03:25'),
('46APPHMIF2', '321654', '1', 'GES0205๛001', '1', '3', '', '2019-03-15 16:12:47'),
('84CJBK1SBT', '321654', '8', 'qw33332๛123', '1', '4', '', '2019-03-17 13:03:52'),
('8MGF47KV7A', '321654', '8', 'ครั้ง4๛ฟไไ', '1', '4', '', '2019-03-15 16:37:40'),
('KZSF4D9LTY', '321654', '8', '233๛678', '1', '4', '', '2019-03-17 13:04:04'),
('NSL9TBNBWF', '321654', '8', '๛', '1', '4', '', '2019-03-15 16:25:13'),
('OPVIG7X7T0', '321654', '8', 'ครั้ง3๛อิอิ', '1', '4', '', '2019-03-15 16:36:05'),
('RZH71J19PE', '321654', '8', 'sdggg๛dsggs', '1', '4', '', '2019-03-17 13:02:27');

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
(1, '46APPHMIF2', '321654', NULL, NULL, '2019-03-15 17:31:00', NULL, NULL),
(2, 'NSL9TBNBWF', '1', NULL, NULL, '2019-03-15 16:25:13', NULL, NULL),
(3, 'NSL9TBNBWF', '2', NULL, NULL, '2019-03-15 16:25:13', NULL, NULL),
(4, '2OQ5YZW55Z', '1', NULL, NULL, '2019-03-15 16:27:56', NULL, NULL),
(5, '2OQ5YZW55Z', '2', NULL, NULL, '2019-03-15 16:27:56', NULL, NULL),
(6, 'OPVIG7X7T0', '1', NULL, NULL, '2019-03-15 16:36:05', NULL, NULL),
(7, 'OPVIG7X7T0', '2', NULL, NULL, '2019-03-15 16:36:05', NULL, NULL),
(8, '8MGF47KV7A', '9', NULL, NULL, '2019-03-15 16:37:40', NULL, NULL),
(9, '8MGF47KV7A', '1', NULL, NULL, '2019-03-15 16:37:40', NULL, NULL),
(10, '8MGF47KV7A', '2', NULL, NULL, '2019-03-15 16:37:40', NULL, NULL),
(11, '1QB44187UN', '', NULL, NULL, '2019-03-17 13:03:15', NULL, NULL),
(12, '1QB44187UN', '', NULL, NULL, '2019-03-17 13:03:15', NULL, NULL),
(13, '1QB44187UN', '', NULL, NULL, '2019-03-17 13:03:15', NULL, NULL),
(14, '3XB634IVGU', '', NULL, NULL, '2019-03-17 13:03:25', NULL, NULL),
(15, '3XB634IVGU', '', NULL, NULL, '2019-03-17 13:03:25', NULL, NULL),
(16, '3XB634IVGU', '', NULL, NULL, '2019-03-17 13:03:25', NULL, NULL),
(17, '84CJBK1SBT', '9', NULL, NULL, '2019-03-17 13:03:52', NULL, NULL),
(18, '84CJBK1SBT', '1', NULL, NULL, '2019-03-17 13:03:52', NULL, NULL),
(19, '84CJBK1SBT', '2', NULL, NULL, '2019-03-17 13:03:52', NULL, NULL),
(20, 'KZSF4D9LTY', '9', NULL, NULL, '2019-03-17 13:04:04', NULL, NULL),
(21, 'KZSF4D9LTY', '1', NULL, NULL, '2019-03-17 13:04:04', NULL, NULL),
(22, 'KZSF4D9LTY', '2', NULL, NULL, '2019-03-17 13:04:04', NULL, NULL);

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
('123456', 'ppzx00', NULL, NULL, NULL, NULL, NULL, NULL, 0),
('321654', 'ppzx00', 'นาย', 'ตะวัน เข็มทอง', '321654', 's321654@ssru.ac.th', '1', '1', 1002),
('singha', 'ppzx00', NULL, NULL, NULL, NULL, '1', NULL, NULL);

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
  MODIFY `form_way_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10004;

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `group_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10063;

--
-- AUTO_INCREMENT for table `groups_user`
--
ALTER TABLE `groups_user`
  MODIFY `groups_user_id` int(5) NOT NULL AUTO_INCREMENT;

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
  MODIFY `paper_user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `signature`
--
ALTER TABLE `signature`
  MODIFY `sig_id` int(10) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
