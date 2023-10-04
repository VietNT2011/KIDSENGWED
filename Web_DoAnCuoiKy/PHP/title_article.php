<?php

require_once '../PHP/connecttesting.php';


$query = "SELECT id, el_title, vi_title FROM article";
$result = mysqli_query($con, $query);
if(isset($result))
{
    $data = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    
    echo json_encode($data);
}
else
{
    echo"
    <script>
    alert('cannot query');
    </script>
    ";
}
?>