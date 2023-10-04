<?php
// Kết nối database
require_once '../PHP/connecttesting.php';
// Kiểm tra xem user đã đăng nhập hay chưa
session_start();
if (!isset($_SESSION['id'])) 
{
  echo 'Please login first.';
  exit;
}
else
{
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $id = $_SESSION['id'];
        $target_dir = 'uploads/';
        $target_file = $target_dir . basename($_FILES['fileavatar']['name']);
        if (move_uploaded_file($_FILES['fileavatar']['tmp_name'], $target_file)) {
          // File đã được upload thành công
          $url = 'http://localhost/web_DoAnCuoiKy/PHP/' . $target_file;
          // Lưu URL vào database
          $query = "UPDATE `user` SET `avatar` = '$url' WHERE `id` = '$id' ";
          $result = mysqli_query($con, $query);
          if($result)
          {
            $response['success'] = true;
            echo json_encode($response);
            exit;
          }
          else
          {
            $response['success'] = false;
            echo json_encode($response);
            exit;
          }
        } else {
            $response['success'] = false;
            echo json_encode($response);
            exit;
        }
      }     
    else
    {
        $response['success'] = false;
        $response['message'] = "Vui lòng chọn file!";
        echo json_encode($response);
        exit;
    }
}
?>

