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
  $response = array();
  if ($_SERVER['REQUEST_METHOD'] == 'POST')
  {
    $currentpassword = $_POST['currentPassword'];
    $newpassword = $_POST['newPassword'];
    $confirmpassword = $_POST['confirmPassword'];
    if (!empty($currentpassword) && !empty($newpassword) && !empty($confirmpassword)) 
    {
      $id = $_SESSION['id'];
      $sql = "SELECT `password` FROM `user` WHERE `id` = '$id'";
      $result = mysqli_query($con, $sql);
      $row = mysqli_fetch_assoc($result);
      $password = $row['password'];
      if (password_verify($currentpassword, $password)) 
      {
        // Mật khẩu hiện tại đúng, tiếp tục kiểm tra mật khẩu mới
        if ($newpassword == $confirmpassword) 
        {
          // Cập nhật mật khẩu mới vào database
          $hashed_password = password_hash($newpassword, PASSWORD_BCRYPT);
          $sql = "UPDATE `user` SET `password` = '$hashed_password' WHERE id = '$id'";
          $result = mysqli_query($con, $sql);
          if($result)
          {
            $response['success'] = true;
            $response['message'] = "Đổi mật khẩu thành công";
            echo json_encode($response);
            exit;
          }
          else
          {
            $response['success'] = false;
            $response['message'] = "Đổi mật khẩu thất bại";
            echo json_encode($response);
            exit;
          }
        } 
        else 
        {
          $response['success'] = false;
          $response['message'] = "Mật khẩu mới và nhập lại không khớp";
          echo json_encode($response);
          exit;
        }
      } 
      else 
      {
        $response['success'] = false;
        $response['message'] = "Mật khẩu hiện tại không đúng";
        echo json_encode($response);
        exit;
      }
    } 
    else 
    {
      $response['success'] = false;
      $response['message'] = "Vui lòng nhập đầy đủ thông tin!";
      echo json_encode($response);
      exit;
    }
  }
}
?>