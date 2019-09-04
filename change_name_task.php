<?php

echo $_FILES['a'];
?> 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
</head>      
<body>
    <?php
    if (isset($_FILES['a'])){
        pre_r($_FILES);
        move_uploaded_file($_FILES['a']['tmp_name'],'file_upload/'.$_FILES['a']['name']);
    }
    function pre_r($array){
        echo '<pre>';
        print_r($array);
        echo '</pre>';
        echo $_FILES['a']['name'];
    }
    
    ?>
    <form action="change_name_task.php" method="post" enctype="multipart/form-data">
        <h3>Tên</h3>
        <input type="text"  name=email>
        <h3>Mật Khẩu</h3>
        <input type=file name=a>
        <div>
        <button type="submit">Submit</button>
        </div>
        

    </form>
    <a  href="C:\xampp\htdocs\myweb\file_upload\46104304_2179695028938446_7513826503012909056_o.jpg">img</a>
    <img src="file_upload\46104304_2179695028938446_7513826503012909056_o.jpg" alt="abc" height="100" width="100">
</body>  