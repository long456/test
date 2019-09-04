<?php
session_start();
include_once 'connection.php';

$id_task_change=$_GET['id_task'];
$id_task_change=$_GET['date_change'];
$task_date= $_POST['task_date'];
$query="UPDATE task SET date='$task_date' where id = '$id_task_change' ";
$stmt = $conn->exec($query);

$id_task=$_SESSION['id_task'];
$query = "select * from task where id='$id_task'";
$stmt = $conn->prepare($query);
foreach($conn->query($query) as $row){
    echo $row['date'];
};
?>