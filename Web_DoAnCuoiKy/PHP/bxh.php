<?php
// Kết nối tới database
require_once '../PHP/connecttesting.php';

// Lấy top 10 người dùng có điểm cao nhất
$query = "SELECT `full_name`, `point` FROM `user` ORDER BY `point` DESC LIMIT 10";
$result = mysqli_query($con, $query);

// Lưu trữ dữ liệu vào mảng
$data = array();
while ($row = mysqli_fetch_assoc($result)) {
    if ($row['full_name'] == null) {
        $row['full_name'] = 'Anonymous';
    }
    $data[] = $row;
}

// Trả về dữ liệu dạng JSON
echo json_encode($data);
?>
