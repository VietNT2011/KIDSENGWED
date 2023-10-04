<?php
// Kết nối database
require_once '../PHP/connecttesting.php';

session_start();
if (!isset($_SESSION['id'])) 
{
  echo 'Please login first.';
  exit;
}
else{
    $id = $_SESSION['id'];
    $query = " UPDATE `user` SET `point` = `point` + 10 WHERE id = '$id' ";
    $result = mysqli_query($con, $query);
    if($result)
    {
        $response['success'] = true;
    }
    else
    {
        $response['success'] = false;
    }
    echo json_encode($response);
}
?>