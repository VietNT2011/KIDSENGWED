<?php

require_once '../PHP/connecttesting.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

function sendMail($email, $v_code)
{
    require ("../PHP/PHPMailer/PHPMailer.php");
    require ("../PHP/PHPMailer/Exception.php");
    require ("../PHP/PHPMailer/SMTP.php");
    
    $mail = new PHPMailer(true);

    try {         
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'ntv142018@gmail.com';                     //SMTP username
        $mail->Password   = 'ejfioutbqzfqtyrt';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    
        //Recipients
        $mail->setFrom('ntv142018@gmail.com', 'KidsENG');

        $mail->addAddress($email);     //Add a recipient
    
        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Email Verification from KidsENG';
        $mail->Body    = "Cảm ơn bạn đã đắng ký tài khoản từ chúng tôi!
        Nhấn vào đường link phía dưới để xác thực
        <a href = 'http://localhost/Web_DoAnCuoiKy/PHP/verify.php?email=$email&v_code=$v_code' >Xác thực</a>";
    
        $mail->send();
        return true;
    } catch (Exception $e) {
        return false;
    }
}
if(isset($_POST['sign-up']))
{
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT ); //Hashing password
    $email = $_POST['email'];
    $v_code = bin2hex(random_bytes(16));
    if(!empty($username) && !empty($password) && !empty($email))// ensure information is filled by user
    {
        $user_exist_query = "SELECT * FROM `user` WHERE `username` = '$username' OR `email` = '$email'";
        $result = mysqli_query($con, $user_exist_query);
        if($result)
        {
            if(mysqli_num_rows($result)>0) // it will be excuted if username or email is already taken
            {
                echo"
                     <script>
                         alert('Email hoặc tài khoản này đã tồn tại');
                         window.location.href = '../Html/sign-up.html';
                     </script>
                ";
            }
            else
            {
                $query = "INSERT INTO `user`(`username`, `password`, `email`, `verification_code`, `is_verified`) VALUES ('$username','$password','$email', '$v_code', '0')";
                if(mysqli_query($con, $query) && sendMail($email, $v_code)) // Check if the data has been successfully inserted
                {
                    // Code to execute if insertion was successful
                    echo"
                        <script>
                            alert('Chúc mừng bạn đã đăng ký tài khoảng thành công');
                            window.location.href = '../Html/login.html';
                        </script>
                    ";
                }
                else // it wil be excuted if no one has taken username or email
                {
                    // Code to execute if insertion failed
                    echo"
                        <script>
                            alert('Đăng ký thất bại');
                            window.location.href = '../Html/sign-up.html';
                        </script>
                    ";
                }
            }

        }
        else
        {
            echo"
                <script>
                    alert('Không truy vấn thành công');
                    window.location.href = '../Html/sign-up.html';
                </script>
            ";
        }
    }
    else
    {
        echo"
            <script>
                alert('Vui lòng nhập đầy đủ thông tin');
                window.location.href = '../Html/sign-up.html';
            </script>
        ";
    }
}
?>