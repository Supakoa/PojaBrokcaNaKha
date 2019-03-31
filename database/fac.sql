-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2019 at 05:48 PM
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

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fac`
--
ALTER TABLE `fac`
  ADD PRIMARY KEY (`fac_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fac`
--
ALTER TABLE `fac`
  MODIFY `fac_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1013;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
