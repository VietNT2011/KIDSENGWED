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
  if ($_SERVER['REQUEST_METHOD'] == 'POST')
  {
    $id=$_SESSION['id'];
    $full_name = $_POST['full_name'];
    $date_of_birth = $_POST['date_of_birth'];
    $class = $_POST['class'];
    if (!empty($full_name)) {
      $query = "UPDATE `user` SET `full_name` = '$full_name' WHERE `id` = '$id' ";
      $result = mysqli_query($con, $query);
      if(isset($result))
      {
        $response['success_full_name'] = true;
        $response['full_name'] = $full_name;
      }
      else
      {
        $response['success_full_name'] = false;
      }
    }
    if (!empty($date_of_birth)) {
      $query = "UPDATE `user` SET `date_of_birth` = '$date_of_birth' WHERE `id` = '$id' ";
      $result = mysqli_query($con, $query);
      if(isset($result))
      {
        $response['success_date_of_birth'] = true;
        $response['date_of_birth'] = $date_of_birth;
      }
      else
      {
        $response['success_date_of_birth'] = false;
      }
    }
    if (!empty($class)) {
      $query = "UPDATE `user` SET `class` = '$class' WHERE `id` = '$id' ";
      $result = mysqli_query($con, $query);
      if(isset($result))
      {
        $response['success_class'] = true;
        $response['class'] = $class;
      }
      else{
        $response['success_class'] = false;
      }
    }
  }
  echo json_encode($response);
}
?>
