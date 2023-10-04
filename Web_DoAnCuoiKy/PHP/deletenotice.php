<?php
// Kết nối database
require_once '../PHP/connecttesting.php';

if(isset($_POST['id']))
{
    $id = $_POST['id'];
    $query = " DELETE FROM `notice` WHERE `id` = '$id' ";
    $result = mysqli_query($con, $query);
    if($result)
    {
        $response['success'] = true;
        $response['message'] = "Bạn đã học xong một từ vựng";
    }
    else
    {
        $response['success'] = false;
        $response['message'] = "Vui lòng tải lại trang!";
    }
    echo json_encode($response);
}
?>