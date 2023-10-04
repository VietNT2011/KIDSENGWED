<?php
// Kết nối tới database
require_once '../PHP/connecttesting.php';
session_start();
// Lấy user_id từ Ajax
// $user_id = $_GET['user_id'];
$user_id = $_SESSION['id'];
// Tạo câu truy vấn SQL để lấy danh sách từ vựng của người dùng
$sql = " SELECT id, vocabulary FROM `notice` WHERE `user_id` = '$user_id' ";

// Thực thi truy vấn
$result = mysqli_query($con, $sql);

// Tạo một mảng chứa các từ vựng
$vocabularies = array();

// Kiểm tra kết quả trả về từ truy vấn
if (mysqli_num_rows($result) > 0) {
  // Lặp qua các dòng kết quả và lưu từ vựng vào mảng
  while ($row = mysqli_fetch_assoc($result)) {
    $vocabularies[] = $row;
  }
}

// Trả về dữ liệu dưới dạng JSON
echo json_encode($vocabularies);
?>
