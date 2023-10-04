<?php
// Kết nối database
require_once '../PHP/connecttesting.php';
// Lấy dữ liệu từ database
$article_id = $_GET['article_id'];

$sql = "SELECT article.el_title, article.vi_title, content.el_content, content.vi_content
FROM article
JOIN content ON article.id = content.article_id
WHERE article.id = $article_id";
$result = mysqli_query($con, $sql);

if(isset($result))
{
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $data = array(
            'el_content' => $row['el_content'], 
            'vi_content' => $row['vi_content'],
            'el_title' => $row['el_title'],
            'vi_title' => $row['vi_title']
        );
        echo json_encode($data);
    } else {
        echo "0 results";
    }
    
}
else{
    echo"
    <script>
    alert('cannot query');
    </script>
    ";
}
