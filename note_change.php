<?php
session_start();
include_once 'connection.php';

$id_task=$_GET['id_task'];
$task_note= $_GET['note_change'];
$query="UPDATE task SET note='$task_note' where id = '$id_task' ";
$stmt = $conn->exec($query);


$query = "select * from task where id ='$id_task' ";
$stmt = $conn->prepare($query);
foreach($conn->query($query) as $row){
    echo $row['note'];
}  
?>