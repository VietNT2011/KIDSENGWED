<?php
// Kết nối database
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
    $sql = "SELECT `full_name`, `email`, `date_of_birth`, `class`, `avatar` FROM `user` WHERE `id` = ' $id'";
    $result = mysqli_query($con, $sql);
    if(isset($result))
    {
        $row = $result->fetch_assoc(); 
    }
    echo json_encode($row);
}
?>
