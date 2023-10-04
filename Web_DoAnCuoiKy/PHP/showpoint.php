<?php
// Kết nối tới database
require_once '../PHP/connecttesting.php';
session_start();

if (!isset($_SESSION['id'])) 
{
  echo 'Please login first.';
  exit;
}
else
{
    $id = $_SESSION['id'];
    $query = "SELECT `point` FROM `user` WHERE `id` = '$id'";
    $result = mysqli_query($con, $query);
    if($result)
    {
        $row = mysqli_fetch_assoc($result);
        $point = $row['point'];
        $response['success'] = true;
        $response['point'] = $point;
    }
    else
    {
        $response['success'] = false;
    }
    echo json_encode($response);
}
?>