-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2023 at 10:37 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clinic_management_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `about_us`
--

CREATE TABLE `about_us` (
  `page_id` bigint(20) NOT NULL COMMENT 'Auto Increment',
  `page_content` text NOT NULL COMMENT 'About Us Page Content',
  `page_img` varchar(255) DEFAULT NULL COMMENT 'About Us Page Image',
  `entry_date` datetime NOT NULL COMMENT 'About Us Entry Date',
  `updated_date` datetime DEFAULT NULL COMMENT 'About Us Updated Date'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `about_us`
--

INSERT INTO `about_us` (`page_id`, `page_content`, `page_img`, `entry_date`, `updated_date`) VALUES
(7, 'Explain the purpose of the software and why it was developed. For example, you might explain that the software was designed to improve the efficiency and accuracy of healthcare provider\'s work, to provide better patient care, or to improve communication between healthcare providers.', '1677828051301img.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `admin_users`
--

CREATE TABLE `admin_users` (
  `admin_id` bigint(20) NOT NULL COMMENT 'Auto Increment',
  `admin_name` varchar(255) NOT NULL COMMENT 'Admin Name',
  `email_id` varchar(255) DEFAULT NULL COMMENT 'Admin Email',
  `admin_phone` varchar(15) NOT NULL COMMENT 'Admin Mobile No',
  `password` varchar(255) NOT NULL COMMENT 'Encrypted Password Store',
  `status` int(4) NOT NULL DEFAULT 1 COMMENT '0=Inactive, 1=Active, 2=Bloack, 3=Deleted',
  `entry_date` datetime NOT NULL COMMENT 'Admin User Creation Date'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `admin_users`
--

INSERT INTO `admin_users` (`admin_id`, `admin_name`, `email_id`, `admin_phone`, `password`, `status`, `entry_date`) VALUES
(1, 'JAYDIPSINH', 'jaydip@gmail.com', '1234567890', '12345678', 1, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `page_id` bigint(20) NOT NULL COMMENT 'Auto Increment',
  `email_id` varchar(255) NOT NULL COMMENT 'Email Address',
  `phone_no1` varchar(15) NOT NULL COMMENT 'Phone Number 1',
  `phone_no2` varchar(15) NOT NULL COMMENT 'Phone Number 2',
  `address_1` varchar(255) NOT NULL COMMENT 'Address 1',
  `address_2` varchar(255) NOT NULL COMMENT 'Address 2',
  `whatsapp_no` varchar(15) DEFAULT NULL COMMENT 'Whatsapp Number',
  `facebook_link` varchar(255) DEFAULT NULL COMMENT 'Facebook Link',
  `instagram_link` varchar(255) DEFAULT NULL COMMENT 'Instagram Link',
  `youtube_link` varchar(255) DEFAULT NULL COMMENT 'YouTube Link',
  `gplus_link` varchar(255) DEFAULT NULL COMMENT 'Google Link',
  `linkedin_link` varchar(255) DEFAULT NULL COMMENT 'Linkedin Link',
  `entry_date` datetime NOT NULL COMMENT 'Entry Date',
  `updated_date` datetime DEFAULT NULL COMMENT 'Updated Date'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci ROW_FORMAT=COMPACT;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`page_id`, `email_id`, `phone_no1`, `phone_no2`, `address_1`, `address_2`, `whatsapp_no`, `facebook_link`, `instagram_link`, `youtube_link`, `gplus_link`, `linkedin_link`, `entry_date`, `updated_date`) VALUES
(1, 'rajesh@gmail.com', '1234567890', '1234567800', '32,rajkot road', '30,manesh chock', '1234567890', NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'jay@gmail.com', '8469006800', '321', '2,raj road', '12,madhav complex', '8469006800', NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedback_id` bigint(20) NOT NULL COMMENT 'feedback_id',
  `patient_id` varchar(255) NOT NULL COMMENT 'patient_id',
  `description` varchar(255) NOT NULL COMMENT 'description',
  `entry_date` date NOT NULL COMMENT 'entry_date',
  `entry_by` int(20) NOT NULL COMMENT 'entry_by'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`feedback_id`, `patient_id`, `description`, `entry_date`, `entry_by`) VALUES
(2, '2', 'Great doctor', '0000-00-00', 1),
(5, '2', 'Nice clinic', '0000-00-00', 1),
(10, '1', 'Great clinic ', '0000-00-00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `manage_appointment`
--

CREATE TABLE `manage_appointment` (
  `appointment_id` bigint(20) NOT NULL COMMENT 'admin_id',
  `patient_id` varchar(20) NOT NULL COMMENT 'patient_id',
  `appointment_time` varchar(20) NOT NULL COMMENT 'time',
  `doctor_id` varchar(20) NOT NULL COMMENT 'doctor_id',
  `desises` varchar(100) NOT NULL COMMENT 'desises',
  `entry_by` bigint(20) NOT NULL DEFAULT 1 COMMENT 'admin_id',
  `status` bigint(20) NOT NULL DEFAULT 1 COMMENT '1=active,\r\n2=inactive',
  `entry_date` datetime NOT NULL COMMENT 'entry_date',
  `update_date` datetime DEFAULT NULL COMMENT 'update_date',
  `appointment_date` varchar(25) NOT NULL COMMENT 'Appointment Date'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `manage_appointment`
--

INSERT INTO `manage_appointment` (`appointment_id`, `patient_id`, `appointment_time`, `doctor_id`, `desises`, `entry_by`, `status`, `entry_date`, `update_date`, `appointment_date`) VALUES
(16, '1', '11:50 AM', '1', 'fever', 0, 0, '0000-00-00 00:00:00', NULL, '2023-07-24'),
(17, '2', '12:59', '2', 'fever', 0, 0, '0000-00-00 00:00:00', NULL, '2016-10-30'),
(18, '2', '12:59', '3', 'fever', 0, 0, '0000-00-00 00:00:00', NULL, '2023-06-28'),
(20, '1', '10:00AM', '4', 'fever', 0, 0, '0000-00-00 00:00:00', NULL, '2023-09-15'),
(21, '1', '11:00AM', '1', 'dental', 0, 0, '0000-00-00 00:00:00', NULL, '2023-12-30'),
(22, '2', '12:59', '2', 'fever', 0, 0, '0000-00-00 00:00:00', NULL, '2021-08-30'),
(23, '1', '00:13', 'Dr.rajesh', 'dental', 0, 0, '0000-00-00 00:00:00', NULL, '2023-03-11'),
(24, '1', '10:58', 'Dr.manisha', 'fever', 0, 0, '0000-00-00 00:00:00', NULL, '2020-07-20'),
(25, '4', '00:59', 'Dr.rajesh', 'fever', 0, 0, '0000-00-00 00:00:00', NULL, '2022-12-30'),
(26, '4', '12:59', '2', 'fever', 0, 0, '0000-00-00 00:00:00', NULL, '2023-12-28'),
(27, '4', '12:18', '3', 'Scabie', 0, 0, '0000-00-00 00:00:00', NULL, '2023-03-11'),
(29, '4', '10:46', '1', 'Scabie', 0, 0, '0000-00-00 00:00:00', NULL, '2023-03-28'),
(51, '4', '03:35', '2', '31,raja chock', 0, 0, '0000-00-00 00:00:00', NULL, '2023-03-30'),
(52, '4', '04:05', '1', '31,raja chock', 0, 0, '0000-00-00 00:00:00', NULL, '2023-04-08'),
(53, '4', '15:04', '2', 'kk', 0, 0, '0000-00-00 00:00:00', NULL, '2023-04-29'),
(54, '4', '12:59', '2', 'Scabie', 0, 0, '0000-00-00 00:00:00', NULL, '2023-12-31'),
(55, '4', '12:59', '2', 'Scabie', 0, 0, '0000-00-00 00:00:00', NULL, '2023-12-31'),
(56, '4', '12:59', '2', 'Scabie', 0, 0, '0000-00-00 00:00:00', NULL, '2023-12-31');

-- --------------------------------------------------------

--
-- Table structure for table `manage_doctor`
--

CREATE TABLE `manage_doctor` (
  `doctor_id` bigint(20) NOT NULL COMMENT 'doctor_id',
  `name` varchar(255) NOT NULL COMMENT 'name',
  `mobile_no` varchar(15) NOT NULL COMMENT 'mobile_no',
  `gender` varchar(2) NOT NULL COMMENT 'gender',
  `address` varchar(255) NOT NULL COMMENT 'address',
  `dob` date NOT NULL COMMENT 'dob',
  `entry_by` bigint(20) NOT NULL DEFAULT 1 COMMENT 'admin_id',
  `status` bigint(20) NOT NULL DEFAULT 1 COMMENT '1=active,''\r\n2=inactive',
  `entry_Date` datetime NOT NULL COMMENT 'entry_date',
  `update_Date` datetime DEFAULT NULL COMMENT 'update_date',
  `email` varchar(255) NOT NULL COMMENT 'email',
  `specialist` varchar(255) NOT NULL COMMENT 'specialist doctor',
  `degree` varchar(255) NOT NULL COMMENT 'degree'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `manage_doctor`
--

INSERT INTO `manage_doctor` (`doctor_id`, `name`, `mobile_no`, `gender`, `address`, `dob`, `entry_by`, `status`, `entry_Date`, `update_Date`, `email`, `specialist`, `degree`) VALUES
(1, 'Dr.Rajesh', '1223445', 'm', 'ac23', '0000-00-00', 1, 1, '0000-00-00 00:00:00', NULL, 'rajesh@gmail.com', 'Dental', 'Master of Dental Surger'),
(2, 'Dr.manisha', '1223445', 'm', 'ac23', '0000-00-00', 1, 1, '0000-00-00 00:00:00', NULL, 'manisha@gmail.com', 'Eyes', 'Bachelor of Medicine, Bachelor of Surgery(MBBS)'),
(3, 'Dr.jayraj', '123456', 'm', '32,rajkot', '2023-03-09', 1, 1, '2023-03-02 09:08:18', NULL, 'jayarj@gmail.com', 'Menter', 'Doctor of Psychology (PsyD)'),
(4, 'Dr.radhika', '123', 'f', '32,rajkot', '0000-00-00', 1, 1, '2023-03-02 09:12:23', NULL, 'radhika@gmail.com', 'General medicion', 'Doctor of Medicine (MD)');

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `patient_id` bigint(20) NOT NULL COMMENT 'patient_id',
  `name` varchar(255) NOT NULL COMMENT 'name',
  `mobile_no` varchar(15) NOT NULL COMMENT 'mobile_no',
  `gender` varchar(2) NOT NULL COMMENT 'gender',
  `address` varchar(255) NOT NULL COMMENT 'address',
  `dob` date NOT NULL COMMENT 'Dob',
  `entry_by` bigint(20) NOT NULL DEFAULT 1 COMMENT 'patient_id',
  `status` bigint(20) NOT NULL DEFAULT 1 COMMENT '1=active,\r\n2=inactive',
  `entry_date` datetime NOT NULL COMMENT 'entry_date',
  `desises` varchar(255) NOT NULL COMMENT 'desises',
  `update_date` datetime DEFAULT NULL COMMENT 'update_date',
  `password` varchar(15) NOT NULL COMMENT 'Password'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`patient_id`, `name`, `mobile_no`, `gender`, `address`, `dob`, `entry_by`, `status`, `entry_date`, `desises`, `update_date`, `password`) VALUES
(1, 'jaybhai', '8469006825', 'M', '31,raja chock', '1995-05-04', 0, 0, '0000-00-00 00:00:00', 'dental', '0000-00-00 00:00:00', '12131213'),
(2, 'krish', '8469006820', 'M', '31,parimar road', '1991-12-28', 0, 1, '0000-00-00 00:00:00', 'faver', '0000-00-00 00:00:00', '1234567890'),
(3, 'hardik', '8347191919', 'M', 'nirma society', '1993-11-25', 1, 1, '0000-00-00 00:00:00', 'fever', '0000-00-00 00:00:00', '8469006869'),
(4, 'jayraj', '8530181717', 'M', 'aanand society', '1988-08-26', 1, 1, '0000-00-00 00:00:00', 'fever', '0000-00-00 00:00:00', '8469006869');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_us`
--
ALTER TABLE `about_us`
  ADD PRIMARY KEY (`page_id`),
  ADD KEY `page_id` (`page_id`);

--
-- Indexes for table `admin_users`
--
ALTER TABLE `admin_users`
  ADD PRIMARY KEY (`admin_id`),
  ADD KEY `admin_id` (`admin_id`,`email_id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`page_id`),
  ADD KEY `page_id` (`page_id`,`email_id`,`phone_no1`,`phone_no2`,`address_1`,`address_2`,`whatsapp_no`,`facebook_link`,`instagram_link`,`youtube_link`,`gplus_link`,`linkedin_link`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedback_id`);

--
-- Indexes for table `manage_appointment`
--
ALTER TABLE `manage_appointment`
  ADD PRIMARY KEY (`appointment_id`);

--
-- Indexes for table `manage_doctor`
--
ALTER TABLE `manage_doctor`
  ADD PRIMARY KEY (`doctor_id`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`patient_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about_us`
--
ALTER TABLE `about_us`
  MODIFY `page_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'Auto Increment', AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `admin_users`
--
ALTER TABLE `admin_users`
  MODIFY `admin_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'Auto Increment', AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `page_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'Auto Increment', AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedback_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'feedback_id', AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `manage_appointment`
--
ALTER TABLE `manage_appointment`
  MODIFY `appointment_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'admin_id', AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `manage_doctor`
--
ALTER TABLE `manage_doctor`
  MODIFY `doctor_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'doctor_id', AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `patient_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'patient_id', AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
