<?php

require_once '../PHP/connecttesting.php';
session_start();

if(isset($_POST['login']))
{
    $username = $_POST['username'];
    $password = $_POST['password'];
    if(!empty($username) && !empty($password))// ensure information is filled by user
    {
        $query = "SELECT * FROM `user` WHERE `username` = '$username'";
        $result = mysqli_query($con, $query);
        if($result) // query testing
        {
            if(mysqli_num_rows($result)==1)
            {
                $result_fetch = mysqli_fetch_assoc($result);
                if(password_verify($password, $result_fetch['password'])) // checking password
                {
                    //if password is correct
                    $_SESSION['logged_in'] = true;
                    $_SESSION['username'] = $result_fetch['username'];
                    $_SESSION['id'] = $result_fetch['id'];
                    $_SESSION['email'] = $result_fetch['email'];
                    $_SESSION['password'] = $result_fetch['password'];
                    header("location: ../Html/Web.html");
                }
                else
                {
                    //if password is incorrect
                    echo"
                        <script>
                            alert('Mật khẩu không chính xác vui lòng nhập lại');
                            window.location.href = '../Html/login.html';
                        </script>
                    ";
                }
            }
            else
            {
                echo"
                <script>
                    alert('Tài khoản không tồn tại');
                    window.location.href = '../Html/login.html';
                </script>
            ";
            }
        }
        else
        {
            echo"
            <script>
                alert('Không truy vấn thành công');
                window.location.href = '../Html/login.html';
            </script>
        ";
        }
    }
    else
    {
        echo"
            <script>
                alert('Vui lòng nhập đầy đủ thông tin');
                window.location.href = '../Html/login.html';
            </script>
        ";
    }
}
?>