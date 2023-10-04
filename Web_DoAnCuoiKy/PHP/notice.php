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
    // Kiểm tra nếu form đã được submit
    if(isset($_POST['vocab'])) {
        // Lấy giá trị từ form
        $vocab = $_POST['vocab'];
        $user_id = $_SESSION['id'];

        // Kiểm tra xem từ vựng đã tồn tại trong database hay chưa
        $query = "SELECT * FROM `notice` WHERE `user_id` = '$user_id' AND `vocabulary` = '$vocab'";

        // Thực hiện truy vấn
        $result = mysqli_query($con, $query);

        // Kiểm tra kết quả trả về
         if(mysqli_num_rows($result) > 0) {
            // Nếu từ vựng đã tồn tại, trả về thông báo lỗi
            $response['success'] = false;
            $response['message'] = "Từ vựng này đã tồn tại";
        } else {
            // Nếu từ vựng chưa tồn tại, thêm thông tin từ vựng vào database
            $query = "INSERT INTO `notice` (`user_id`, `vocabulary`) VALUES ('$user_id', '$vocab')";

            if (mysqli_query($con, $query)) {
                // Nếu lưu thành công
                $response['success'] = true;
                $response['message'] = "Lưu từ vựng thành công!";
            } else {
                // Nếu lưu thất bại
                $response['success'] = false;
                $response['message'] = "Lưu từ vựng thất bại!";
            }
        }

    // Trả về kết quả dưới dạng JSON
    echo json_encode($response);
    }
}
?>
