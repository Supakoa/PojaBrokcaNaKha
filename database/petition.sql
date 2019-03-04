-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 04, 2019 at 04:35 PM
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

-- --------------------------------------------------------

--
-- Table structure for table `form`
--

CREATE TABLE `form` (
  `form_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `detail` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `form_way`
--

CREATE TABLE `form_way` (
  `form_way_id` int(11) NOT NULL,
  `form_id` text NOT NULL,
  `user_id` text NOT NULL,
  `step` text NOT NULL
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

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `news_id` int(11) NOT NULL,
  `news_URL` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `paper`
--

CREATE TABLE `paper` (
  `paper_id` varchar(10) NOT NULL,
  `owner_id` text NOT NULL,
  `form_id` text NOT NULL,
  `paper_detail` text NOT NULL,
  `step_now` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `paper_user`
--

CREATE TABLE `paper_user` (
  `paper_user_id` int(11) NOT NULL,
  `paper_id` text NOT NULL,
  `user_id` text NOT NULL,
  `status` text NOT NULL,
  `comment` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `last_edit` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `return_file` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `sub_id` varchar(7) NOT NULL,
  `sub_name` text NOT NULL,
  `main_pro` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `major_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  MODIFY `fac_id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `form`
--
ALTER TABLE `form`
  MODIFY `form_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `form_way`
--
ALTER TABLE `form_way`
  MODIFY `form_way_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `major`
--
ALTER TABLE `major`
  MODIFY `mar_id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
