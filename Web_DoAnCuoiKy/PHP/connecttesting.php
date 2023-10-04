<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "dbms";

$con = new mysqli($host, $username, $password, $dbname);
if($con->connect_error)
{
    die("Cannot connect".$con->connect_error);
}
else
{
   
}
?>