<?php
session_start();
include_once 'connection.php';
if (isset($_GET['id_task'])){
    $_SESSION['id_task']=$_GET['id_task'];
}   
$id_task =$_SESSION['id_task'];

$query = "select * from task where id='$id_task'";
$stmt = $conn->prepare($query);
foreach($conn->query($query) as $row){
    echo $row["task_name"];
}

?>