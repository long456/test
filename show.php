<?php
session_start();
include_once 'connection.php';

if (isset($_POST['file_id'])){
    echo $_POST['file_id'];
    $file_id=$_POST['file_id'];
    $query = "select * from file where task_id ='$file_id' ";
    $stmt = $conn->prepare($query);
    foreach($conn->query($query) as $row){
       $a="file_upload/";
       $b = $row["link"];
       echo '<img src="'.$a.$b.'">';
    }

}

?>
