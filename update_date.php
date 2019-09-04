<?php
session_start();
include_once 'connection.php';

$id_task =$_GET['id_task'];
$task_date= $_GET['date'];
$query="UPDATE task SET date='$task_date' where id = '$id_task' ";
$stmt = $conn->exec($query);

$query = "select * from task where id ='$id_task' ";
$stmt = $conn->query($query);
$stmt->setFetchMode(PDO::FETCH_ASSOC);
$stmt->execute(array('name' => 'a'));
while ($row = $stmt->fetch()){
    $myObj= new StdClass;

    $myObj->date = $row['date'];

    $myJSON = json_encode($myObj);

    echo $myJSON;
}
?>